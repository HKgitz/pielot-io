import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Bot,
  BrainCircuit,
  Calendar,
  FileSpreadsheet,
  LayoutDashboard,
  MessageSquareMore,
  Puzzle,
  Zap
} from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              SmartBizHelper
              <span className="block text-2xl text-indigo-600 mt-2">
                AI-Powered Business Assistant for Small Enterprises
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Streamline your business operations with AI-driven insights, automated tasks, 
              and intelligent tools—all in one powerful platform.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                to="/auth"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
              >
                Start Free Trial
              </Link>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Powerful Features for Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={LayoutDashboard}
            title="AI-Driven Dashboard"
            description="Real-time monitoring of business performance with AI-powered optimization suggestions."
          />
          <FeatureCard
            icon={Zap}
            title="Task Automation"
            description="Automate invoicing, scheduling, and customer follow-ups to save time and reduce errors."
          />
          <FeatureCard
            icon={BrainCircuit}
            title="Smart Insights"
            description="Get actionable recommendations for finances, SEO, and cost optimization."
          />
          <FeatureCard
            icon={Puzzle}
            title="Integrated Tools"
            description="Seamless integration with popular services like Stripe, Mailchimp, and Google Analytics."
          />
          <FeatureCard
            icon={Bot}
            title="24/7 AI Support"
            description="Intelligent chatbot providing real-time assistance and strategic guidance."
          />
          <FeatureCard
            icon={BarChart3}
            title="Performance Analytics"
            description="Comprehensive analytics and reporting to track your business growth."
          />
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Growing Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of businesses that trust SmartBizHelper
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-600">Freelance Designer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "SmartBizHelper has transformed how I manage my freelance business. 
                The AI insights have helped me make better decisions and grow my client base."
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
                  alt="Tom Wilson"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Tom Wilson</h4>
                  <p className="text-gray-600">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The automation features have saved us countless hours on administrative tasks. 
                It's like having an extra team member working 24/7."
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
                  alt="Emily Chen"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Emily Chen</h4>
                  <p className="text-gray-600">Startup Founder</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The AI-powered insights have been invaluable for our growth. 
                We've increased our revenue by 40% since implementing SmartBizHelper."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of successful businesses using SmartBizHelper
          </p>
          <Link
            to="/auth"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-block"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">SmartBizHelper</h3>
              <p className="text-sm">
                AI-powered business management platform for modern enterprises
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>Features</li>
                <li>Pricing</li>
                <li>Integrations</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            © 2024 SmartBizHelper. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}