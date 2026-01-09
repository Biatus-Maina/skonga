"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    imageSrc: "/media/carousel_1.jpg",
    imageAlt: "Vocational training at Yashica Training College",
  },
  {
    imageSrc: "/media/carousel_2.jpg",
    imageAlt: "Students learning practical skills",
  },
  {
    imageSrc: "/media/carousel_3.jpg",
    imageAlt: "Modern training facilities",
  },
  {
    imageSrc: "/media/class_image_1.jpg",
    imageAlt: "Hands-on learning experience",
  },
];

const AUTO_PLAY_MS = 5000;

export default function AcademicsCarousel() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

      const id = window.setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 500);
    }, AUTO_PLAY_MS);

    return () => {
      if (typeof window !== "undefined") {
        window.clearInterval(id);
      }
    };
  }, []);

  const goTo = (to: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((to + slides.length) % slides.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 500);
  };

  const current = slides[index];

  return (
    <section
      aria-label="Academics carousel"
      className="relative w-full overflow-hidden"
    >
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
        {/* Image with zoom-out effect */}
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            isTransitioning
              ? "scale-110 opacity-0"
              : "scale-100 opacity-100"
          }`}
        >
          <Image
            src={current.imageSrc}
            alt={current.imageAlt}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-10">
          {slides.map((slide, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-white shadow-lg"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-pressed={i === index}
            />
          ))}
        </div>

        {/* Previous/Next Buttons */}
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm text-white shadow-lg transition-all hover:bg-black/50 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white z-10"
          aria-label="Previous slide"
        >
          <span className="text-2xl">‹</span>
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm text-white shadow-lg transition-all hover:bg-black/50 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white z-10"
          aria-label="Next slide"
        >
          <span className="text-2xl">›</span>
        </button>
      </div>
    </section>
  );
}
