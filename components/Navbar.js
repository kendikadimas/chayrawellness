"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#treatments", label: "Treatments" },
  { href: "#special-offer", label: "Offers" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const defaultWaUrl =
    "https://wa.me/628211559924?text=Hi%20Chayra%2C%20saya%20mau%20booking%20Chayra%20Signature%20Rp.%20229.000.%0A%0ALokasi%3A%0ATanggal%3A%0AJam%3A%0A(berikan%202%20opsi%20jam%20untuk%20backup-an)%0A%0AMohon%20dibantu%20cek%20sesi%20dan%20therapist%20yang%20tersedia.";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 ${
          scrolled ? "pt-3" : "pt-4"
        }`}
      >
        <div
          className={`transition-all duration-500 w-full ${
            scrolled
              ? "max-w-4xl bg-white/92 backdrop-blur-xl border border-[#A3856C]/20 shadow-[0_10px_30px_rgba(44,36,32,0.12)] rounded-full px-4 py-2 sm:px-6 sm:py-2.5"
              : "max-w-7xl px-4 sm:px-8 py-2"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Left: Logo */}
            <a href="#hero" className="flex items-center flex-shrink-0">
              <Image
                src="/chayralogo.png"
                alt="Chayra Wellness"
                width={160}
                height={60}
                className={`object-contain transition-all duration-300 w-auto ${
                  scrolled ? "h-8 sm:h-9" : "h-11 sm:h-13"
                }`}
                priority
              />
            </a>

            {/* Center: Nav links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#2C2420]">
              {navLinks.map((link, i) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <React.Fragment key={link.href}>
                    {i > 0 && <span className="text-[#A3856C]/35">·</span>}
                    <a
                      href={link.href}
                      className={`relative py-1 transition-colors duration-200 ${
                        isActive ? "text-[#A3856C]" : "hover:text-[#A3856C]"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] w-3.5 rounded-full bg-[#A3856C]" />
                      )}
                    </a>
                  </React.Fragment>
                );
              })}
            </nav>

            {/* Right: CTA inside navbar */}
            <a
              href={defaultWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2C2420] hover:bg-[#3D2B1F] text-white font-semibold text-[10px] uppercase tracking-[0.18em] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-sm transition-all duration-300 hover:shadow-md flex-shrink-0"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#A3856C]" />
              <span className="hidden sm:inline">Reservasi</span>
              <span className="sm:hidden">Book</span>
            </a>
          </div>
        </div>
      </header>

      {/* Floating WhatsApp button */}
      <a
        href={defaultWaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white pl-4 pr-5 py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-105"
        aria-label="Chat di WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm font-medium tracking-wide">Chat via WhatsApp</span>
      </a>
    </>
  );
}
