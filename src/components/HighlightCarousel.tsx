 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Personalized pathways",
    description:
      "From STEM labs to studio arts, students design an academic path that matches their strengths.",
    imageSrc: "/media/carousel-1.svg",
    imageAlt: "Students collaborating around laptops in a bright classroom",
  },
  {
    title: "Safe, caring community",
    description:
      "Small advisory groups and attentive staff ensure every child is known, seen, and supported.",
    imageSrc: "/media/carousel-2.svg",
    imageAlt: "Friends walking together across a sunny school courtyard",
  },
  {
    title: "Beyond-the-classroom learning",
    description:
      "Service projects, competitions, and travel programs connect classroom learning to the wider world.",
    imageSrc: "/media/carousel-3.svg",
    imageAlt: "Student presenting in a modern science lab environment",
  },
];

const AUTO_PLAY_MS = 7000;

export default function HighlightCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(id);
  }, []);

  const goTo = (to: number) => {
    setIndex((to + slides.length) % slides.length);
  };

  const current = slides[index];

  return (
    <section
      aria-label="Skonga highlights"
      className="mt-2 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm backdrop-blur"
    >
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] sm:items-stretch">
        <div className="flex flex-col justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Highlight {index + 1} of {slides.length}
            </p>
            <p className="mt-1 text-base font-semibold text-slate-900">
              {current.title}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {current.description}
            </p>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-blue-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Show highlight: ${slide.title}`}
                aria-pressed={i === index}
              />
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
          <Image
            src={current.imageSrc}
            alt={current.imageAlt}
            width={640}
            height={360}
            className="h-40 w-full object-cover sm:h-full"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />
          <div className="pointer-events-none absolute inset-0 border border-black/5" />
          <div className="absolute right-2 top-2 flex items-center gap-1">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/60 bg-black/35 text-white shadow-sm backdrop-blur-sm transition hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Previous highlight image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/60 bg-black/35 text-white shadow-sm backdrop-blur-sm transition hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Next highlight image"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


