import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Wallet } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] overflow-hidden bg-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to keep text readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/95" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">
          <Rocket className="h-3.5 w-3.5" />
          Launching the future of work in Web3
        </span>
        <h1 className="mt-5 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Find your next <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Web3</span> opportunity.
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600 text-base sm:text-lg">
          Coin Jobs connects designers and engineers with cutting-edge blockchain teams. Discover roles across DeFi, NFTs, infrastructure, and more.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#post-job" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-white shadow-lg shadow-emerald-200/60 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400">
            <Wallet className="h-4 w-4" />
            Post a Job
          </a>
          <a href="#search" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-emerald-700 ring-1 ring-emerald-200 shadow-sm transition-colors hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400">
            Find a Job
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
