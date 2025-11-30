import Link from 'next/link';

export default function HeroSignedIn() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/60 text-sm text-gray-600 mb-8 shadow-sm">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        Bienvenue dans votre espace
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Content de vous{' '}
        <span className="bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">
          revoir !
        </span>
      </h1>
      
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Votre tableau de bord est prêt. Accédez à toutes vos données, gérez vos agences et consultez vos contacts en toute simplicité.
      </p>
      
      <DashboardActions />
    </div>
  );
}

function DashboardActions() {
  return (
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
        <SecondaryButton href="/agencies" icon="agency" text="Voir les Agences" />
        <SecondaryButton href="/contacts" icon="contacts" text="Consulter les Contacts" />
      </div>
    </div>
  );
}

function SecondaryButton({ href, icon, text }) {
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'agency':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-5m0 5h4" />
          </svg>
        );
      case 'contacts':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Link 
      href={href}
      className="group bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-300 rounded-xl px-6 py-3 hover:bg-white hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-medium flex items-center space-x-2"
    >
      {getIcon(icon)}
      <span>{text}</span>
    </Link>
  );
}