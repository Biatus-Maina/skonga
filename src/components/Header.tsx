"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/#admissions" },
  { name: "Calendar", href: "/#calendar" },
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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6c7df] bg-white text-[#852991] shadow-sm">
              <span className="sr-only">Yashica Training College</span>
              <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#852991] to-[#d6c7df]">
                <span className="absolute inset-[5px] rounded-full border border-white/60" />
                <span className="relative text-xs font-bold tracking-[0.18em]">
                  Y
                </span>
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-base font-semibold">Yashica Training College</p>
              <p className="text-sm text-slate-500">
                Transforming lives through vocational skills.
              </p>
            </div>
            <div className="block sm:hidden">
              <p className="text-sm font-semibold">Yashica</p>
            </div>
          </Link>
        </div>
        <nav aria-label="Primary" className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-[#852991] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex md:ml-4">
          <Link
            href="/#admissions"
            className="rounded-full bg-[#852991] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#d6c7df] transition hover:bg-[#852991]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
          >
            Enroll Today
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-[#d6c7df] hover:bg-[#d6c7df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
          >
            Contact Us
          </Link>
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
          <nav className="mx-auto max-w-6xl px-6 py-4">
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

