"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const WA_URL =
  "https://wa.me/628211559924?text=Hi%20Chayra%2C%20saya%20mau%20booking%20Chayra%20Signature%20Rp.%20229.000.%0A%0ALokasi%3A%0ATanggal%3A%0AJam%3A%0A(berikan%202%20opsi%20jam%20untuk%20backup-an)%0A%0AMohon%20dibantu%20cek%20sesi%20dan%20therapist%20yang%20tersedia.";

const treatments = [
  {
    title: "Body Massage",
    desc: "Untuk membantu meredakan rasa pegal dan tegang setelah aktivitas.",
    image: "/services2.jpeg",
  },
  {
    title: "Hot Stone",
    desc: "Sensasi hangat yang membuat sesi massage terasa semakin rileks.",
    image: "/services3.jpeg",
  },
  {
    title: "Face Acupressure",
    desc: "Tekanan lembut pada titik-titik wajah sebagai pelengkap sesi.",
    image: "/services.jpeg",
  },
];

export default function ValueTrustSection() {
  return (
    <section id="treatments" className="bg-[#FAF6F0] pt-20 md:pt-28 pb-0 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">

        {/* ── Intro block ── */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left: copy */}
          <div className="md:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#A3856C]/60" />
              <span className="text-[10px] font-bold tracking-[0.45em] text-[#A3856C] uppercase">
                Home Wellness Service
              </span>
            </div>

            <h2 className="font-serif text-[2.2rem] sm:text-5xl lg:text-[3.8rem] font-normal text-[#2C2420] leading-[1.06] tracking-tight">
              NGGAK PERLU<br />
              PERGI KE SPA.<br />
              <span className="italic text-[#A3856C]">KAMI YANG DATANG.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5A4D44] font-light leading-relaxed max-w-xl">
              <p>
                Setelah seharian kerja, urusan rumah, atau aktivitas yang bikin badan terasa berat, hal terakhir yang mungkin kamu mau adalah keluar rumah lagi.
              </p>
              <p>Makanya Chayra hadir sebagai home wellness service.</p>
              <p>Kamu cukup siapkan ruang yang nyaman.</p>
              <p className="font-medium text-[#2C2420]">Therapist datang. Treatment dimulai. Kamu tinggal rileks.</p>
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#2C2420] hover:bg-[#3D2B1F] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-md transition-all duration-300 group"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>MAU COBA? CEK SESI YANG TERSEDIA</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Editorial Brand Image / Logo Showcase */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-[#A3856C]/25 shadow-[0_12px_40px_rgba(44,36,32,0.08)] bg-white p-8 text-center space-y-6">
              <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#A3856C]/30 p-2 shadow-inner">
                <Image
                  src="/logo.jpeg"
                  alt="Chayra Wellness Logo"
                  fill
                  priority
                  className="object-cover rounded-full"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#2C2420] tracking-widest">CHAYRA</h3>
                <p className="text-[9px] font-bold tracking-[0.4em] text-[#A3856C] uppercase">WELLNESS</p>
                <p className="text-xs text-[#5A4D44] font-light pt-2 italic">
                  &ldquo;Your wellness. Your space. Your time.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Treatment cards ── */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#A3856C]/50" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#A3856C] uppercase">
              Dalam 1 Sesi, Kamu Mendapatkan:
            </span>
            <span className="h-px flex-1 bg-[#A3856C]/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {treatments.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#A3856C]/20 shadow-[0_4px_20px_rgba(44,36,32,0.04)] hover:border-[#A3856C]/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Aspect Box — Seragam di semua kartu */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F4EFEA]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:640px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-[#2C2420] font-semibold">{item.title}</h3>
                    <p className="text-xs sm:text-[13px] text-[#4A3E36] font-normal leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer summary */}
          <div className="bg-[#2C2420] rounded-2xl px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-[10px] font-bold tracking-[0.4em] text-[#A3856C] uppercase">
                3 Treatment · 120 Menit · Rp229.000
              </p>
              <p className="font-serif text-lg sm:text-xl text-white font-semibold">
                Bukan cuma massage. Kamu dapat full session.
              </p>
            </div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 bg-[#A3856C] hover:bg-[#836750] text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-xl transition-all duration-300 group"
            >
              <span>MAU COBA? CEK SESI YANG TERSEDIA</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>

      {/* Editorial Transition to Section 3 */}
      <div className="w-full h-16 md:h-24 bg-gradient-to-b from-[#FAF6F0] to-[#F0EAE2] mt-20 border-b border-[#A3856C]/15" />

    </section>
  );
}
