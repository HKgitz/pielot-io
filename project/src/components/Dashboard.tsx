import React, { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { Layout } from './Layout';
import { BarChart3, Users, AlertTriangle, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface DashboardProps {
  user: User;
}

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  trend?: string;
  trendUp?: boolean;
}

function MetricCard({ title, value, icon: Icon, trend, trendUp }: MetricCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        {trend && (
          <span className={`text-sm ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-semibold text-gray-900 mt-2">{value}</p>
    </div>
  );
}

export function Dashboard({ user }: DashboardProps) {
  const [metrics, setMetrics] = useState({
    revenue: '0',
    expenses: '0',
    activeClients: '0'
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      const { data: metricsData, error } = await supabase
        .from('business_metrics')
        .select('*')
        .eq('user_id', user.id)
        .order('recorded_at', { ascending: false })
        .limit(1);

      if (!error && metricsData.length > 0) {
        setMetrics({
          revenue: new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })
            .format(metricsData[0].value),
          expenses: new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })
            .format(metricsData[0].value * 0.6), // Example calculation
          activeClients: '12' // Example value
        });
      }
    };

    fetchMetrics();
  }, [user.id]);

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Tableau de bord</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Chiffre d'affaires mensuel"
            value={metrics.revenue}
            icon={BarChart3}
            trend="+12.5%"
            trendUp={true}
          />
          <MetricCard
            title="Dépenses principales"
            value={metrics.expenses}
            icon={TrendingUp}
            trend="-5.2%"
            trendUp={false}
          />
          <MetricCard
            title="Clients actifs"
            value={metrics.activeClients}
            icon={Users}
          />
        </div>

        {/* Alerts and Recommendations */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="h-5 w-5 text-indigo-600 mr-2" />
            Alertes et recommandations
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <h3 className="font-medium text-yellow-800">Paiements en retard</h3>
              <p className="text-sm text-yellow-600 mt-1">
                3 factures sont en retard de paiement. Envoyez des rappels automatiques.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800">Opportunité de croissance</h3>
              <p className="text-sm text-green-600 mt-1">
                Votre taux de conversion a augmenté de 15%. Considérez d'augmenter votre budget marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}