import Link from 'next/link';
import Features from './Features';

export default function HeroSignedOut() {
  return (
    <div className="text-center">
      <Badge text="Plateforme de gestion d'agences" />
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
        Gérez vos{' '}
        <span className="bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">
          agences
        </span>
        <br />
        avec simplicité
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
        Découvrez notre dashboard professionnel pour gérer vos contacts, analyser vos données et optimiser votre réseau d&apos;agences.
      </p>
      
      <CallToActions />
      <Features />
    </div>
  );
}

function Badge({ text }) {
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/60 text-sm text-gray-600 mb-8 shadow-sm">
      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
      {text}
    </div>
  );
}

function CallToActions() {
  return (
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
  );
}