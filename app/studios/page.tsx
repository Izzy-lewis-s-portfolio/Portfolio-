"use client";

import Link from "next/link";
import { useState } from "react";

export default function StudiosPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* White Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Portfolio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              <Link href="/about">
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  About Me
                </button>
              </Link>
              <Link href="/about#contact-me">
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Contact Me
                </button>
              </Link>
              <Link href="/studios">
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Studios
                </button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium transition-colors">
                  About Me
                </button>
              </Link>
              <Link href="/about#contact-me" onClick={() => setMobileMenuOpen(false)}>
                <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium transition-colors">
                  Contact Me
                </button>
              </Link>
              <Link href="/studios" onClick={() => setMobileMenuOpen(false)}>
                <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium transition-colors">
                  Studios
                </button>
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Coming Soon Section */}
      <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-white mb-8 sm:mb-12">
            Coming Soon
          </h1>
          {/* From Uiverse.io by alexruix */}
          <div className="flex justify-center">
            <div className="loader">
              <span className="loader-text">loading</span>
              <span className="load"></span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .loader {
          width: 80px;
          height: 50px;
          position: relative;
        }

        .loader-text {
          position: absolute;
          top: 0;
          padding: 0;
          margin: 0;
          color: #5eead4;
          animation: text_713 3.5s ease both infinite;
          font-size: .8rem;
          letter-spacing: 1px;
        }

        .load {
          background-color: #14b8a6;
          border-radius: 50px;
          display: block;
          height: 16px;
          width: 16px;
          bottom: 0;
          position: absolute;
          transform: translateX(64px);
          animation: loading_713 3.5s ease both infinite;
        }

        .load::before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          background-color: #5eead4;
          border-radius: inherit;
          animation: loading2_713 3.5s ease both infinite;
        }

        @keyframes text_713 {
          0% {
            letter-spacing: 1px;
            transform: translateX(0px);
          }

          40% {
            letter-spacing: 2px;
            transform: translateX(26px);
          }

          80% {
            letter-spacing: 1px;
            transform: translateX(32px);
          }

          90% {
            letter-spacing: 2px;
            transform: translateX(0px);
          }

          100% {
            letter-spacing: 1px;
            transform: translateX(0px);
          }
        }

        @keyframes loading_713 {
          0% {
            width: 16px;
            transform: translateX(0px);
          }

          40% {
            width: 100%;
            transform: translateX(0px);
          }

          80% {
            width: 16px;
            transform: translateX(64px);
          }

          90% {
            width: 100%;
            transform: translateX(0px);
          }

          100% {
            width: 16px;
            transform: translateX(0px);
          }
        }

        @keyframes loading2_713 {
          0% {
            transform: translateX(0px);
            width: 16px;
          }

          40% {
            transform: translateX(0%);
            width: 80%;
          }

          80% {
            width: 100%;
            transform: translateX(0px);
          }

          90% {
            width: 80%;
            transform: translateX(15px);
          }

          100% {
            transform: translateX(0px);
            width: 16px;
          }
        }
      `}</style>
    </div>
  );
}
