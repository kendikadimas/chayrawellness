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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Chayra Wellness — Your Wellness Moment, Delivered to Your Home",
  description: "Nikmati 120 menit pengalaman wellness dalam kenyamanan rumah Anda. Body Massage, Hot Stone, & Face Acupressure tanpa macet dan tanpa antre.",
  keywords: ["home wellness", "spa panggilan", "body massage", "hot stone", "face acupressure", "chayra wellness"],
  openGraph: {
    title: "Chayra Wellness — Home Wellness Service",
    description: "Nikmati 120 menit pengalaman wellness dalam kenyamanan rumah Anda.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${serifFont.variable} ${sansFont.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans bg-[#FAF6F0] text-[#2C2420] selection:bg-[#8C6F58] selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

