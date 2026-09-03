"use client";

export default function MarqueeBand() {
  const items = [
    "Chayra Wellness",
    "Home Wellness Service",
    "120 Menit Ritual",
    "Terapis Profesional",
    "Body Massage",
    "Hot Stone",
    "Face Acupressure",
    "Privasi Penuh",
  ];

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative bg-[#2C2420] py-4 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#2C2420] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#2C2420] to-transparent z-10 pointer-events-none" />

      <div className="marquee-container">
        <div className="animate-marquee">
          {doubled.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="font-serif text-sm sm:text-base font-normal text-amber-50/85 tracking-[0.2em] uppercase px-7 select-none">
                {item}
              </span>
              <span className="text-[#A3856C]/60 text-xs select-none">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
