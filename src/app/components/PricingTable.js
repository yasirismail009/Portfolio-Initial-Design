import React from "react";

export default function PricingTable() {
  return (
    <section className="w-full bg-[var(--primary)] py-16 flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full justify-center">
        {/* Hourly */}
        <div className="bg-[var(--card-bg)] rounded-xl p-8 flex-1 text-white shadow-lg flex flex-col relative">
          <h3 className="font-bold text-lg mb-2">Hourly</h3>
          <div className="flex items-end mb-4">
            <span className="text-3xl font-bold text-[var(--secondary)]">$80</span>
            <span className="ml-2 text-base">/ Hour</span>
          </div>
          <ul className="mb-8 space-y-2 text-sm">
            <li>✔️ Lorem ipsum dolor sit amet</li>
            <li>✔️ Sed ut perspiciatis</li>
            <li>✔️ At vero eos et accusamus</li>
            <li>✔️ Vitae dicta sunt explicabo</li>
            <li className="opacity-60">✔️ Veritatis et quasi architecto</li>
            <li className="opacity-40">✔️ Beatae vitae dicta sunt</li>
          </ul>
          <span className="absolute top-6 right-6 bg-[var(--secondary)] text-[var(--primary)] rounded-full p-2">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
        {/* Monthly */}
        <div className="bg-[var(--card-highlight)] rounded-xl p-8 flex-1 text-[var(--primary)] shadow-lg flex flex-col relative">
          <h3 className="font-bold text-lg mb-2">Monthly</h3>
          <div className="flex items-end mb-4">
            <span className="text-3xl font-bold">$9600</span>
            <span className="ml-2 text-base">/ Month</span>
          </div>
          <ul className="mb-8 space-y-2 text-sm">
            <li>✔️ Lorem ipsum dolor sit amet</li>
            <li>✔️ Sed ut perspiciatis</li>
            <li>✔️ At vero eos et accusamus</li>
            <li>✔️ Vitae dicta sunt explicabo</li>
            <li>✔️ Veritatis et quasi architecto</li>
            <li className="opacity-60">✔️ Beatae vitae dicta sunt</li>
          </ul>
          <span className="absolute top-6 right-6 bg-[var(--primary)] text-[var(--secondary)] rounded-full p-2">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
        {/* Quarterly */}
        <div className="bg-[var(--card-bg)] rounded-xl p-8 flex-1 text-white shadow-lg flex flex-col relative">
          <h3 className="font-bold text-lg mb-2">Quarterly</h3>
          <div className="flex items-end mb-4">
            <span className="text-3xl font-bold text-[var(--secondary)]">$28,800</span>
            <span className="ml-2 text-base">/ Quarter</span>
          </div>
          <ul className="mb-8 space-y-2 text-sm">
            <li>✔️ Lorem ipsum dolor sit amet</li>
            <li>✔️ Sed ut perspiciatis</li>
            <li>✔️ At vero eos et accusamus</li>
            <li>✔️ Vitae dicta sunt explicabo</li>
            <li>✔️ Veritatis et quasi architecto</li>
            <li className="opacity-60">✔️ Beatae vitae dicta sunt</li>
          </ul>
          <span className="absolute top-6 right-6 bg-[var(--secondary)] text-[var(--primary)] rounded-full p-2">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
      </div>
    </section>
  );
} 