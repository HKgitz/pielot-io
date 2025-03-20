import React, { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { Layout } from './Layout';
import { Zap, Mail, FileText, Settings } from 'lucide-react';

interface AutomationProps {
  user: User;
}

export function Automation({ user }: AutomationProps) {
  const [invoiceData, setInvoiceData] = useState({
    clientName: '',
    amount: '',
    description: ''
  });

  const handleInvoiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle invoice generation
    console.log('Generating invoice:', invoiceData);
  };

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Automatisation</h1>

        {/* Automation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Invoice Generation */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-indigo-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Génération de factures</h2>
            </div>
            
            <form onSubmit={handleInvoiceSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom du client
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={invoiceData.clientName}
                  onChange={(e) => setInvoiceData({ ...invoiceData, clientName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Montant (€)
                </label>
                <input
                  type="number"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={invoiceData.amount}
                  onChange={(e) => setInvoiceData({ ...invoiceData, amount: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  rows={3}
                  value={invoiceData.description}
                  onChange={(e) => setInvoiceData({ ...invoiceData, description: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Générer la facture
              </button>
            </form>
          </div>

          {/* Payment Follow-up */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                <Mail className="h-5 w-5 text-indigo-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Suivi des paiements</h2>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Rappels automatiques</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Configuration des e-mails de relance pour les paiements en retard
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Statut: Actif</span>
                  <button className="text-indigo-600 hover:text-indigo-800">
                    <Settings className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Prochains rappels</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600">Client A - 3 jours de retard</li>
                  <li className="text-sm text-gray-600">Client B - 5 jours de retard</li>
                  <li className="text-sm text-gray-600">Client C - 7 jours de retard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Status */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Intégrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <img src="https://www.gstatic.com/images/branding/product/2x/sheets_48dp.png" alt="Google Sheets" className="h-8 w-8 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Google Sheets</h3>
                  <p className="text-sm text-gray-600">Connecté</p>
                </div>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800">
                <Settings className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <img src="https://b.stripecdn.com/site-srv/assets/img/v3/home/app-icon-89edf1ae0dfae8c46c9e05a5fc0c5d0b.png" alt="Stripe" className="h-8 w-8 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Stripe</h3>
                  <p className="text-sm text-gray-600">Connecté</p>
                </div>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}