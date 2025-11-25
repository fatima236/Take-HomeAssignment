'use client';

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header élégant */}
      <header className="relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-gray-200/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo amélioré */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-5m0 5h4" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  AgencyPro
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Dashboard Professionnel</p>
              </div>
            </Link>
            
            {/* Navigation améliorée */}
            <div className="flex items-center gap-4">
              <SignedOut>
                <div className="flex items-center gap-3">
                  <Link 
                    href="/sign-in"
                    className="bg-white text-gray-700 border border-gray-300 rounded-xl px-6 py-2.5 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md transition-all duration-300 font-medium flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>Connexion</span>
                  </Link>
                  <Link 
                    href="/sign-up"
                    className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl px-6 py-2.5 hover:from-blue-700 hover:to-indigo-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-medium flex items-center space-x-2 shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <span>Inscription</span>
                  </Link>
                </div>
              </SignedOut>
              
              <SignedIn>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-gray-900">Bienvenue !</p>
                    <p className="text-xs text-gray-500">Prêt à explorer ?</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <UserButton 
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          userButtonAvatarBox: "w-10 h-10 border-2 border-blue-200",
                        }
                      }}
                    />
                    <Link 
                      href="/dashboard"
                      className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl px-6 py-2.5 hover:from-blue-700 hover:to-indigo-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-medium flex items-center space-x-2 shadow-md"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>Dashboard</span>
                    </Link>
                  </div>
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section améliorée */}
      <main className="relative">
        {/* Background décoratif */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <SignedOut>
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/60 text-sm text-gray-600 mb-8 shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Plateforme de gestion d&apos;agences
              </div>

              {/* Titre principal */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Gérez vos{' '}
                <span className="bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  agences
                </span>
                <br />
                avec simplicité
              </h1>

              {/* Sous-titre */}
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Découvrez notre dashboard professionnel pour gérer vos contacts, 
                analyser vos données et optimiser votre réseau d&apos;agences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link 
                  href="/sign-up"
                  className="group bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl px-8 py-4 text-lg font-semibold hover:from-blue-700 hover:to-indigo-800 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center space-x-3"
                >
                  <span>Commencer gratuitement</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="/sign-in"
                  className="group bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-300 rounded-2xl px-8 py-4 text-lg font-semibold hover:bg-white hover:border-gray-400 hover:shadow-lg transition-all duration-300 flex items-center space-x-3"
                >
                  <span>Déjà membre ?</span>
                  <span className="text-blue-600 group-hover:underline">Se connecter</span>
                </Link>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: '👥',
                    title: 'Gestion des Contacts',
                    description: 'Accédez à votre réseau avec une limite intelligente de 50 contacts par jour'
                  },
                  {
                    icon: '📊',
                    title: 'Analytiques Avancées',
                    description: 'Suivez les performances de vos agences avec des tableaux de bord détaillés'
                  },
                  {
                    icon: '🔒',
                    title: 'Sécurité Maximale',
                    description: 'Authentification sécurisée avec Clerk pour protéger vos données'
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SignedOut>
          
          <SignedIn>
            <div className="text-center">
              {/* Badge de bienvenue */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/60 text-sm text-gray-600 mb-8 shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Bienvenue dans votre espace
              </div>

              {/* Message de bienvenue */}
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Content de vous{' '}
                <span className="bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  revoir !
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Votre tableau de bord est prêt. Accédez à toutes vos données, 
                gérez vos agences et consultez vos contacts en toute simplicité.
              </p>

              {/* Actions rapides */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  href="/dashboard"
                  className="group bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl px-8 py-4 text-lg font-semibold hover:from-blue-700 hover:to-indigo-800 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center space-x-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Accéder au Dashboard</span>
                </Link>
                
                <div className="flex gap-4">
                  <Link 
                    href="/agencies"
                    className="group bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-300 rounded-xl px-6 py-3 hover:bg-white hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-medium flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-5m0 5h4" />
                    </svg>
                    <span>Voir les Agences</span>
                  </Link>
                  <Link 
                    href="/contacts"
                    className="group bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-300 rounded-xl px-6 py-3 hover:bg-white hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-medium flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Consulter les Contacts</span>
                  </Link>
                </div>
              </div>
            </div>
          </SignedIn>
        </div>
      </main>

      {/* Footer élégant */}
      <footer className="relative border-t border-gray-200/60 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-5m0 5h4" />
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-900">AgencyPro</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 AgencyPro. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}