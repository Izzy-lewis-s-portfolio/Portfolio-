"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hi, my name is Mehtaz. Welcome to my portfolio!";
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
        setShowButton(true);
      }
    }, 80);

    return () => clearInterval(typewriterInterval);
  }, []);

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black text-center max-w-3xl"
        style={{ fontFamily: '"Courier New", Courier, monospace' }}
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </h1>

      <Link href="/about" className="mt-12">
        <button
          className={`px-8 py-3 bg-black text-white text-lg rounded-full transition-all duration-500 hover:bg-gray-800 ${
            showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          style={{ fontFamily: '"Courier New", Courier, monospace' }}
        >
          Start
        </button>
      </Link>
    </section>
  );
}
