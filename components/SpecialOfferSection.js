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
        <div className="space-y-10 py-6">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#A3856C]/50" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#8C6B4F] uppercase">
                Testimoni Real Customer
              </span>
              <span className="h-px w-10 bg-[#A3856C]/50" />
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#2C2420] font-normal leading-tight">
              APA KATA<br />
              <span className="italic text-[#8C6B4F]">CUSTOMER KAMI?</span>
            </h2>
            <p className="text-sm text-[#4A3E36] font-normal leading-relaxed pt-1">
              Lebih nyaman di rumah. Lebih praktis. Tetap dapat treatment yang lengkap.
            </p>
          </div>

          {/* Testimonial Images in a Single Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {testimonials.map((src, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-[#A3856C]/25 shadow-[0_4px_20px_rgba(44,36,32,0.06)] hover:border-[#8C6B4F] hover:shadow-[0_12px_30px_rgba(44,36,32,0.15)] transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Testimoni customer Chayra ${i + 1}`}
                  className="w-full h-auto block"
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#8C6B4F] hover:bg-[#6D4F37] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6B4F] focus-visible:ring-offset-2 group"
            >
              <span>CEK SESI TERSEDIA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>

      {/* Editorial Transition into HomeExperienceSection */}
      <div className="w-full h-16 md:h-24 bg-gradient-to-b from-[#F0EAE2] to-[#FAF6F0] border-b border-[#A3856C]/15" />

    </section>
  );
}
