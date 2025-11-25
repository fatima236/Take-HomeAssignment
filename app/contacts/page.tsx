import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { auth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation';
import Navbar from '../Layout/Navbar';

// Simulation de base de données pour les limites
// En production, utilisez une vraie base de données
const userLimits = new Map();

type Contact = {
  name: string;
  phone: string;
  email: string;
  title: string;
  department: string;
};

type ParsedContact = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  title: string;
  email_type: string;
  contact_form_url: string;
  created_at: string;
  updated_at: string;
  agency_id: string;
  firm_id: string;
  department: string;
};

function getUserDailyLimit(userId: string): number {
  const today = new Date().toDateString();
  const key = `${userId}-${today}`;
  
  if (!userLimits.has(key)) {
    userLimits.set(key, 0);
  }
  
  return userLimits.get(key);
}

function incrementUserDailyLimit(userId: string): number {
  const today = new Date().toDateString();
  const key = `${userId}-${today}`;
  const current = getUserDailyLimit(userId);
  userLimits.set(key, current + 1);
  return current + 1;
}

export default async function ContactsPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  // Vérifier la limite quotidienne
  const todayLimit = getUserDailyLimit(userId);
  const limitReached = todayLimit >= 50;

  // Lire les données seulement si la limite n'est pas atteinte
  let contacts: Contact[] = [];
  if (!limitReached) {
    const filePath = path.join(process.cwd(), "data", "contacts_contact_rows.csv");
    
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf8");
      const parsed = Papa.parse<ParsedContact>(fileContent, {
        header: true,
        skipEmptyLines: true,
      });

      contacts = parsed.data.slice(0, 50 - todayLimit).map((contact: ParsedContact) => ({
        name: `${contact.first_name} ${contact.last_name}`.trim(),
        phone: contact.phone || 'Non renseigné',
        email: contact.email || 'Non renseigné',
        title: contact.title || 'Non renseigné',
        department: contact.department || 'Non renseigné',
      }));

      // Incrémenter le compteur
      contacts.forEach(() => incrementUserDailyLimit(userId));
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
              <p className="text-gray-600 mt-2">
                Liste des contacts disponibles - Limite quotidienne: 50 consultations
              </p>
            </div>
            <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700 font-medium">
                Consultations aujourd&apos;hui: <span className="font-bold">{todayLimit}/50</span>
              </p>
            </div>
          </div>
        </div>

        {/* Message de limite atteinte */}
        {limitReached && (
          <div className="mb-6 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-orange-800">
                  Limite quotidienne atteinte
                </h3>
                <p className="text-orange-700 mt-1">
                  Vous avez consulté 50 contacts aujourd&apos;hui. Revenez demain pour continuer ou 
                  <button className="ml-1 text-orange-800 font-semibold underline hover:text-orange-900">
                    passez à la version premium
                  </button>
                  pour un accès illimité.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tableau des contacts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {!limitReached ? (
            <>
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  {contacts.length} contacts affichés
                </h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nom
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Titre
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Département
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Téléphone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {contacts.map((contact, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">{contact.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {contact.department}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {contact.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {contact.email}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Accès limité</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Vous avez atteint votre limite de consultations pour aujourd&apos;hui. Revenez demain ou améliorez votre plan pour un accès illimité.
              </p>
            </div>
          )}
        </div>

        {/* Information sur la limite */}
        <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            La limite de 50 contacts par jour est réinitialisée à minuit.
          </div>
        </div>
      </main>
    </div>
  );
}