"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hi, my name is Mehtaz. Welcome to my portfolio.";
  const [showImage, setShowImage] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 80);

    // Start image fade-in after a brief delay
    setTimeout(() => setShowImage(true), 500);

    // Show button after text and image animations complete
    // Text: 80ms * 49 chars = ~4000ms, Image: 500ms + 2000ms = 2500ms
    // Show button after everything is done: ~4500ms
    setTimeout(() => setShowButton(true), 4500);

    return () => clearInterval(typewriterInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-black flex flex-col md:flex-row overflow-hidden">
      {/* Text section - Full width on mobile, Left half on desktop */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col items-start justify-center px-6 sm:px-8 lg:px-20 py-12 md:py-0 overflow-hidden gap-6 md:gap-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white max-w-full break-words">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>

        <Link href="/about">
          <button
            className={`Btn-Container transition-opacity duration-1000 ${
              showButton ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <span className="text">let's go!</span>
            <span className="icon-Container">
              <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
              </svg>
            </span>
          </button>
        </Link>
      </div>

      {/* Image section - Hidden on mobile, Right on desktop */}
      <div className="hidden md:flex md:w-1/2 md:h-screen items-center justify-center overflow-hidden">
        <img
          src="/logo.svg"
          alt="Logo"
          className={`transition-all duration-[2000ms] ease-out ${
            showImage ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
          }`}
          style={{ width: '400%', height: '400%', objectFit: 'contain' }}
        />
      </div>
    </section>
  );
}
