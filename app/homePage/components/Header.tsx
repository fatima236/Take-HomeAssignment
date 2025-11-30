import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header className="relative">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-gray-200/60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
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
  );
}

function Navigation() {
  return (
    <div className="flex items-center gap-4">
      <SignedOut>
        <AuthButtons />
      </SignedOut>
      <SignedIn>
        <UserSection />
      </SignedIn>
    </div>
  );
}

function AuthButtons() {
  return (
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
  );
}

function UserSection() {
  return (
    <div className="flex items-center gap-4">
      <div className="text-right hidden sm:block">
        <p className="text-sm font-medium text-gray-900">Bienvenue !</p>
        <p className="text-xs text-gray-500">Prêt à explorer ?</p>
      </div>
      <UserButton 
        afterSignOutUrl="/" 
        appearance={{
          elements: {
            userButtonAvatarBox: "w-10 h-10 border border-gray-300 rounded-full",
          }
        }} 
      />
    </div>
  );
}