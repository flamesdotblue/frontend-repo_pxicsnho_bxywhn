import React from 'react';
import { Search, Tag } from 'lucide-react';

const categories = [
  { name: 'Design', color: 'from-emerald-400 to-teal-400' },
  { name: 'Frontend', color: 'from-teal-400 to-cyan-400' },
  { name: 'Smart Contracts', color: 'from-emerald-500 to-teal-500' },
  { name: 'UI/UX', color: 'from-lime-400 to-emerald-400' },
  { name: 'Blockchain DevOps', color: 'from-cyan-400 to-teal-400' },
];

const SearchAndCategories = () => {
  return (
    <section id="search" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/30 p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500" />
              <input
                type="text"
                placeholder="Search job titles, skills, or blockchain stacks..."
                className="w-full rounded-xl border border-emerald-200 bg-white pl-11 pr-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <button className="whitespace-nowrap rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-white shadow-md transition-transform hover:scale-[1.01]">
              Search Jobs
            </button>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 text-sm text-gray-600">
              <Tag className="h-4 w-4 text-emerald-500" />
              Featured Categories:
            </span>
            {categories.map((c) => (
              <button
                key={c.name}
                className={`rounded-full bg-gradient-to-r ${c.color} px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.02]`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchAndCategories;
