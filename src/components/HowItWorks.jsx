import React from 'react';
import { CheckCircle2, Rocket, Briefcase } from 'lucide-react';

const stepsSeekers = [
  'Create a profile and showcase your stack',
  'Search roles by chain, stack, or skills',
  'Apply with one click and track status',
];

const stepsEmployers = [
  'Post a job with clear scope and budget',
  'Get matched with verified Web3 talent',
  'Review applicants and hire confidently',
];

const Card = ({ title, icon: Icon, steps, accent }) => (
  <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-3 py-1 text-sm font-medium text-white shadow-sm"
      style={{ backgroundImage: accent }}>
      <Icon className="h-4 w-4" />
      {title}
    </div>
    <ul className="space-y-3">
      {steps.map((s) => (
        <li key={s} className="flex items-start gap-3 text-gray-700">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
          <span>{s}</span>
        </li>
      ))}
    </ul>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="post-job" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How it works</h2>
          <p className="mt-1 text-gray-600">A friendly flow for both job seekers and employers</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card
            title="For Job Seekers"
            icon={Rocket}
            steps={stepsSeekers}
            accent="linear-gradient(to right, #10b981, #14b8a6)"
          />
          <Card
            title="For Employers"
            icon={Briefcase}
            steps={stepsEmployers}
            accent="linear-gradient(to right, #2dd4bf, #22c55e)"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
