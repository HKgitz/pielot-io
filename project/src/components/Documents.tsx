import React, { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { Layout } from './Layout';
import { FileText, Upload, File, Download } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface DocumentsProps {
  user: User;
}

export function Documents({ user }: DocumentsProps) {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }

      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Add document reference to the database
      await supabase.from('documents').insert([
        {
          user_id: user.id,
          name: file.name,
          path: filePath,
          type: file.type,
          size: file.size
        }
      ]);

    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <label className="bg-indigo-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition-colors flex items-center">
            <Upload className="h-5 w-5 mr-2" />
            Ajouter un document
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              disabled={uploading}
            />
          </label>
        </div>

        {/* Document Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Factures</h3>
                <p className="text-sm text-gray-500">12 documents</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <File className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Devis</h3>
                <p className="text-sm text-gray-500">8 documents</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Contrats</h3>
                <p className="text-sm text-gray-500">5 documents</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Documents */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Documents récents</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Facture-2024-{i + 1}.pdf</h3>
                    <p className="text-sm text-gray-500">Ajouté le 15 mars 2024</p>
                  </div>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}