"use client";

import { Clock, Truck, ArrowRight, Check } from "lucide-react";

export default function SpecialOfferSection() {
  const tomorrowWaUrl =
    "https://wa.me/628211559924?text=Halo%20Chayra%20Wellness%2C%20saya%20tertarik%20dengan%20Tomorrow%20Treat%20Rp199.000.%20Saya%20ingin%20booking%20H-1%20dan%20mendapatkan%20free%20transport.%20Mohon%20info%20ketersediaan%20jadwalnya.";

  const includes = [
    { label: "Body Massage", main: true },
    { label: "Face Acupressure", main: true },
    { label: "Transport Gratis", main: false },
  ];

  return (
    <section id="special-offer" className="bg-[#F0EAE2] pt-0 pb-0 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#A3856C]/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 py-20 md:py-28 space-y-14">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#A3856C]/50" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#A3856C] uppercase">H-1 Early Booking Privilege</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#A3856C]/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2C2420] font-normal leading-tight">
            Want to Save More?<br />
            <span className="italic text-[#A3856C]">Book Today. Relax Tomorrow.</span>
          </h2>
          <p className="text-sm text-[#5A4D44] font-light leading-relaxed">
            Reservasi minimal 1 hari sebelum treatment dan dapatkan harga spesial Tomorrow Treat — lengkap dengan transport gratis.
          </p>
        </div>

        {/* Main offer card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(44,36,32,0.09)] border border-[#A3856C]/15 luxury-card">

            {/* Urgency bar */}
            <div className="bg-[#FAF6F0] border-b border-[#A3856C]/12 px-6 sm:px-10 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3856C] opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A3856C]" />
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#2C2420] uppercase">
                  Hanya 5 Slot Promo H-1 Per Hari
                </span>
              </div>
              <span className="text-[9px] font-medium text-[#A3856C] tracking-wider uppercase hidden sm:block">
                Subject to availability
              </span>
            </div>

            <div className="p-6 sm:p-10 grid md:grid-cols-2 gap-10 items-center">

              {/* Left: package details */}
              <div className="space-y-7">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.4em] text-[#A3856C] uppercase mb-1">Tomorrow Treat</p>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2420] font-semibold leading-snug">
                    Home Wellness,<br />
                    <span className="italic font-normal text-[#5A4D44]">Dipesan Hari Ini.</span>
                  </h3>
                </div>

                {/* Treatment list */}
                <div className="space-y-3">
                  {includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.main ? "bg-[#2C2420]" : "bg-[#A3856C]"}`}>
                        <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                      </span>
                      <span className={`text-sm font-medium ${item.main ? "text-[#2C2420]" : "text-[#A3856C]"}`}>
                        {item.label}
                      </span>
                      {!item.main && (
                        <span className="text-[9px] font-bold tracking-widest text-[#A3856C] bg-[#A3856C]/8 border border-[#A3856C]/20 px-2 py-0.5 rounded-full uppercase">
                          Gratis
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-[#5A4D44] bg-[#FAF6F0] rounded-xl px-4 py-3 border border-[#A3856C]/12">
                  <Clock className="w-4 h-4 text-[#A3856C] shrink-0" />
                  <span className="text-xs font-medium">120 Menit · Berlaku sesuai area layanan & ketersediaan therapist</span>
                </div>
              </div>

              {/* Right: pricing */}
              <div className="bg-[#2C2420] rounded-2xl p-7 sm:p-8 space-y-6 relative overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"radial-gradient(#A3856C 1px, transparent 1px)", backgroundSize:"16px 16px"}} />

                <div className="relative space-y-1">
                  <p className="text-[10px] font-bold tracking-[0.35em] text-[#A3856C] uppercase">Total Value</p>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-amber-50/50">
                      <span>Treatment</span>
                      <span>Rp249.000</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-amber-50/50">
                      <span>Transport</span>
                      <span>Rp35.000</span>
                    </div>
                    <div className="h-px bg-amber-50/10 my-2" />
                    <div className="flex items-center justify-between text-xs text-amber-50/60">
                      <span>Total Nilai</span>
                      <span className="line-through">Rp284.000</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <p className="text-[10px] font-bold tracking-[0.35em] text-[#A3856C] uppercase mb-1">Harga H-1 Anda</p>
                  <p className="font-serif text-4xl font-bold text-white leading-none">Rp199.000</p>
                  <div className="flex items-center gap-2 mt-2.5">
                    <Truck className="w-3.5 h-3.5 text-[#A3856C]" />
                    <span className="text-[10px] font-bold tracking-widest text-[#A3856C] uppercase">
                      Save Rp85.000 + Free Transport
                    </span>
                  </div>
                </div>

                <a
                  href={tomorrowWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full flex items-center justify-center gap-2.5 bg-[#A3856C] hover:bg-[#836750] text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-xl shadow-lg transition-all duration-300 group hover:shadow-[#A3856C]/30 hover:shadow-xl"
                >
                  <span>KLAIM HARGA H-1</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="relative text-[9px] text-amber-50/30 text-center">
                  *Berlaku untuk pemesanan H-1 sesuai ketersediaan slot therapist.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Wave into HomeExperienceSection */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg className="relative block w-full h-16 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,0 600,120 900,40 C1050,10 1150,80 1200,60 L1200,120 L0,120 Z" fill="#FAF6F0" />
        </svg>
      </div>

    </section>
  );
}
