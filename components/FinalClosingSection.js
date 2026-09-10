"use client";

import { ArrowRight, Check } from "lucide-react";

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const WA_URL =
  "https://wa.me/628211559924?text=Hi%20Chayra%2C%20saya%20mau%20booking%20Chayra%20Signature%20Rp.%20229.000.%0A%0ALokasi%3A%0ATanggal%3A%0AJam%3A%0A(berikan%202%20opsi%20jam%20untuk%20backup-an)%0A%0AMohon%20dibantu%20cek%20sesi%20dan%20therapist%20yang%20tersedia.";

export default function FinalClosingSection() {
  return (
    <section id="contact" className="bg-[#F0EAE2] pt-0 pb-20 md:pb-28 relative overflow-hidden">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 pt-16 md:pt-24 space-y-14">

        {/* ── Copy block ── */}
        <div className="space-y-6 max-w-xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#A3856C]/60" />
            <span className="text-[10px] font-bold tracking-[0.45em] text-[#A3856C] uppercase">
              Chayra Wellness
            </span>
          </div>

          <h2 className="font-serif text-[2.4rem] sm:text-5xl lg:text-[4rem] font-normal text-[#2C2420] leading-[1.04] tracking-tight">
            CAPEKNYA<br />
            <span className="italic text-[#A3856C]">SUDAH CUKUP.</span>
          </h2>

          <div className="space-y-2 text-sm sm:text-base text-[#4A3E36] font-normal leading-relaxed">
            <p>Nggak perlu keluar rumah.</p>
            <p>Nggak perlu kena macet.</p>
            <p>Nggak perlu cari parkir.</p>
            <p>Nggak perlu antre.</p>
          </div>

          <p className="text-base sm:text-lg font-semibold text-[#2C2420]">
            Cukup pilih waktu. Chayra yang datang.
          </p>
        </div>

        {/* ── Single package card ── */}
        <div className="bg-[#2C2420] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(44,36,32,0.12)] border border-[#A3856C]/30 relative">

          {/* Card header */}
          <div className="relative bg-[#382B24] border-b border-[#A3856C]/25 px-7 sm:px-10 py-6">
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#D4B89F] uppercase mb-1">Chayra Signature</p>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold leading-snug">
              Body Massage + Hot Stone + Face Acupressure
            </h3>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#E8DDD4] uppercase mt-2">
              120 Menit · 3 Treatment
            </p>
          </div>

          <div className="relative px-7 sm:px-10 py-8 space-y-8">

            {/* Treatment checklist */}
            <div className="grid sm:grid-cols-3 gap-3">
              {["Body Massage", "Hot Stone", "Face Acupressure"].map((t, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-[#8C6B4F] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-[#F4EFEA] font-medium">{t}</span>
                </div>
              ))}
            </div>

            {/* Price + urgency */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs text-[#A8988C] line-through block">Rp359.000</span>
                <span className="font-serif text-4xl sm:text-5xl font-bold text-white leading-none">Rp229.000</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
                <span className="h-2 w-2 rounded-full bg-[#E5A93C]" />
                <span className="text-[11px] font-semibold tracking-wider text-[#F4EFEA] uppercase">
                  Sisa 2 slot untuk Chayra Signature hari ini
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#8C6B4F] hover:bg-[#6D4F37] text-white font-bold text-sm uppercase tracking-widest py-4 px-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6B4F] focus-visible:ring-offset-2 group"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>BOOK YOUR SESSION NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-center text-xs text-[#D8CCC2] font-normal">
                Klik WhatsApp dan kirim: Lokasi + tanggal + jam yang kamu inginkan.
              </p>
            </div>

            {/* Brand footer */}
            <div className="border-t border-white/10 pt-6 text-center space-y-1">
              <p className="text-[10px] font-bold tracking-[0.4em] text-[#D4B89F] uppercase">Chayra Wellness</p>
              <p className="text-[10px] font-medium tracking-[0.25em] text-[#A8988C] uppercase">Home Wellness Service</p>
            </div>

          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#5A4D44] font-normal max-w-lg mx-auto">
          Berlaku sesuai area layanan &amp; ketersediaan therapist. Ketentuan promosi berlaku.
        </p>

      </div>
    </section>
  );
}
