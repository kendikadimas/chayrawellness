"use client";

import { ArrowRight, Check, Truck } from "lucide-react";

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function FinalClosingSection() {
  const weekdayWaUrl =
    "https://wa.me/628211559924?text=Halo%20Chayra%20Wellness%2C%20saya%20tertarik%20dengan%20Weekday%20Signature%20Rp229.000.%20Saya%20ingin%20cek%20ketersediaan%20slot%20untuk%20treatment.";

  const tomorrowWaUrl =
    "https://wa.me/628211559924?text=Halo%20Chayra%20Wellness%2C%20saya%20tertarik%20dengan%20Tomorrow%20Treat%20Rp199.000.%20Saya%20ingin%20booking%20H-1%20dan%20mendapatkan%20free%20transport.%20Mohon%20info%20ketersediaan%20jadwalnya.";

  return (
    <section id="contact" className="bg-[#F0EAE2] pt-0 pb-20 md:pb-28 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#A3856C]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16 pt-16 md:pt-24">

        {/* Narrative Closing */}
        <div className="text-center max-w-2xl mx-auto space-y-5">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#A3856C]/50" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#A3856C] uppercase">Your Reservation</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#A3856C]/50" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#2C2420] font-normal leading-tight">
            You Deserve<br />
            <span className="italic text-[#A3856C]">A Moment to Pause.</span>
          </h2>

          <div className="space-y-1.5 text-[#5A4D44] text-sm sm:text-base font-light pt-1 leading-relaxed">
            <p>Tidak perlu menunggu liburan.</p>
            <p>Tidak perlu pergi jauh.</p>
            <p>Tidak perlu mencari waktu khusus.</p>
          </div>

          <div className="pt-2">
            <div className="divider-gold mb-4" />
            <p className="font-serif text-lg sm:text-xl font-semibold tracking-[0.15em] text-[#2C2420] uppercase">
              JUST 120 MINUTES. JUST FOR YOU.
            </p>
            <div className="divider-gold mt-4" />
          </div>
        </div>

        {/* Dual Package Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">

          {/* Card 1: WEEKDAY SIGNATURE */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(44,36,32,0.07)] border border-[#A3856C]/15 flex flex-col luxury-card">

            {/* Card header */}
            <div className="bg-[#FAF6F0] border-b border-[#A3856C]/10 px-7 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.4em] text-[#A3856C] uppercase mb-1">Weekday Signature</p>
                  <h3 className="font-serif text-xl text-[#2C2420] font-semibold">3 Treatments · 120 Minutes</h3>
                </div>
                <div className="flex items-center gap-1.5 bg-white border border-[#A3856C]/20 px-3 py-1.5 rounded-full">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3856C] opacity-70" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#A3856C]" />
                  </span>
                  <span className="text-[9px] font-bold text-[#A3856C] tracking-wide uppercase">5 Slot / Hari</span>
                </div>
              </div>
            </div>

            <div className="px-7 py-6 flex flex-col flex-1 gap-6">
              {/* Treatments */}
              <div className="space-y-2.5">
                {["Body Massage", "Hot Stone", "Face Acupressure"].map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-[#2C2420] flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-[#2C2420] font-medium">{t}</span>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-[#5A4D44] font-medium tracking-wide bg-[#FAF6F0] rounded-xl px-4 py-2.5 border border-[#A3856C]/10">
                Senin – Jumat · Sesuai ketersediaan therapist
              </div>

              {/* Price */}
              <div className="mt-auto space-y-0.5">
                <span className="text-xs text-gray-400 line-through block">Rp279.000</span>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl font-bold text-[#2C2420]">Rp229.000</span>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Hemat Rp50.000
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={weekdayWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#2C2420] hover:bg-[#3D2B1F] text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-xl shadow-md transition-all duration-300 group hover:shadow-lg"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#A3856C]" />
                <span>BOOK VIA WHATSAPP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: TOMORROW TREAT */}
          <div className="bg-[#2C2420] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(44,36,32,0.18)] border border-[#A3856C]/20 flex flex-col luxury-card relative">

            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-[0.025]" style={{backgroundImage:"radial-gradient(#A3856C 1px, transparent 1px)", backgroundSize:"14px 14px"}} />

            {/* Card header */}
            <div className="relative bg-[#A3856C]/10 border-b border-[#A3856C]/20 px-7 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.4em] text-[#A3856C] uppercase mb-1">Tomorrow Treat</p>
                  <h3 className="font-serif text-xl text-white font-semibold">Body Massage + Face Acupressure</h3>
                </div>
                <div className="flex items-center gap-1.5 bg-[#A3856C]/20 border border-[#A3856C]/30 px-3 py-1.5 rounded-full">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3856C] opacity-70" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#A3856C]" />
                  </span>
                  <span className="text-[9px] font-bold text-[#A3856C] tracking-wide uppercase">5 Slot H-1</span>
                </div>
              </div>
            </div>

            <div className="relative px-7 py-6 flex flex-col flex-1 gap-6">
              {/* Treatments */}
              <div className="space-y-2.5">
                {["Body Massage", "Face Acupressure", "Transport Gratis"].map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-[#A3856C] flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-amber-50/90 font-medium">{t}</span>
                    {i === 2 && (
                      <span className="text-[9px] font-bold text-[#A3856C] bg-[#A3856C]/15 border border-[#A3856C]/25 px-2 py-0.5 rounded-full uppercase tracking-wide">Free</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-amber-50/50 font-medium tracking-wide bg-white/5 rounded-xl px-4 py-2.5 border border-white/8 flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#A3856C]" />
                120 Menit · Reservasi minimal H-1 sebelum treatment
              </div>

              {/* Price */}
              <div className="mt-auto space-y-1">
                <div className="flex items-center gap-2 text-xs text-amber-50/40">
                  <span>Total nilai</span>
                  <span className="line-through">Rp284.000</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl font-bold text-white">Rp199.000</span>
                </div>
                <span className="text-[9px] font-bold text-[#A3856C] uppercase tracking-widest">Save Rp85.000 + Free Transport</span>
              </div>

              {/* CTA */}
              <a
                href={tomorrowWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#A3856C] hover:bg-[#836750] text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-xl shadow-lg transition-all duration-300 group hover:shadow-[#A3856C]/30 hover:shadow-xl"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>KLAIM HARGA H-1</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <p className="text-center text-[11px] text-[#5A4D44]/60 font-light max-w-lg mx-auto">
          Berlaku sesuai area layanan & ketersediaan therapist. Ketentuan promosi berlaku.
        </p>

      </div>

    </section>
  );
}
