"use client";

import Image from "next/image";
import { Clock, Check, ArrowRight, Sparkles } from "lucide-react";

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function HeroSection() {
  const weekdayWaUrl =
    "https://wa.me/628211559924?text=Halo%20Chayra%20Wellness%2C%20saya%20tertarik%20dengan%20Weekday%20Signature%20Rp229.000.%20Saya%20ingin%20cek%20ketersediaan%20slot%20untuk%20treatment.";

  const treatments = ["Body Massage", "Hot Stone", "Face Acupressure"];

  return (
    <section id="hero" className="relative w-full min-h-[92vh] md:min-h-screen overflow-hidden flex flex-col">

      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=80"
          alt="Chayra Wellness — Home Wellness Service"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered gradient — left heavy for text legibility, right stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/92 via-[#FAF6F0]/40 to-[#FAF6F0]/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0]/10 via-transparent to-[#FAF6F0]/35" />
        {/* Ambient warm glow */}
        <div className="absolute -left-40 top-1/4 w-[600px] h-[600px] bg-[#A3856C]/6 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 w-full flex-1 flex items-center py-24 md:py-32">
        <div className="w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}
          <div className="space-y-8 max-w-xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#A3856C]/60" />
              <span className="text-[10px] font-bold tracking-[0.45em] text-[#A3856C] uppercase">
                Home Wellness Service
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[2.8rem] sm:text-6xl lg:text-[5rem] font-normal text-[#2C2420] leading-[1.04] tracking-tight">
              YOUR<br />
              WELLNESS<br />
              MOMENT,
              <span className="block mt-2 italic text-[#A3856C]">DELIVERED TO<br />YOUR HOME.</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-sm sm:text-base text-[#5A4D44] font-light leading-relaxed max-w-sm">
              Nikmati 120 menit pengalaman wellness dalam kenyamanan rumah Anda tanpa macet, tanpa antre, tanpa perlu keluar rumah.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3">
              {["Terapis Profesional", "Peralatan Lengkap", "Privasi Penuh"].map((b, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wide text-[#5A4D44] bg-white/80 border border-[#A3856C]/20 px-3 py-1.5 rounded-full">
                  <Sparkles className="w-3 h-3 text-[#A3856C]" />
                  {b}
                </span>
              ))}
            </div>

          </div>

          {/* Right: package card */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white/92 backdrop-blur-md rounded-3xl border border-[#A3856C]/20 shadow-[0_20px_60px_rgba(44,36,32,0.10)] overflow-hidden w-full max-w-sm luxury-card">

              {/* Card header */}
              <div className="bg-[#2C2420] px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.35em] text-[#A3856C] uppercase mb-0.5">Weekday Signature</p>
                  <p className="text-white font-serif text-base font-semibold">3 Treatments · 120 Minutes</p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#A3856C]/20 px-3 py-1.5 rounded-full">
                  <Clock className="w-3 h-3 text-[#A3856C]" />
                  <span className="text-[10px] text-amber-100 font-medium">Senin – Jumat</span>
                </div>
              </div>

              {/* Treatment list */}
              <div className="px-6 py-5 space-y-3 border-b border-[#A3856C]/10">
                {treatments.map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#FAF6F0] border border-[#A3856C]/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#A3856C]" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-[#2C2420] font-medium">{t}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="px-6 py-5 border-b border-[#A3856C]/10">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs text-gray-400 line-through block leading-none mb-1">Rp279.000</span>
                    <span className="font-serif text-3xl font-bold text-[#2C2420]">Rp229.000</span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Hemat Rp50.000
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 py-4 space-y-3">
                <a
                  href={weekdayWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#A3856C] hover:bg-[#836750] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg group"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>CEK SLOT HARI INI</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Urgency */}
                <div className="flex items-center justify-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3856C] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#A3856C]" />
                  </span>
                  <span className="text-[10px] font-semibold text-[#5A4D44] tracking-wide">ONLY 5 PROMO SLOTS PER DAY</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
