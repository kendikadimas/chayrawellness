"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

const WA_URL =
  "https://wa.me/628211559924?text=Hi%20Chayra%2C%20saya%20mau%20booking%20Chayra%20Signature%20Rp.%20229.000.%0A%0ALokasi%3A%0ATanggal%3A%0AJam%3A%0A(berikan%202%20opsi%20jam%20untuk%20backup-an)%0A%0AMohon%20dibantu%20cek%20sesi%20dan%20therapist%20yang%20tersedia.";

const steps = [
  {
    num: "01",
    title: "CHAT",
    desc: "Klik WhatsApp dan kirim lokasi + jadwal yang kamu inginkan.",
  },
  {
    num: "02",
    title: "CEK",
    desc: "Admin mengecek area dan ketersediaan therapist.",
  },
  {
    num: "03",
    title: "CONFIRM",
    desc: "Jadwal dan therapist dikonfirmasi.",
  },
  {
    num: "04",
    title: "RELAX",
    desc: "Therapist datang ke rumahmu.",
  },
];

const faqs = [
  {
    q: "Apakah therapist datang ke rumah?",
    a: "Ya. Chayra adalah home service.",
  },
  {
    q: "Apakah equipment dibawa?",
    a: "Ya. Therapist membawa perlengkapan treatment yang diperlukan.",
  },
  {
    q: "Bisa request therapist?",
    a: "Boleh. Request akan disesuaikan dengan ketersediaan therapist.",
  },
  {
    q: "Bagaimana mengecek area layanan?",
    a: "Kirim lokasi melalui WhatsApp. Admin akan mengeceknya.",
  },
  {
    q: "Bisa booking hari ini?",
    a: "Bisa, selama masih tersedia therapist dan slot.",
  },
];

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function HomeExperienceSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="experience" className="bg-[#FAF6F0] pt-0 pb-0 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 space-y-20">

        {/* ── Booking steps ── */}
        <div className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#A3856C]/60" />
              <span className="text-[10px] font-bold tracking-[0.45em] text-[#A3856C] uppercase">
                Cara Booking
              </span>
            </div>
            <h2 className="font-serif text-[2rem] sm:text-4xl lg:text-5xl font-normal text-[#2C2420] leading-[1.06]">
              BOOKING-NYA<br />
              <span className="italic text-[#A3856C]">GAMPANG.</span>
            </h2>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#A3856C]/15 shadow-[0_4px_20px_rgba(44,36,32,0.05)] space-y-4 relative overflow-hidden"
              >
                {/* Big number background */}
                <span className="absolute -right-2 -top-3 font-serif text-7xl font-bold text-[#A3856C]/6 select-none leading-none">
                  {step.num}
                </span>
                <div className="space-y-1 relative">
                  <p className="text-[9px] font-bold tracking-[0.45em] text-[#A3856C] uppercase">{step.num}</p>
                  <h3 className="font-serif text-xl text-[#2C2420] font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-[#5A4D44] font-light leading-relaxed relative">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Closing line */}
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#A3856C]/40" />
            <p className="text-sm font-medium text-[#2C2420]">
              Selesai. Kamu tinggal menikmati treatment.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold" />

        {/* ── FAQ ── */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left: header + CTA */}
          <div className="space-y-8 md:sticky md:top-32">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#A3856C]/60" />
                <span className="text-[10px] font-bold tracking-[0.45em] text-[#A3856C] uppercase">FAQ</span>
              </div>
              <h2 className="font-serif text-[2rem] sm:text-4xl font-normal text-[#2C2420] leading-[1.1]">
                MASIH MAU<br />
                <span className="italic text-[#A3856C]">TANYA?</span>
              </h2>
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#A3856C] hover:bg-[#836750] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-md transition-all duration-300 group"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>CEK AREA &amp; SESI TERSEDIA</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: FAQ list */}
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#A3856C]/15 shadow-[0_2px_12px_rgba(44,36,32,0.04)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-semibold text-[#2C2420]">{item.q}</span>
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full border border-[#A3856C]/30 flex items-center justify-center transition-transform duration-300 ${openFaq === i ? "rotate-45 bg-[#A3856C] border-[#A3856C]" : ""}`}>
                    <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none">
                      <path d="M5 2v6M2 5h6" stroke={openFaq === i ? "white" : "#A3856C"} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-[#5A4D44] font-light leading-relaxed border-t border-[#A3856C]/10 pt-3">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
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
