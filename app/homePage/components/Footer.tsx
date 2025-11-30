export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200/60 bg-white/50 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo />
          <Copyright />
        </div>
      </div>
    </footer>
  );
}

function Logo() {
  return (
    <div className="flex items-center space-x-3 mb-4 md:mb-0">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-5m0 5h4" />
        </svg>
      </div>
      <span className="text-lg font-bold text-gray-900">AgencyPro</span>
    </div>
  );
}

function Copyright() {
  return (
    <div className="text-sm text-gray-500">
      © 2025 AgencyPro. Tous droits réservés.
    </div>
  );
}