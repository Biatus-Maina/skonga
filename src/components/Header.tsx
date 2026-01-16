"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Academics", href: "/academics" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Admissions", href: "/#admissions" },
  { name: "FAQ", href: "/#faq" },
  { name: "Student Center", href: "/student-center" },
];

function IconMenu() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h18" />
      <path d="M3 6h18" />
      <path d="M3 18h18" />
    </svg>
  );
}

function IconX() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
        <div className="flex items-center gap-3 mr-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center flex-shrink-0">
              <Image
                src="/media/logo.png"
                alt="Yashica Training College Logo"
                width={64}
                height={64}
                className="h-full w-auto"
                priority
              />
            </div>
            <div className="hidden sm:block min-w-max">
              <p className="text-base font-semibold whitespace-nowrap">
                Yashica Training College
              </p>
            </div>
            <div className="block sm:hidden">
              <p className="text-sm font-semibold whitespace-nowrap">
                Yashica College
              </p>
            </div>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-4 md:flex lg:gap-5 xl:gap-6 justify-center flex-1"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-[#852991] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991] whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 sm:flex ml-6 lg:ml-8 xl:ml-12">
            <Link
              href="/#admissions"
              className="rounded-full bg-[#852991] px-3 py-2 text-sm font-semibold text-white shadow-md shadow-[#d6c7df] transition hover:bg-[#852991]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991] whitespace-nowrap"
            >
              Enroll Today
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 transition hover:border-[#d6c7df] hover:bg-[#d6c7df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991] whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#852991] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <IconX /> : <IconMenu />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-700 transition hover:text-[#852991] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#852991]"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-2 border-t border-slate-200">
                <Link
                  href="/#admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full bg-[#852991] px-4 py-3 text-sm font-semibold text-white text-center shadow-md shadow-[#d6c7df] transition hover:bg-[#852991]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
                >
                  Enroll Today
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 text-center transition hover:border-[#d6c7df] hover:bg-[#d6c7df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
