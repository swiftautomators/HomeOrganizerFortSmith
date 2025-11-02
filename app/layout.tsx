import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Professional Organizer Fort Smith | Home & Office Organization Services",
  description: "Expert professional organizing services in Fort Smith, Arkansas. Transform your home and office with our customized organization solutions. Free consultation available.",
  keywords: ["professional organizer", "Fort Smith", "Arkansas", "home organization", "office organization", "decluttering", "organizing services"],
  authors: [{ name: "Professional Organizer Fort Smith" }],
  openGraph: {
    title: "Professional Organizer Fort Smith",
    description: "Expert home and office organizing services in Fort Smith, Arkansas",
    url: "https://ProfessionalOrganizerFortSmith.com",
    siteName: "Professional Organizer Fort Smith",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Organizer Fort Smith",
    description: "Expert home and office organizing services in Fort Smith, Arkansas",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
