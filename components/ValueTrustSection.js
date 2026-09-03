"use client";

import Image from "next/image";
import { ShieldCheck, HeartHandshake, Music, Sparkles } from "lucide-react";

export default function ValueTrustSection() {
  const treatments = [
    {
      title: "Body Massage",
      description:
        "Nikmati massage yang membantu tubuh terasa lebih rileks dan melepaskan kelelahan setelah aktivitas sehari-hari.",
      image:
        "https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg?auto=compress&cs=tinysrgb&w=800",
      tag: "Otot Rileks & Segar",
      duration: "Termasuk dalam Paket",
    },
    {
      title: "Hot Stone",
      description:
        "Sensasi hangat terapi batu basalt pilihan yang meredakan ketegangan tubuh secara mendalam.",
      image:
        "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
      tag: "Batu Warm Basalt",
      duration: "Termasuk dalam Signature",
    },
    {
      title: "Face Acupressure",
      description:
        "Tekanan lembut totok wajah pada titik energi untuk melancarkan sirkulasi dan menyegarkan aura wajah.",
      image:
        "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800",
      tag: "Kesegaran Wajah",
      duration: "Termasuk dalam Ritual",
    },
  ];

  const whyUsList = [
    {
      title: "Professional Therapist",
      desc: "Therapist terlatih & berpengalaman khusus layanan home spa wanita.",
      icon: ShieldCheck,
    },
    {
      title: "Complete Treatment Equipment",
      desc: "Perlengkapan steril, kain higienis & minyak aromatherapy premium.",
      icon: HeartHandshake,
    },
    {
      title: "Aromatherapy & Relaxing Music",
      desc: "Suasana spa mewah hadir di ruang Anda dengan musik relaksasi pilihan.",
      icon: Music,
    },
    {
      title: "Private Wellness Experience",
      desc: "Kenyamanan privasi penuh tanpa gangguan dan tanpa perlu keluar rumah.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="treatments" className="bg-[#FAF6F0] pt-20 md:pt-28 pb-0 space-y-0 relative overflow-hidden">

      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A3856C]/4 blur-[100px] rounded-full pointer-events-none" />

      {/* ── PART 1: Section intro ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#A3856C]/50" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#A3856C] uppercase">
              Your Time. Your Space. Your Wellness.
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#A3856C]/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2C2420] font-normal leading-tight">
            Hari yang panjang?<br />
            <span className="italic text-[#A3856C]">Tubuh terasa lelah?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D44] font-light leading-relaxed">
            You don't have to go anywhere.{" "}
            <span className="text-[#2C2420] font-medium">Therapist Chayra datang langsung ke rumah Anda.</span>
          </p>
        </div>

        {/* ── Treatment Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {treatments.map((item, idx) => (
            <div key={idx} className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(44,36,32,0.06)] border border-[#A3856C]/15 luxury-card">

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:640px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/50 via-transparent to-transparent" />
                {/* Tag */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#A3856C] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#A3856C]/20">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl text-[#2C2420] font-semibold">{item.title}</h3>
                <p className="text-[13px] text-[#5A4D44] font-light leading-relaxed">{item.description}</p>
                <div className="pt-1">
                  <span className="text-[10px] font-semibold tracking-widest text-[#A3856C] uppercase border-t border-[#A3856C]/15 pt-3 block">
                    {item.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave: FAF6F0 → F0EAE2 */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg className="relative block w-full h-16 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,0 600,120 900,40 C1050,10 1150,80 1200,60 L1200,120 L0,120 Z" fill="#F0EAE2" />
        </svg>
      </div>

      {/* ── PART 2: Why Chayra ── */}
      <div id="why-us" className="bg-[#F0EAE2] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Left: heading */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A3856C]/50" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-[#A3856C] uppercase">3 Treatments · 120 Minutes</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#2C2420] font-normal leading-tight">
                Why<br />
                <span className="italic text-[#A3856C]">Chayra?</span>
              </h2>
              <p className="text-sm text-[#5A4D44] font-light leading-relaxed">
                Setiap detail dirancang agar Anda benar-benar rileks — dari tangan therapist hingga aroma minyak yang mengisi ruangan.
              </p>

              {/* Quote */}
              <div className="bg-[#3D2B1F] text-white p-6 rounded-2xl shadow-lg border border-[#A3856C]/20">
                <p className="font-serif text-base sm:text-lg italic font-light text-amber-100/90 leading-relaxed">
                  "Everything is prepared.<br />
                  <span className="not-italic font-normal text-white">You just need to relax."</span>
                </p>
              </div>
            </div>

            {/* Right: why us list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUsList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-[#A3856C]/15 shadow-[0_4px_20px_rgba(163,133,108,0.06)] hover:border-[#A3856C]/35 hover:shadow-md transition-all duration-300 space-y-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#A3856C]/20 flex items-center justify-center">
                      <Icon className="w-4.5 h-4.5 text-[#A3856C]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2C2420] tracking-wide">{item.title}</p>
                      <p className="text-xs text-[#5A4D44] font-light leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>


    </section>
  );
}
