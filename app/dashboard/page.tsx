import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from 'next/navigation';
import Navbar from '../Layout/Navbar';

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  const stats = [
    { name: 'Agences disponibles', value: '250+', color: 'bg-blue-500' },
    { name: 'Contacts journaliers', value: '50', color: 'bg-green-500' },
    { name: 'Utilisateurs actifs', value: '1', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord</h1>
          <p className="text-gray-600 mt-2">
            Gérez et consultez vos agences et contacts
          </p>
        </div>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center">
                <div className={`${stat.color} w-4 h-4 rounded-full mr-3`}></div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Cartes de navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/agencies">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-blue-500 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  Agences
                </h3>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-5m0 5h4" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Consultez la liste complète des agences avec leurs informations détaillées
              </p>
            </div>
          </Link>
          
          <Link href="/contacts">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-green-500 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600">
                  Contacts
                </h3>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <svg className="w-6 h-6 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Accédez aux contacts avec une limite de 50 consultations par jour
              </p>
              <div className="mt-3 flex items-center text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Limite: 50 contacts/jour
              </div>
            </div>
          </Link>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Votre Compte</h3>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Gérez vos paramètres et préférences
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Statut:</span>
                <span className="text-green-600 font-medium">Actif</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Plan:</span>
                <span className="text-blue-600 font-medium">Gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}