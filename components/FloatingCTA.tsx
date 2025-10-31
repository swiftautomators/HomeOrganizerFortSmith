"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Link
      href="/contact"
      className={`fixed bottom-6 right-6 z-40 bg-accent hover:bg-accent/90 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-semibold ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Book Free Consultation"
    >
      <Calendar className="w-5 h-5" />
      <span className="hidden sm:inline">Book Free Consultation</span>
      <span className="sm:hidden">Book Now</span>
    </Link>
  );
}
