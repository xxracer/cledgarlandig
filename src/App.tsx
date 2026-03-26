/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Siren, Unlock, Car, Key } from 'lucide-react';

export default function App() {
  return (
    <div className="font-body bg-background text-zinc-900 antialiased selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="bg-white flex justify-center items-center w-full px-6 py-4 fixed top-0 z-50 transition-all duration-150 linear border-b-0">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span className="text-2xl font-black text-primary font-headline uppercase tracking-tighter">CARLOCKSOUT</span>
          <span className="bg-primary text-white text-[10px] px-2 py-0.5 font-bold tracking-widest flex items-center gap-1 rounded-none">
            <Siren size={12} />
            24/7 LIVE DISPATCH
          </span>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCzkTAG1M5RsPq_hbawybUhX9KBIA28EljnqVOKPPFtaLR5o0angHqTWZofIEeKVgF_qac5tzkSCQRFRmkAh0ffoggPIEwSzjN3KDX3lPqOvohvm6gFZotgpcIbsfQUKedNEP5LTQaQIbbLsqryvXH18gz9PW05ezigb6GZguB0joAJh5DE_21VE7Q6M8ytdsQDd7i4SObcU45fYcThLhBgPNTNz6ZwK3SXHU2CqbaSWd9VquQPcH1IANtG7nRKthstygKHvn-ZAY" 
              alt="Emergency locksmith van at night" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 hero-gradient-overlay"></div>
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 uppercase">
              LOCKED OUT IN <span className="text-primary-container">HOUSTON?</span><br/>
              WE'RE ALREADY ON THE WAY.
            </h1>
            <p className="font-headline text-xl md:text-2xl font-bold text-white mb-12 tracking-tight uppercase">
              15-Minute Response Time. Licensed Pros. Zero Damage Guaranteed.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a 
                href="tel:5551234567" 
                className="w-full max-w-2xl cta-gradient text-white py-8 md:py-10 px-8 text-3xl md:text-4xl font-black uppercase tracking-tighter transition-all duration-150 linear emergency-glow flex flex-col items-center justify-center gap-2 rounded-none hover:opacity-90"
              >
                TAP TO CALL 24/7 DISPATCH
                <span className="text-lg font-bold opacity-80 tracking-normal">(713) 555-0199</span>
              </a>
              <p className="text-white font-bold tracking-wider text-sm md:text-base uppercase opacity-90">
                Houston Locals Trust Us Since 2013
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-24 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Column 1 */}
              <div className="bg-[#f3f3f4] p-12 flex flex-col items-start gap-6 rounded-none transition-colors duration-150 linear hover:bg-[#eeeeee]">
                <Unlock className="text-secondary w-12 h-12" strokeWidth={1.5} />
                <h3 className="font-headline text-2xl font-black uppercase tracking-tight">24/7 LOCKOUTS</h3>
                <ul className="space-y-4 text-[#5b403d] font-bold uppercase text-sm tracking-widest">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-none"></span> SAFE</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-none"></span> CAR</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-none"></span> HOME</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-none"></span> COMMERCIAL</li>
                </ul>
              </div>
              {/* Column 2 */}
              <div className="bg-[#e8e8e8] p-12 flex flex-col items-start gap-6 rounded-none transition-colors duration-150 linear hover:bg-[#e2e2e2]">
                <Car className="text-secondary w-12 h-12" strokeWidth={1.5} />
                <h3 className="font-headline text-2xl font-black uppercase tracking-tight">AUTO KEYS & PROG.</h3>
                <ul className="space-y-4 text-[#5b403d] font-bold uppercase text-sm tracking-widest">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-none"></span> CAR KEYS</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-none"></span> CHIP PROGRAM</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-none"></span> KEY CUT</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-none"></span> REMOTE PROGRAM</li>
                </ul>
              </div>
              {/* Column 3 */}
              <div className="bg-[#e2e2e2] p-12 flex flex-col items-start gap-6 rounded-none transition-colors duration-150 linear hover:bg-[#dadada]">
                <Key className="text-secondary w-12 h-12" strokeWidth={1.5} />
                <h3 className="font-headline text-2xl font-black uppercase tracking-tight">REKEYS</h3>
                <ul className="space-y-4 text-[#5b403d] font-bold uppercase text-sm tracking-widest">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-none"></span> RESIDENTIAL</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-secondary rounded-none"></span> COMMERCIAL</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="bg-[#e2e2e2] py-16 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <h4 className="font-headline text-xs font-black uppercase tracking-[0.3em] text-primary mb-8">WHY STRESSED FAMILIES TRUST US</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm font-bold uppercase tracking-wider text-zinc-900">
              <div>
                <span className="block text-2xl font-black mb-2 font-headline">UPFRONT PRICING</span>
                <span className="opacity-70">(NO SURPRISES)</span>
              </div>
              <div>
                <span className="block text-2xl font-black mb-2 font-headline">FAST HOUSTON</span>
                <span className="opacity-70">COVERAGE</span>
              </div>
              <div>
                <span className="block text-2xl font-black mb-2 font-headline">11+ YEARS</span>
                <span className="opacity-70">TRUSTED EXPERIENCE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="h-64 relative">
          <img 
            className="w-full h-full object-cover grayscale opacity-30" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg0hnO3dTg3ZrdGsft5y1J9-kvPTNPR_3SeAXkBmlfPXliOeTqd9awrJRoEkqyOGjVJEhVs4k47dVSFxvfDkzbQs9g4VsUXtrsVb48KyaXF9rjkM2stME7ErTOjZgJnu1wGW1x-GAN5iuf4FHLI-V_QaV-tfuHX9WMIHWoAecohEtGOhVqOyKA9F3_-cBL95Y3N5EpxiRYkm2-kGt26f363ZZISR-s460ZuNEVbBCo_--Jv_46m3J4sf_K1mXP0RA5k49IUvuyETU" 
            alt="Houston highway interchange" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 border-l-8 border-primary rounded-none">
              <p className="font-headline font-black uppercase text-xl italic">SERVICING ALL OF GREATER HOUSTON 24/7</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-100 flex flex-col items-center justify-center w-full py-12 px-6 gap-6 font-body text-xs font-bold uppercase tracking-widest">
        <a 
          href="tel:5551234567" 
          className="bg-zinc-900 text-white px-8 py-4 mb-4 hover:bg-primary transition-colors duration-150 linear rounded-none"
        >
          GET IMMEDIATE HELP
        </a>
        <div className="flex flex-col items-center gap-4">
          <span className="text-lg font-black text-zinc-900 font-headline">CARLOCKSOUT | HOUSTON, TX</span>
          <div className="flex gap-6 text-zinc-600">
            <a href="#" className="hover:underline decoration-2 underline-offset-4">PRIVACY POLICY</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">TERMS OF SERVICE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

