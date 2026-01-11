"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Hands-on vocational training",
    description:
      "Practical skills in hairdressing, beauty therapy, plumbing, and electrical installation prepare you for immediate employment or entrepreneurship.",
    imageSrc: "/media/carousel_1.jpg",
    imageAlt: "Students learning practical vocational skills",
  },
  {
    title: "Flexible learning schedules",
    description:
      "Choose from Morning, Afternoon, or Evening shifts to fit your schedule. Quality education that adapts to your life.",
    imageSrc: "/media/carousel_4.jpg",
    imageAlt: "Flexible learning environment for working students",
  },
  {
    title: "Future-ready skills and AI",
    description:
      "Digital literacy, critical thinking, and AI applications integrated into technical trades for modern workforce readiness.",
    imageSrc: "/media/academics_carousel_1.jpeg",
    imageAlt: "Students learning technology and AI applications",
  },
];

const AUTO_PLAY_MS = 7000;

export default function HighlightCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_MS);

    return () => {
      if (typeof window !== "undefined") {
        window.clearInterval(id);
      }
    };
  }, []);

  const goTo = (to: number) => {
    setIndex((to + slides.length) % slides.length);
  };

  const current = slides[index];

  return (
    <section
      aria-label="Yashica Training College highlights"
      className="relative w-full overflow-hidden"
    >
      <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full group">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={current.imageSrc}
            alt={current.imageAlt}
            width={1920}
            height={1080}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/45 to-black/35 transition-opacity duration-500 group-hover:opacity-40" />

        {/* Content Overlay */}
        <div className="relative h-full flex items-center justify-center px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            {/* Badge */}
            <div className="inline-block opacity-80 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-0 group-hover:-translate-y-1">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white/95 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                Highlight {index + 1} of {slides.length}
              </p>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white opacity-90 group-hover:opacity-100 transition-all duration-500 delay-150 transform translate-y-0 group-hover:-translate-y-1 drop-shadow-2xl">
              {current.title}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-white/85 group-hover:text-white/100 max-w-2xl mx-auto leading-relaxed opacity-90 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-0 group-hover:-translate-y-1 drop-shadow-lg">
              {current.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 opacity-90 group-hover:opacity-100 transition-all duration-500 delay-300 transform translate-y-0 group-hover:-translate-y-1 space-y-4">
              <Link
                href="/academics"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#852991] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-xl shadow-[#852991]/30 transition-all duration-300 hover:bg-[#9a4ba8] hover:shadow-2xl hover:shadow-[#852991]/40 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                View Available Courses
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>

              {/* Scholarship Button */}
              <div>
                <Link
                  href="/scholarships"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-yellow-500/40 glitter-effect transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/60 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 animate-pulse"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                  <span className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-sparkle"></span>
                  <span
                    className="absolute top-2 right-3 w-1 h-1 bg-white rounded-full animate-sparkle"
                    style={{ animationDelay: "0.5s" }}
                  ></span>
                  <span
                    className="absolute bottom-2 left-4 w-1 h-1 bg-white rounded-full animate-sparkle"
                    style={{ animationDelay: "1s" }}
                  ></span>
                  <span className="relative flex items-center gap-2">
                    ✨ Full Scholarships 2026
                    <span
                      className="inline-block animate-bounce text-lg"
                      style={{ animationDelay: "0.2s" }}
                    >
                      🎓
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-10">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-white shadow-lg"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Show highlight: ${slide.title}`}
              aria-pressed={i === index}
            />
          ))}
        </div>

        {/* Previous/Next Buttons */}
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm text-white shadow-lg transition-all hover:bg-black/50 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white z-10"
          aria-label="Previous highlight image"
        >
          <span className="text-2xl">‹</span>
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm text-white shadow-lg transition-all hover:bg-black/50 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white z-10"
          aria-label="Next highlight image"
        >
          <span className="text-2xl">›</span>
        </button>
      </div>
    </section>
  );
}
