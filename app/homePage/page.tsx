'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import { useMounted } from './hooks/useMounted';
import { ANIMATION_STYLES } from './utils/constants';
import Header from './components/Header';
import HeroSignedOut from './components/HeroSignedOut';
import HeroSignedIn from './components/HeroSignedIn';
import Footer from './components/Footer';
import BackgroundAnimations from './components/BackgroundAnimations';

export default function HomePage() {
  const mounted = useMounted();

  if (!mounted) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      <Header />
      
      <main className="flex-1 relative">
        <BackgroundAnimations />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <SignedOut>
            <HeroSignedOut />
          </SignedOut>
          
          <SignedIn>
            <HeroSignedIn />
          </SignedIn>
        </div>
      </main>

      <Footer />

      <style jsx>{ANIMATION_STYLES}</style>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}