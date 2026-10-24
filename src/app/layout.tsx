import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PartnerTracker from "@/components/PartnerTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BarberPlay - Software de Gestión y Turnero Smart TV para Barberías",
  description: "Digitaliza tu barbería con BarberPlay: control de sillas y barberos, liquidación de comisiones, turnero para Smart TV y citas 24/7.",
  metadataBase: new URL("https://barber.appzplay.online"),
  openGraph: {
    title: "BarberPlay - Sistema Inteligente para Barberías por Appzplay",
    description: "Software SaaS exclusivo para barberías: turnero en tiempo real para Smart TV, control de sillas, liquidación de comisiones y citas.",
    url: "https://barber.appzplay.online",
    siteName: "BarberPlay por Appzplay",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PartnerTracker />
        {children}
      </body>
    </html>
  );
}
