"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, ChevronUp } from "lucide-react";

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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 350);
    };
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 ${
          scrolled ? "pt-3" : "pt-4"
        }`}
      >
        <div
          className={`transition-all duration-500 w-full border ${
            scrolled
              ? "max-w-5xl bg-white/95 backdrop-blur-xl border-[#A3856C]/25 shadow-[0_8px_30px_rgba(163,133,108,0.12)] rounded-full px-6 py-2 sm:px-8 sm:py-2.5"
              : "max-w-7xl bg-transparent border-transparent rounded-full px-4 sm:px-8 py-2 shadow-none"
          }`}
        >
          {/* Main row */}
          <div className="flex items-center justify-between gap-4">
            {/* Left side: Logo (+ Social / Contact on unscroll) */}
            <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
              {/* Logo & Wordmark */}
              <a
                href="#hero"
                className="flex items-center gap-2.5 flex-shrink-0 group"
              >
                <div className="relative overflow-hidden rounded-full flex-shrink-0">
                  <Image
                    src="/logo.jpeg"
                    alt="Chayra Wellness"
                    width={48}
                    height={48}
                    className={`object-cover transition-all duration-300 ${
                      scrolled ? "h-8 w-8" : "h-9 w-9 sm:h-10 sm:w-10"
                    }`}
                    priority
                  />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-serif font-bold text-sm sm:text-base tracking-[0.14em] text-[#2C2420] group-hover:text-[#A3856C] transition-colors">
                    CHAYRA
                  </span>
                  <span className="text-[8px] font-bold tracking-[0.38em] text-[#A3856C] uppercase -mt-0.5">
                    WELLNESS
                  </span>
                </div>
              </a>

              {/* Social / Phone icon links — only visible when NOT scrolled */}
              {!scrolled && (
                <div className="hidden lg:flex items-center gap-2.5 text-[#2C2420]/70 pl-2 border-l border-[#A3856C]/25">
                  <a
                    href="https://instagram.com/chayrawellness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A3856C] transition-colors p-1"
                    title="Instagram @chayrawellness"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <span className="w-px h-3 bg-[#A3856C]/30" />
                  <a
                    href="https://wa.me/628211559924"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A3856C] transition-colors p-1"
                    title="WhatsApp 0821-1559-924"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Center: Nav links */}
            <nav className={`hidden md:flex items-center text-[11px] uppercase tracking-[0.2em] font-semibold text-[#2C2420] transition-all duration-300 ${
              scrolled ? "gap-4 lg:gap-6" : "gap-6 lg:gap-8"
            }`}>
              {navLinks.map((link, i) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <React.Fragment key={link.href}>
                    {i > 0 && <span className="text-[#A3856C]/35">·</span>}
                    <a
                      href={link.href}
                      className={`relative py-1 transition-colors duration-200 whitespace-nowrap ${
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
              className="inline-flex items-center gap-2 bg-[#2C2420] hover:bg-[#3D2B1F] text-white font-semibold text-[10px] uppercase tracking-[0.18em] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-sm transition-all duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6B4F] focus-visible:ring-offset-2 flex-shrink-0"
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
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white pl-4 pr-5 py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-105"
        aria-label="Chat di WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm font-medium tracking-wide">Chat via WhatsApp</span>
      </a>

      {/* Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed z-40 p-2.5 sm:p-3 rounded-full bg-[#2C2420]/90 hover:bg-[#2C2420] text-[#D4B89F] hover:text-white border border-[#A3856C]/30 shadow-[0_4px_16px_rgba(44,36,32,0.2)] backdrop-blur-sm transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6B4F] ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        } bottom-20 right-4 md:bottom-24 md:right-7`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </>
  );
}
