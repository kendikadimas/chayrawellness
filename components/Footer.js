"use client";

import Image from "next/image";
import { Phone, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const instaPhotos = [
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80",
  ];

  const navLinks = [
    { label: "Home",        href: "#hero" },
    { label: "Treatments",  href: "#treatments" },
    { label: "Offers",      href: "#special-offer" },
    { label: "Experience",  href: "#experience" },
    { label: "Contact",     href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#2C2420] text-amber-50/80 pt-0 pb-24 md:pb-14">

      {/* Top wave from FinalClosingSection */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg className="relative block w-full h-16 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,0 L0,0 Z" fill="#F0EAE2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-10 space-y-14">

        {/* Brand + tagline center block */}
        <div className="text-center space-y-3 pb-10 border-b border-white/8">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#A3856C]/40" />
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.12em] text-white">CHAYRA</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#A3856C]/40" />
          </div>
          <p className="text-[9px] font-bold tracking-[0.55em] text-[#A3856C] uppercase">WELLNESS</p>
          <p className="text-xs text-amber-50/50 font-light tracking-widest">
            Your wellness. Your space. Your time.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-12 gap-10 pb-12">

          {/* Col 1: Instagram preview */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-[9px] font-bold tracking-[0.35em] text-[#A3856C] uppercase block">
              Follow Us on Instagram
            </span>
            <a
              href="https://instagram.com/chayrawellness"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-base font-semibold text-white hover:text-[#A3856C] transition-colors duration-200 block"
            >
              @chayrawellness
            </a>
            <div className="flex items-center gap-2 pt-1">
              {instaPhotos.map((src, idx) => (
                <a
                  key={idx}
                  href="https://instagram.com/chayrawellness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-20 h-20 rounded-xl overflow-hidden border border-white/10 group"
                >
                  <Image
                    src={src}
                    alt="Chayra Wellness"
                    fill
                    sizes="80px"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#A3856C]/0 group-hover:bg-[#A3856C]/20 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Nav links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[9px] font-bold tracking-[0.35em] text-[#A3856C] uppercase block">
              Navigasi
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-amber-50/60 hover:text-white transition-colors duration-200 font-light tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[9px] font-bold tracking-[0.35em] text-[#A3856C] uppercase block">
              Hubungi Kami
            </span>
            <div className="space-y-3 text-xs text-amber-50/60">
              <a
                href="https://wa.me/628211559924"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#A3856C] shrink-0" />
                <span>WhatsApp: 0821-1559-924</span>
              </a>
              <a
                href="https://instagram.com/chayrawellness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5 text-[#A3856C] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram: @chayrawellness</span>
              </a>
              <a
                href="https://chayrawellness.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <Globe className="w-3.5 h-3.5 text-[#A3856C] shrink-0" />
                <span>chayrawellness.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/6 text-[10px] text-amber-50/30">
          <p>© {currentYear} Chayra Wellness. Home Wellness Service.</p>
          <p>Service area, availability &amp; promotional terms apply.</p>
        </div>

      </div>
    </footer>
  );
}
