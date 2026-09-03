"use client";

import { Sparkles, Calendar, Smile } from "lucide-react";

export default function HomeExperienceSection() {
  const steps = [
    {
      num: "01",
      title: "CHOOSE",
      label: "Pilih Treatment",
      desc: "Pilih treatment yang Anda inginkan — Weekday Signature atau Tomorrow Treat.",
      icon: Sparkles,
    },
    {
      num: "02",
      title: "SCHEDULE",
      label: "Pilih Jadwal",
      desc: "Pilih tanggal & waktu yang tersedia sesuai reservasi Anda via WhatsApp.",
      icon: Calendar,
    },
    {
      num: "03",
      title: "RELAX",
      label: "Nikmati",
      desc: "Therapist datang langsung membawa seluruh peralatan spa & menyiapkan treatment untuk Anda.",
      icon: Smile,
    },
  ];

  const prepTips = [
    {
      text: "Disarankan makan 1–2 jam sebelum treatment berlangsung",
    },
    {
      text: "Siapkan area treatment di rumah yang nyaman, tenang & cukup luas",
    },
    {
      text: "Minum air putih secukupnya sebelum & setelah sesi relaksasi",
    },
    {
      text: "Informasikan kondisi kesehatan khusus kepada therapist sebelum treatment",
    },
  ];

  return (
    <section id="experience" className="bg-[#FAF6F0] pt-0 pb-0 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-20 py-20 md:py-28">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#A3856C]/50" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#A3856C] uppercase">We Come To You</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#A3856C]/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2C2420] font-normal leading-tight">
            Your Wellness Experience<br />
            <span className="italic text-[#A3856C]">in 3 Simple Steps</span>
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#A3856C]/15 shadow-[0_8px_32px_rgba(44,36,32,0.05)] luxury-card flex flex-col gap-6 group"
              >
                {/* Number + icon row */}
                <div className="flex items-start justify-between">
                  <span className="font-serif text-5xl font-bold text-[#A3856C]/15 leading-none select-none group-hover:text-[#A3856C]/25 transition-colors duration-300">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF6F0] border border-[#A3856C]/20 flex items-center justify-center group-hover:bg-[#A3856C]/8 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#A3856C]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-2">
                  <p className="text-[9px] font-bold tracking-[0.4em] text-[#A3856C] uppercase">{item.title}</p>
                  <h3 className="font-serif text-xl text-[#2C2420] font-semibold">{item.label}</h3>
                  <p className="text-sm text-[#5A4D44] font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Before your treatment */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">

          {/* Left: prep tips */}
          <div className="space-y-5">
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#A3856C] uppercase">Before Your Treatment</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2420] font-normal leading-snug">
                Persiapan Sederhana<br />
                <span className="italic text-[#A3856C]">untuk Sesi Terbaik Anda</span>
              </h3>
            </div>

            <div className="space-y-3">
              {prepTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 border border-[#A3856C]/12 shadow-[0_4px_16px_rgba(44,36,32,0.04)] hover:border-[#A3856C]/25 transition-colors duration-300">
                  <span className="text-[13px] text-[#5A4D44] font-light leading-relaxed">{tip.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: quote */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#3D2B1F] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#A3856C]/20 flex-1">
              {/* Quote mark */}
              <div className="font-serif text-5xl text-[#A3856C]/30 leading-none mb-4 select-none">"</div>
              <p className="font-serif text-lg sm:text-xl font-light text-amber-100/90 leading-relaxed">
                YOU DON'T GO TO THE WELLNESS EXPERIENCE.
              </p>
              <p className="font-serif text-lg sm:text-xl italic font-normal text-white leading-relaxed mt-1">
                THE WELLNESS EXPERIENCE COMES TO YOU.
              </p>
              <div className="h-px bg-[#A3856C]/20 mt-6 mb-4" />
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#A3856C] uppercase">Chayra Wellness</p>
            </div>
          </div>

        </div>

      </div>

      {/* Wave into FinalClosingSection */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg className="relative block w-full h-16 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,80 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z" fill="#F0EAE2" />
        </svg>
      </div>

    </section>
  );
}
