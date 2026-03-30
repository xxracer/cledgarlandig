/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Siren, Unlock, Car, Key, Shield, Clock, Phone, MapPin, Star, CheckCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="font-body bg-background text-zinc-900 antialiased selection:bg-primary selection:text-white">
      {/* Schema.org structured data for LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Locksmith",
            "name": "CarLocksOut - Houston Locksmith Services",
            "description": "24/7 Emergency locksmith services in Houston, TX and College Station, TX. Licensed locksmith TX #00104825. Specializing in car lockouts, home lockouts, commercial lockouts, rekey services, and automotive key programming.",
            "telephone": "+1-281-989-0245",
            "license": "Texas Locksmith License #00104825",
            "areaServed": [
              { "@type": "City", "name": "Houston", "addressRegion": "TX" },
              { "@type": "City", "name": "College Station", "addressRegion": "TX" },
              { "@type": "AdministrativeArea", "name": "Greater Houston Area" },
              { "@type": "City", "name": "Katy", "addressRegion": "TX" },
              { "@type": "City", "name": "Sugar Land", "addressRegion": "TX" },
              { "@type": "City", "name": "The Woodlands", "addressRegion": "TX" },
              { "@type": "City", "name": "Pearland", "addressRegion": "TX" },
              { "@type": "City", "name": "Pasadena", "addressRegion": "TX" },
              { "@type": "City", "name": "Baytown", "addressRegion": "TX" },
              { "@type": "City", "name": "Missouri City", "addressRegion": "TX" },
              { "@type": "City", "name": "League City", "addressRegion": "TX" },
              { "@type": "City", "name": "Bellaire", "addressRegion": "TX" },
              { "@type": "City", "name": "West University Place", "addressRegion": "TX" },
              { "@type": "City", "name": "Stafford", "addressRegion": "TX" },
              { "@type": "City", "name": "Friendswood", "addressRegion": "TX" },
              { "@type": "City", "name": "Cypress", "addressRegion": "TX" },
              { "@type": "City", "name": "Tomball", "addressRegion": "TX" },
              { "@type": "City", "name": "Spring", "addressRegion": "TX" },
              { "@type": "City", "name": "Humble", "addressRegion": "TX" },
              { "@type": "City", "name": "Kingwood", "addressRegion": "TX" },
              { "@type": "City", "name": "Clear Lake", "addressRegion": "TX" },
              { "@type": "City", "name": "Galveston", "addressRegion": "TX" },
              { "@type": "City", "name": "Texas City", "addressRegion": "TX" },
              { "@type": "City", "name": "Bryan", "addressRegion": "TX" },
              { "@type": "City", "name": "Conroe", "addressRegion": "TX" },
              { "@type": "City", "name": "Deer Park", "addressRegion": "TX" },
              { "@type": "City", "name": "La Porte", "addressRegion": "TX" },
              { "@type": "City", "name": "Webster", "addressRegion": "TX" },
              { "@type": "City", "name": "Dickinson", "addressRegion": "TX" },
              { "@type": "City", "name": "Alvin", "addressRegion": "TX" },
              { "@type": "City", "name": "Manvel", "addressRegion": "TX" },
              { "@type": "City", "name": "Santa Fe", "addressRegion": "TX" },
              { "@type": "City", "name": "La Marque", "addressRegion": "TX" },
              { "@type": "City", "name": "Hitchcock", "addressRegion": "TX" },
              { "@type": "City", "name": "San Leon", "addressRegion": "TX" }
            ],
            "openingHours": "Mo-Su 00:00-23:59",
            "availableService": [
              { "@type": "Service", "name": "Car Lockout", "description": "Emergency car lockout service with zero damage guarantee in Houston TX" },
              { "@type": "Service", "name": "Home Lockout", "description": "Residential lockout assistance for houses and apartments in Houston" },
              { "@type": "Service", "name": "Commercial Lockout", "description": "Business and office lockout emergency response Houston TX" },
              { "@type": "Service", "name": "Safe Lockout", "description": "Professional safe opening and lockout service" },
              { "@type": "Service", "name": "Residential Rekey", "description": "Complete home rekey services for security Houston TX" },
              { "@type": "Service", "name": "Commercial Rekey", "description": "Office and business rekey services Houston" },
              { "@type": "Service", "name": "Car Key Replacement", "description": "Automotive key cutting and programming Houston TX" },
              { "@type": "Service", "name": "Chip Key Programming", "description": "Transponder chip key programming for all vehicle makes Houston" },
              { "@type": "Service", "name": "Key Cutting", "description": "Precision key cutting service Houston TX" },
              { "@type": "Service", "name": "Remote Programming", "description": "Car remote and key fob programming Houston TX" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Emergency Locksmith Services Houston TX",
              "itemListElement": [
                "Car Lockout Houston TX",
                "Home Lockout Houston TX",
                "Commercial Lockout Houston TX",
                "Safe Lockout Houston TX",
                "Car Lockout College Station TX",
                "Home Lockout College Station TX",
                "Car Key Programming Houston",
                "Rekey Service Houston TX",
                "Emergency Locksmith Near Me"
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2847",
              "bestRating": "5",
              "worstRating": "1"
            },
            "award": "Houston's Trusted Locksmith Since 2013 - TX License #00104825"
          })
        }}
      />

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm flex justify-center items-center w-full px-6 py-4 fixed top-0 z-50 transition-all duration-150 linear border-b border-zinc-200 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <span className="text-2xl font-black text-primary font-headline uppercase tracking-tighter">CARLOCKSOUT</span>
          <span className="bg-primary text-white text-[10px] px-3 py-1 font-bold tracking-widest flex items-center gap-2 rounded-none">
            <Siren size={12} />
            24/7 LIVE DISPATCH
          </span>
          <a href="tel:2819890245" className="hidden md:flex items-center gap-2 text-zinc-700 font-bold text-sm hover:text-primary transition-colors">
            <Phone size={14} />
            (281) 989-0245
          </a>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCzkTAG1M5RsPq_hbawybUhX9KBIA28EljnqVOKPPFtaLR5o0angHqTWZofIEeKVgF_qac5tzkSCQRFRmkAh0ffoggPIEwSzjN3KDX3lPqOvohvm6gFZotgpcIbsfQUKedNEP5LTQaQIbbLsqryvXH18gz9PW05ezigb6GZguB0joAJh5DE_21VE7Q6M8ytdsQDd7i4SObcU45fYcThLhBgPNTNz6ZwK3SXHU2CqbaSWd9VquQPcH1IANtG7nRKthstygKHvn-ZAY"
              alt="Professional locksmith technician opening car door in Houston Texas - emergency car lockout service"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 hero-gradient-overlay"></div>
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="text-primary" size={24} />
              <span className="text-white font-bold text-sm uppercase tracking-widest">Licensed & Insured • Houston & Greater Areas Including College Station Since 2013</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 uppercase">
              LOCKED OUT IN <span className="text-primary-container">HOUSTON?</span><br />
              WE'RE ALREADY ON THE WAY.
            </h1>
            <p className="font-headline text-lg md:text-xl font-bold text-white mb-8 tracking-tight uppercase max-w-3xl mx-auto">
              15-Minute Response Time. Licensed Pros. Zero Damage Guaranteed.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2">
                <CheckCircle className="text-green-400" size={18} />
                <span className="text-white font-bold text-xs uppercase">No Damage Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2">
                <CheckCircle className="text-green-400" size={18} />
                <span className="text-white font-bold text-xs uppercase">Upfront Pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2">
                <CheckCircle className="text-green-400" size={18} />
                <span className="text-white font-bold text-xs uppercase">Background Checked</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:2819890245"
                className="w-full max-w-2xl cta-gradient text-white py-8 md:py-10 px-8 text-3xl md:text-4xl font-black uppercase tracking-tighter transition-all duration-150 linear emergency-glow flex flex-col items-center justify-center gap-2 rounded-none hover:opacity-90"
              >
                TAP TO CALL 24/7 DISPATCH
                <span className="text-lg font-bold opacity-80 tracking-normal">(281) 989-0245</span>
              </a>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />)}
                </div>
                <span className="text-white font-bold text-sm">4.9/5 from 2,847 Houston customers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - LLM Optimized */}
        <section className="bg-white py-24 px-6" aria-labelledby="services-heading">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 mb-4">
                EMERGENCY LOCKSMITH SERVICES
              </h2>
              <p className="font-headline text-lg font-bold text-zinc-600 uppercase tracking-wide">
                Houston & Greater Areas Including College Station • 24 Hours • 7 Days a Week
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Column 1 - Lockouts */}
              <article className="bg-[#f3f3f4] p-12 flex flex-col items-start gap-6 rounded-none transition-colors duration-150 linear hover:bg-[#eeeeee]">
                <div className="flex items-center gap-3">
                  <Unlock className="text-secondary w-12 h-12" strokeWidth={1.5} />
                  <Shield className="text-primary w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-headline text-2xl font-black uppercase tracking-tight">24/7 LOCKOUT SERVICES</h3>
                <p className="text-[#5b403d] font-semibold text-sm leading-relaxed">
                  Emergency lockout assistance for vehicles, homes, and businesses. Our licensed technicians arrive within 15 minutes with zero-damage tools.
                </p>
                <ul className="space-y-3 text-[#5b403d] font-bold uppercase text-sm tracking-wider">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-none mt-1 flex-shrink-0"></span>
                    <span>Safe Lockout - All safe brands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-none mt-1 flex-shrink-0"></span>
                    <span>Car Lockout - Domestic & import vehicles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-none mt-1 flex-shrink-0"></span>
                    <span>Home Lockout - Houses & apartments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-none mt-1 flex-shrink-0"></span>
                    <span>Commercial Lockout - Offices & storefronts</span>
                  </li>
                </ul>
              </article>

              {/* Column 2 - Auto Keys */}
              <article className="bg-[#e8e8e8] p-12 flex flex-col items-start gap-6 rounded-none transition-colors duration-150 linear hover:bg-[#e2e2e2]">
                <div className="flex items-center gap-3">
                  <Car className="text-secondary w-12 h-12" strokeWidth={1.5} />
                  <Shield className="text-primary w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-headline text-2xl font-black uppercase tracking-tight">AUTOMOTIVE KEY SERVICES</h3>
                <p className="text-[#5b403d] font-semibold text-sm leading-relaxed">
                  Complete car key solutions including cutting, programming, and replacement. We service all vehicle makes and models on-site.
                </p>
                <ul className="space-y-3 text-[#5b403d] font-bold uppercase text-sm tracking-wider">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-none mt-1 flex-shrink-0"></span>
                    <span>Car Keys - Replacement & duplicates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-none mt-1 flex-shrink-0"></span>
                    <span>Chip Program - Transponder keys</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-none mt-1 flex-shrink-0"></span>
                    <span>Key Cut - Precision cutting service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-none mt-1 flex-shrink-0"></span>
                    <span>Remote Program - Key fob programming</span>
                  </li>
                </ul>
              </article>

              {/* Column 3 - Rekeys */}
              <article className="bg-[#e2e2e2] p-12 flex flex-col items-start gap-6 rounded-none transition-colors duration-150 linear hover:bg-[#dadada]">
                <div className="flex items-center gap-3">
                  <Key className="text-secondary w-12 h-12" strokeWidth={1.5} />
                  <Shield className="text-primary w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-headline text-2xl font-black uppercase tracking-tight">REKEY & SECURITY</h3>
                <p className="text-[#5b403d] font-semibold text-sm leading-relaxed">
                  Change your locks without replacing hardware. Secure your property after moving, lost keys, or security concerns.
                </p>
                <ul className="space-y-3 text-[#5b403d] font-bold uppercase text-sm tracking-wider">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-none mt-1 flex-shrink-0"></span>
                    <span>Residential Rekey - Whole home service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-none mt-1 flex-shrink-0"></span>
                    <span>Commercial Rekey - Business security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-none mt-1 flex-shrink-0"></span>
                    <span>Master Key Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-none mt-1 flex-shrink-0"></span>
                    <span>High-Security Lock Installation</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Service Areas - Important for LLMs & Local SEO */}
        <section className="bg-zinc-900 py-16 px-6" aria-labelledby="areas-heading">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="areas-heading" className="font-headline text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">
                  HOUSTON SERVICE AREAS
                </h2>
                <p className="font-body text-zinc-300 font-bold uppercase text-sm tracking-wider mb-6">
                  We provide 24/7 emergency locksmith services throughout Houston and Greater Areas including College Station, Texas. Licensed TX #00104825.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary" size={20} />
                    <div>
                      <h4 className="text-white font-black uppercase text-sm">Houston, TX - Metro Area</h4>
                      <p className="text-zinc-400 text-xs font-bold uppercase">Downtown, Galleria, Heights, Montrose, Midtown, Medical Center, Energy Corridor, Katy, Sugar Land, Pearland, The Woodlands</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary" size={20} />
                    <div>
                      <h4 className="text-white font-black uppercase text-sm">College Station, TX</h4>
                      <p className="text-zinc-400 text-xs font-bold uppercase">Including College Station: Texas A&M Campus, Northgate, South College Park, Wolf Pen Creek</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-white p-6 border-l-8 border-primary">
                  <p className="font-headline font-black uppercase text-lg italic text-zinc-900">SAME-DAY SERVICE GUARANTEED</p>
                  <p className="font-body text-zinc-600 font-bold text-xs uppercase mt-2">No matter where you are in our service area</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Houston Neighborhoods & Landmarks - Local SEO */}
        <section className="bg-[#f9f9f9] py-16 px-6" aria-labelledby="hood-heading">
          <div className="container mx-auto max-w-6xl">
            <h2 id="hood-heading" className="font-headline text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-900 mb-8 text-center">
              Areas We Serve in Greater Houston
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div>
                <h3 className="font-headline text-sm font-black uppercase text-primary mb-3">Inner Loop</h3>
                <ul className="space-y-1 text-[#5b403d] font-bold uppercase text-xs tracking-wider">
                  <li>Downtown Houston</li>
                  <li>Midtown</li>
                  <li>Montrose</li>
                  <li>Heights</li>
                  <li>Rice Village</li>
                  <li>Museum District</li>
                  <li>Medical Center</li>
                </ul>
              </div>
              <div>
                <h3 className="font-headline text-sm font-black uppercase text-primary mb-3">West Houston</h3>
                <ul className="space-y-1 text-[#5b403d] font-bold uppercase text-xs tracking-wider">
                  <li>Galleria / Uptown</li>
                  <li>Energy Corridor</li>
                  <li>Katy</li>
                  <li>Sugar Land</li>
                  <li>Mission Bend</li>
                  <li>Cinco Ranch</li>
                  <li>Meadows Place</li>
                </ul>
              </div>
              <div>
                <h3 className="font-headline text-sm font-black uppercase text-primary mb-3">North Houston</h3>
                <ul className="space-y-1 text-[#5b403d] font-bold uppercase text-xs tracking-wider">
                  <li>The Woodlands</li>
                  <li>Spring</li>
                  <li>Tomball</li>
                  <li>Cypress</li>
                  <li>Humble</li>
                  <li>Kingwood</li>
                  <li>Atascocita</li>
                </ul>
              </div>
              <div>
                <h3 className="font-headline text-sm font-black uppercase text-primary mb-3">South Houston</h3>
                <ul className="space-y-1 text-[#5b403d] font-bold uppercase text-xs tracking-wider">
                  <li>Pearland</li>
                  <li>League City</li>
                  <li>Webster</li>
                  <li>Clear Lake</li>
                  <li>Galveston</li>
                  <li>Alvin</li>
                  <li>Angleton</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-headline text-sm font-black uppercase text-primary mb-3">College Station & Bryan TX</h3>
              <p className="text-[#5b403d] font-bold uppercase text-xs tracking-wider">
                Texas A&M Campus • Northgate • South College Park • Wolf Pen Creek • Downtown Bryan
              </p>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="bg-[#e2e2e2] py-20 px-6" aria-labelledby="why-us-heading">
          <div className="container mx-auto text-center max-w-6xl">
            <h2 id="why-us-heading" className="font-headline text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">WHY CHOOSE US</h2>
            <h3 className="font-headline text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900 mb-12">
              HOUSTON FAMILIES TRUST US WITH THEIR SAFETY
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm font-bold uppercase tracking-wider text-zinc-900">
              <div className="flex flex-col items-center">
                <Shield className="text-primary w-12 h-12 mb-4" strokeWidth={1.5} />
                <span className="block text-lg font-black mb-2 font-headline">LICENSED & INSURED</span>
                <span className="opacity-70 text-center">Fully bonded technicians for your protection</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="text-primary w-12 h-12 mb-4" strokeWidth={1.5} />
                <span className="block text-lg font-black mb-2 font-headline">15-MIN RESPONSE</span>
                <span className="opacity-70 text-center">Average arrival time in Houston metro</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="text-primary w-12 h-12 mb-4" strokeWidth={1.5} />
                <span className="block text-lg font-black mb-2 font-headline">ZERO DAMAGE</span>
                <span className="opacity-70 text-center">Professional tools, no harm to your property</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="text-primary w-12 h-12 mb-4" strokeWidth={1.5} />
                <span className="block text-lg font-black mb-2 font-headline">11+ YEARS</span>
                <span className="opacity-70 text-center">Trusted by 50,000+ Houston customers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Owner Section - Build Trust with Real Person */}
        <section className="bg-white py-20 px-6" aria-labelledby="owner-heading">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="md:w-[320px] shrink-0">
                <img
                  src="https://static.wixstatic.com/media/c5947c_768d0cb525aa471e90ed54217272221e~mv2.png"
                  alt="Licensed locksmith technician in Houston TX - CarLocksOut emergency locksmith service near you"
                  className="w-full h-[450px] object-cover object-top border-4 border-primary shadow-2xl"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 id="owner-heading" className="font-headline text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">MEET YOUR LOCKSMITH</h2>
                <h3 className="font-headline text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900 mb-6">
                  REAL PEOPLE. REAL EXPERTS.
                </h3>
                <p className="font-body text-zinc-700 font-semibold text-base leading-relaxed mb-6">
                  When you call CarLocksOut, you're getting a licensed, background-checked professional with over 11 years of experience protecting Houston families and businesses.
                </p>
                <p className="font-body text-zinc-700 font-semibold text-base leading-relaxed mb-8">
                  Our technician arrives in a marked vehicle, fully equipped to handle any lockout or rekey situation on the spot  no damage, no surprises, just fast and secure service.
                </p>
                <div className="bg-zinc-100 border-l-4 border-primary p-4 mt-6">
                  <p className="font-headline font-black uppercase text-sm text-zinc-900">
                    Texas Locksmith License #00104825
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="font-bold text-sm uppercase text-zinc-900">Licensed & Insured Technician</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="font-bold text-sm uppercase text-zinc-900">Background Checked Professional</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="font-bold text-sm uppercase text-zinc-900">11+ Years Serving Houston</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="font-bold text-sm uppercase text-zinc-900">50,000+ Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 px-6">
          <div className="container mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              LOCKED OUT? DON'T PANIC.
            </h2>
            <p className="font-headline text-lg md:text-xl font-bold text-white/90 mb-8 uppercase max-w-2xl mx-auto">
              One call brings a licensed technician to your location in minutes.
            </p>
            <a
              href="tel:2819890245"
              className="inline-block bg-white text-primary py-6 px-12 text-2xl md:text-3xl font-black uppercase tracking-tighter transition-all duration-150 linear hover:bg-zinc-100 emergency-glow"
            >
              CALL NOW: (281) 989-0245
            </a>
            <p className="text-white/80 font-bold text-xs uppercase mt-6 tracking-wider">
              Available 24/7 • No Extra Charge for Nights or Weekends
            </p>
          </div>
        </section>

        {/* Banner Section */}
        <section className="h-64 relative">
          <img
            className="w-full h-full object-cover grayscale opacity-30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg0hnO3dTg3ZrdGsft5y1J9-kvPTNPR_3SeAXkBmlfPXliOeTqd9awrJRoEkqyOGjVJEhVs4k47dVSFxvfDkzbQs9g4VsUXtrsVb48KyaXF9rjkM2stME7ErTOjZgJnu1wGW1x-GAN5iuf4FHLI-V_QaV-tfuHX9WMIHWoAecohEtGOhVqOyKA9F3_-cBL95Y3N5EpxiRYkm2-kGt26f363ZZISR-s460ZuNEVbBCo_--Jv_46m3J4sf_K1mXP0RA5k49IUvuyETU"
            alt="Greater Houston Texas highway and cityscape showing service area coverage"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-6 border-l-8 border-primary">
              <p className="font-headline font-black uppercase text-2xl italic">SERVICING HOUSTON & GREATER AREAS INCLUDING COLLEGE STATION 24/7</p>
            </div>
          </div>
        </section>

        {/* FAQ Section for LLMs */}
        <section className="bg-white py-20 px-6" aria-labelledby="faq-heading">
          <div className="container mx-auto max-w-4xl">
            <h2 id="faq-heading" className="font-headline text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900 mb-12 text-center">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-zinc-900 mb-2">
                  How quickly can you arrive for a car lockout in Houston?
                </h3>
                <p className="font-body text-zinc-700 font-semibold text-sm leading-relaxed">
                  Our average response time is 15 minutes throughout the Houston metro area. We have technicians strategically positioned across Houston and College Station to ensure rapid response to emergency lockout situations.
                </p>
              </div>
              <div>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-zinc-900 mb-2">
                  Do you service College Station and Texas A&M area?
                </h3>
                <p className="font-body text-zinc-700 font-semibold text-sm leading-relaxed">
                  Yes, we provide full 24/7 locksmith services to College Station as part of our Greater Houston coverage area, including the Texas A&M campus, Northgate, and surrounding neighborhoods. Students and residents receive the same rapid response as our Houston customers.
                </p>
              </div>
              <div>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-zinc-900 mb-2">
                  Can you program my car key on-site?
                </h3>
                <p className="font-body text-zinc-700 font-semibold text-sm leading-relaxed">
                  Absolutely. Our mobile units are equipped with professional programming tools for chip keys, transponder keys, and remote fobs. We can cut and program keys for virtually all vehicle makes and models at your location.
                </p>
              </div>
              <div>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-zinc-900 mb-2">
                  Is there extra charge for nighttime service?
                </h3>
                <p className="font-body text-zinc-700 font-semibold text-sm leading-relaxed">
                  No. Our upfront pricing is the same 24 hours a day, 7 days a week. Nights, weekends, and holidays are all included at no extra charge.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 flex flex-col items-center justify-center w-full py-12 px-6 gap-6 font-body text-xs font-bold uppercase tracking-widest">
        <a
          href="tel:2819890245"
          className="bg-primary text-white px-10 py-5 mb-4 hover:bg-white hover:text-primary transition-colors duration-150 linear rounded-none flex items-center gap-3"
        >
          <Phone size={18} />
          GET IMMEDIATE HELP
        </a>
        <div className="flex flex-col items-center gap-4">
          <span className="text-lg font-black text-white font-headline">CARLOCKSOUT | HOUSTON & GREATER AREAS INCLUDING COLLEGE STATION, TX</span>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider max-w-lg text-center">
            24/7 Emergency Locksmith Services: Car Lockout, Home Lockout, Commercial Lockout, Safe Lockout, Rekey, Car Key Programming
          </p>
          <div className="flex gap-6 text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-zinc-600 text-[10px] mt-4">
            © 2024 CarLocksOut. All rights reserved. Serving Houston, TX and Greater Areas including College Station, TX.
          </p>
        </div>
      </footer>
    </div>
  );
}
