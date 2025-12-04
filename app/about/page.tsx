"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* White Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Portfolio
            </Link>
            <div className="flex gap-6">
              <button
                onClick={() => document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                About Me
              </button>
              <button
                onClick={() => document.getElementById('contact-me')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Contact Me
              </button>
              <Link href="/studios">
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Studios
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Black About Me Section */}
      <section id="about-me" className="bg-black text-white py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">About Me</h1>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I'm Mehtaz, a builder at heart with a background in history, a mind for strategy, and a drive to turn ideas into reality. My path hasn't been linear, and that's exactly what fuels my work. I moved from the humanities into design, development, and entrepreneurship not by chance, but by choice and by building.
            </p>
            <p>
              Over the last few years, I've launched businesses, worked with clients across the globe, and taught myself the technical skills needed to bring ambitious concepts to life. I've learned that real mastery comes from doing, experimenting, and creating not waiting for permission.
            </p>
            <p>
              Today, I'm looking to bring that same curiosity, versatility, and hands-on problem-solving to a team that values forward thinking. I thrive in environments where learning is constant, solutions are crafted thoughtfully, and impact matters. If you're building for the future, I'd love to be part of it.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="bg-white text-black py-20 px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">My Resume</h2>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-teal-600">EDUCATION</h3>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold">Bachelor of Arts (History) and Minor in Entrepreneurship</h4>
                <span className="text-gray-600">Aug 2021 – May 2025</span>
              </div>
              <p className="text-gray-600 mb-3">Nanyang Technological University, Singapore</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Relevant Coursework: Business History, Marketing in the 21st century, Venturing into Entrepreneurship and Management decision tools</li>
              </ul>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-teal-600">WORK EXPERIENCE</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Noverse Inc., Founder</h4>
                  <span className="text-gray-600">March 2024 – Present</span>
                </div>
                <p className="text-gray-600 mb-3">
                  <a href="https://msnovo.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 transition-colors">
                    msnovo.com
                  </a>
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Led planning, product design, and overall direction of an AI-powered web application helping students reduce academic workload.</li>
                  <li>Built the full frontend of the platform using modern JavaScript-first tooling and best UX practices.</li>
                  <li>Developed high-quality prompts and system instructions to optimize AI performance and user experience.</li>
                  <li>Conducted outreach to 100+ prospective clients and secured partnerships with MOE schools and tuition centers to pilot and run the solution.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Research Intern</h4>
                  <span className="text-gray-600">Jun 2024 – Oct 2024</span>
                </div>
                <p className="text-gray-600 mb-3">Nanyang Technological University</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Conducted in-depth research on the latest scientific findings regarding climate change and its far-reaching consequences on global ecosystems, economies, and societies.</li>
                  <li>Analysed market trends, consumer behavior, and economic indicators to forecast the financial performance and potential growth opportunities within the established ASEAN and EU markets.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Research Intern</h4>
                  <span className="text-gray-600">May 2023 – Jul 2023</span>
                </div>
                <p className="text-gray-600 mb-3">Ministry of Education</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Curated hundreds of relevant resources by meticulously analysing their alignment with curricular and assessment objectives</li>
                  <li>Organized the repository using an effective tagging system and insightful descriptions, ensuring smooth navigation and efficient search for teachers.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Partnership & Coordination Intern</h4>
                  <span className="text-gray-600">May 2022 – Jul 2022</span>
                </div>
                <p className="text-gray-600 mb-3">M.M. Ispahani Limited</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Assisted in preparing technical, narrative, and financial reports, managed data collection, and compiled monthly progress reports to track project impact.</li>
                  <li>Supported accurate data entry and bank reconciliation for the Accounts and Finance department, contributing to financial transparency and accountability.</li>
                  <li>Verified data accuracy and integrity through translation, proofreading, and documentation, ensuring robust project monitoring and evaluation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Co-Curricular Activities */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-teal-600">CO-CURRICULAR ACTIVITIES</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Varsity Sports Association, Exco (Head of well-being)</h4>
                  <span className="text-gray-600">Aug 2024 – April 2025</span>
                </div>
                <ul className="list-disc list-inside text-gray-700">
                  <li>In-charge of the well-being of 250 Varsity athletes</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">NTU Women's Football Team, Athlete</h4>
                  <span className="text-gray-600">Aug 2023 – July 2025</span>
                </div>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Currently playing for NTU's Women's team and played a crucial role in the victory during Singapore National University Games.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">SOH Club, Member</h4>
                  <span className="text-gray-600">Aug 2021 - April 2022</span>
                </div>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Worked with fellow members to bring events to life for the School of Humanities.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills & Interests */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-teal-600">SKILLS & INTERESTS</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Languages:</h4>
                <p className="text-gray-700">Proficient in English, Proficient in Bengali, Basic in Arabic</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Vibe coding</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Excel</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">PowerPoint</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Certified for marketing</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Content Curation</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Research Skills</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Report Writing</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Billing Process</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Bank Reconciliation</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Documentation</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Canva</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Framer website building</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact-me" className="bg-black text-white py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
          <div className="flex flex-col items-center gap-8">
            <p className="text-lg text-center max-w-2xl">
              Let's connect! Feel free to reach out through any of these platforms.
            </p>

            {/* Social Icons */}
            <div className="flex gap-8">
              {/* GitHub */}
              <a
                href="https://github.com/Grinchypoop"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="w-8 h-8 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mehtaz-haque-/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="w-8 h-8 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </a>

              {/* Gmail */}
              <a
                href="mailto:mehtazhaque02@gmail.com"
                className="group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="w-8 h-8 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                </div>
              </a>
            </div>

            {/* Email */}
            <div className="text-center">
              <p className="text-gray-400 mb-2">Email me at:</p>
              <a
                href="mailto:mehtazhaque02@gmail.com"
                className="text-teal-500 hover:text-teal-400 text-xl transition-colors"
              >
                mehtazhaque02@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
