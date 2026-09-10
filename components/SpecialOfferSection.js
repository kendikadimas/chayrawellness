"use client";

import Image from "next/image";
import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const WA_URL =
  "https://wa.me/628211559924?text=Hi%20Chayra%2C%20saya%20mau%20booking%20Chayra%20Signature%20Rp.%20229.000.%0A%0ALokasi%3A%0ATanggal%3A%0AJam%3A%0A(berikan%202%20opsi%20jam%20untuk%20backup-an)%0A%0AMohon%20dibantu%20cek%20sesi%20dan%20therapist%20yang%20tersedia.";

const trustPoints = [
  "Therapist Chayra",
  "Equipment treatment dibawa langsung",
  "Appointment dikonfirmasi sebelum therapist datang",
  "Admin siap membantu melalui WhatsApp",
  "Home service berdasarkan area coverage",
];

const testimonials = [
  "/testi.jpeg",
  "/testi2.jpeg",
  "/testi3.jpeg",
  "/testi4.jpeg",
];

export default function SpecialOfferSection() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="special-offer" className="bg-[#F0EAE2] pt-0 pb-0 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 space-y-20">

        {/* ── Trust block ── */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left: copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#A3856C]/60" />
                <span className="text-[10px] font-bold tracking-[0.45em] text-[#A3856C] uppercase">
                  Sebelum Booking
                </span>
              </div>
              <h2 className="font-serif text-[1.9rem] sm:text-4xl text-[#2C2420] font-normal leading-[1.1]">
                SEBELUM BOOKING,<br />
                WAJAR KALAU<br />
                <span className="italic text-[#A3856C]">KAMU MAU TAHU.</span>
              </h2>
            </div>

            {/* Rhetorical questions */}
            <div className="space-y-2">
              {[
                "Therapist-nya profesional?",
                "Beneran datang ke rumah?",
                "Equipment-nya dibawa?",
                "Booking-nya aman?",
              ].map((q, i) => (
                <p key={i} className="text-sm text-[#5A4D44] font-light leading-relaxed">
                  {q}
                </p>
              ))}
            </div>

            <p className="text-sm text-[#2C2420] font-medium leading-relaxed">
              Chayra menjaga prosesnya tetap sederhana dan jelas dari awal.
            </p>

            {/* Checklist */}
            <div className="space-y-3">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#2C2420] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-[#2C2420] font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: equipment image */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(44,36,32,0.10)] border border-[#A3856C]/15 aspect-[4/5]">
            <Image
              src="/equipment.jpeg"
              alt="Chayra Wellness — Equipment Treatment"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/30 via-transparent to-transparent" />
          </div>

        </div>

        {/* Divider */}
        <div className="divider-gold" />

        {/* ── Testimonial block ── */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#A3856C]/50" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#A3856C] uppercase">
                Testimoni Customer
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#A3856C]/50" />
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#2C2420] font-normal leading-tight">
              APA KATA<br />
              <span className="italic text-[#A3856C]">CUSTOMER KAMI?</span>
            </h2>
          </div>

          {/* Slider */}
          <div className="relative max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(44,36,32,0.12)] border border-[#A3856C]/15 bg-white aspect-[9/16] sm:aspect-[3/4]">
              {testimonials.map((src, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                  <Image
                    src={src}
                    alt={`Testimoni customer Chayra ${i + 1}`}
                    fill
                    sizes="(max-width:640px) 100vw, 448px"
                    className="object-contain"
                  />
                </div>
              ))}

              {/* Prev / Next */}
              <button
                onClick={prev}
                aria-label="Testimoni sebelumnya"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 border border-[#A3856C]/20 flex items-center justify-center shadow-md hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-[#2C2420]" />
              </button>
              <button
                onClick={next}
                aria-label="Testimoni berikutnya"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 border border-[#A3856C]/20 flex items-center justify-center shadow-md hover:bg-white transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-[#2C2420]" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Lihat testimoni ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-[#A3856C]" : "w-2 h-2 bg-[#A3856C]/30"}`}
                />
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-[#5A4D44] font-light leading-relaxed max-w-sm mx-auto">
            Lebih nyaman di rumah. Lebih praktis. Tetap dapat treatment yang lengkap.
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#A3856C] hover:bg-[#836750] text-white text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-md transition-all duration-300 group"
            >
              <span>CEK SESI TERSEDIA</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
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
