"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const WA_URL =
  "https://wa.me/628211559924?text=Hi%20Chayra%2C%20saya%20mau%20booking%20Chayra%20Signature%20Rp.%20229.000.%0A%0ALokasi%3A%0ATanggal%3A%0AJam%3A%0A(berikan%202%20opsi%20jam%20untuk%20backup-an)%0A%0AMohon%20dibantu%20cek%20sesi%20dan%20therapist%20yang%20tersedia.";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-[92vh] md:min-h-screen overflow-hidden flex flex-col">

      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src="/services.jpeg"
          alt="Chayra Wellness — Home Wellness Service"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/96 via-[#FAF6F0]/60 to-[#FAF6F0]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0]/10 via-transparent to-[#FAF6F0]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 w-full flex-1 flex items-center pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}
          <div className="space-y-7 max-w-xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#A3856C]/60" />
              <span className="text-[10px] font-bold tracking-[0.45em] text-[#A3856C] uppercase">
                Home Wellness Service
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[2.6rem] sm:text-5xl lg:text-[4.8rem] font-normal text-[#2C2420] leading-[1.04] tracking-tight">
              CAPEK?<br />
              <span className="block">NGGAK PERLU</span>
              <span className="block italic text-[#A3856C]">KELUAR RUMAH.</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-sm sm:text-base text-[#5A4D44] font-light leading-relaxed max-w-sm">
              Chayra datang langsung ke rumahmu. Nikmati 120 menit Body Massage + Hot Stone + Face Acupressure tanpa perlu macet-macetan, antre, atau keluar rumah setelah seharian beraktivitas.
            </p>

            {/* Coverage */}
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#A3856C] uppercase">
              Jakarta · Bogor · Depok · Bekasi · Tangerang
            </p>

          </div>

          {/* Right: package card */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#A3856C]/25 shadow-[0_12px_40px_rgba(44,36,32,0.08)] overflow-hidden w-full max-w-sm">

              {/* Card header */}
              <div className="bg-[#2C2420] px-6 py-5">
                <p className="text-[10px] font-bold tracking-[0.35em] text-[#C4A88E] uppercase mb-1">Chayra Signature</p>
                <p className="text-white font-serif text-lg font-semibold">3 Treatments · 120 Menit</p>
              </div>

              {/* Price */}
              <div className="px-6 pt-5 pb-4 border-b border-[#A3856C]/15">
                <span className="text-xs text-[#736357] line-through block leading-none mb-1">Rp359.000</span>
                <div className="flex items-end gap-3">
                  <span className="font-serif text-3xl font-bold text-[#2C2420]">Rp229.000</span>
                  <span className="text-[10px] font-bold text-[#1E5631] bg-[#E8F5E9] border border-[#C8E6C9] px-2.5 py-1 rounded-md uppercase tracking-wider mb-0.5">
                    Hemat Rp130.000
                  </span>
                </div>
              </div>

              {/* Checklist */}
              <div className="px-6 py-4 space-y-3 border-b border-[#A3856C]/15">
                {[
                  "Therapist datang ke rumah",
                  "Perlengkapan treatment dibawa",
                  "Private & nyaman",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-md bg-[#F4EFEA] border border-[#A3856C]/35 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#7A5B42]" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-[#2C2420] font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-6 py-5 space-y-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#8C6B4F] hover:bg-[#6D4F37] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6B4F] focus-visible:ring-offset-2 group"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>CEK SESI TERSEDIA</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-center text-[11px] text-[#5A4D44] font-normal leading-relaxed">
                  Reservasi H-2 Jam · Promo terbatas · Sesuai area &amp; ketersediaan therapist
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
