import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://chayrawellness.com"),
  title: "Chayra Wellness — Home Wellness Service Jabodetabek",
  description:
    "Nikmati 120 menit Body Massage + Hot Stone + Face Acupressure langsung di rumah Anda. Layanan spa panggilan profesional untuk area Jakarta, Bogor, Depok, Tangerang, & Bekasi.",
  keywords: [
    "chayra wellness",
    "home wellness service",
    "spa panggilan jakarta",
    "massage ke rumah",
    "body massage panggilan",
    "hot stone massage",
    "face acupressure",
    "home service spa tangerang",
    "massage panggilan bekasi depok bogor",
  ],
  authors: [{ name: "Chayra Wellness" }, { name: "Kalana Labs", url: "https://kalanalabs.com" }],
  creator: "Kalana Labs",
  publisher: "Chayra Wellness",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://chayrawellness.com",
  },
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Chayra Wellness — Home Wellness Service Jabodetabek",
    description:
      "Nikmati 120 menit Body Massage + Hot Stone + Face Acupressure langsung di rumah Anda. Tanpa macet & tanpa keluar rumah.",
    url: "https://chayrawellness.com",
    siteName: "Chayra Wellness",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Chayra Wellness Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chayra Wellness — Home Wellness Service",
    description:
      "Nikmati 120 menit Body Massage + Hot Stone + Face Acupressure langsung di rumah Anda.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Chayra Wellness",
    image: "https://chayrawellness.com/logo.jpeg",
    url: "https://chayrawellness.com",
    telephone: "+628211559924",
    priceRange: "Rp 229.000",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Jabodetabek",
      addressCountry: "ID",
    },
    areaServed: [
      { "@type": "City", name: "Jakarta" },
      { "@type": "City", name: "Bogor" },
      { "@type": "City", name: "Depok" },
      { "@type": "City", name: "Tangerang" },
      { "@type": "City", name: "Bekasi" },
    ],
    description:
      "Home wellness service profesional dengan paket 120 menit Body Massage + Hot Stone + Face Acupressure langsung ke rumah Anda.",
    creator: {
      "@type": "Organization",
      name: "Kalana Labs",
      url: "https://kalanalabs.com",
    },
  };

  return (
    <html
      lang="id"
      className={`${serifFont.variable} ${sansFont.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#FAF6F0] text-[#2C2420] selection:bg-[#8C6F58] selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

