import React from 'react';
import { Wallet, Menu } from 'lucide-react';
import Hero from './components/Hero';
import SearchAndCategories from './components/SearchAndCategories';
import TrendingJobs from './components/TrendingJobs';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-emerald-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-md" />
              <span className="text-lg sm:text-xl font-extrabold tracking-tight">Coin Jobs</span>
            </a>
            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-emerald-700 ring-1 ring-emerald-200 shadow-sm hover:bg-emerald-50">
                Post a Job
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-white shadow-md hover:shadow-lg">
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </button>
              <button className="sm:hidden inline-flex items-center justify-center rounded-full p-2 text-emerald-700 ring-1 ring-emerald-200">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <SearchAndCategories />
        <TrendingJobs />
        <HowItWorks />
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500" />
            <span className="font-semibold">Coin Jobs</span>
          </div>
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Coin Jobs — Web3 careers for builders.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-emerald-700 hover:text-emerald-900">About</a>
            <a href="#" className="text-sm text-emerald-700 hover:text-emerald-900">Community</a>
            <a href="#" className="text-sm text-emerald-700 hover:text-emerald-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
