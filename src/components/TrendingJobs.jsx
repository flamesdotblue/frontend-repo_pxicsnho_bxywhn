import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Smart Contract Engineer',
    company: 'Aurora Labs',
    tags: ['Remote', 'Full-time', 'Solidity'],
    salary: '$160k – $200k',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    title: 'Web3 Product Designer',
    company: 'Mintly',
    tags: ['Hybrid', 'Design', 'Figma'],
    salary: '$100k – $140k',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    title: 'Frontend Engineer (React + Wagmi)',
    company: 'ChainForge',
    tags: ['Remote', 'Contract', 'TypeScript'],
    salary: '$80 – $120/hr',
    color: 'bg-cyan-100 text-cyan-700',
  },
  {
    title: 'Blockchain DevOps',
    company: 'NodeWave',
    tags: ['On-site', 'Kubernetes', 'Infra'],
    salary: '$140k – $180k',
    color: 'bg-lime-100 text-lime-700',
  },
];

const JobCard = ({ job }) => (
  <div className="group rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition-all hover:shadow-xl hover:-translate-y-0.5">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${job.color} shadow-inner`}> 
          <Briefcase className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{job.title}</h3>
          <p className="text-sm text-gray-500">{job.company}</p>
        </div>
      </div>
      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
        {job.salary}
      </span>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {job.tags.map((t) => (
        <span key={t} className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700">
          {t}
        </span>
      ))}
    </div>
    <div className="mt-5 flex items-center justify-between">
      <button className="text-sm font-medium text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1">
        View details <ArrowRight className="h-4 w-4" />
      </button>
      <button className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-2 text-xs font-medium text-white shadow-sm transition-transform hover:scale-[1.02]">
        Apply
      </button>
    </div>
  </div>
);

const TrendingJobs = () => {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50/60 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Trending roles</h2>
            <p className="text-gray-600">Popular openings across design and engineering</p>
          </div>
          <button className="hidden sm:inline-flex rounded-xl bg-white px-4 py-2 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200 shadow-sm hover:bg-emerald-50">
            Explore all
          </button>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobs.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingJobs;
