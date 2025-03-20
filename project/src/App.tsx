import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { User } from '@supabase/supabase-js';
import { supabase } from './lib/supabase';
import { AuthForm } from './components/AuthForm';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { Documents } from './components/Documents';
import { Automation } from './components/Automation';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes on auth state (sign in, sign out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          user ? <Navigate to="/dashboard" /> : <LandingPage />
        } />
        <Route path="/auth" element={
          user ? <Navigate to="/dashboard" /> : <AuthForm />
        } />
        <Route path="/dashboard" element={
          user ? <Dashboard user={user} /> : <Navigate to="/auth" />
        } />
        <Route path="/documents" element={
          user ? <Documents user={user} /> : <Navigate to="/auth" />
        } />
        <Route path="/automation" element={
          user ? <Automation user={user} /> : <Navigate to="/auth" />
        } />
      </Routes>
    </Router>
  );
}

export default App;