"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HighlightCarousel from "@/components/HighlightCarousel";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "#admissions" },
  { name: "Calendar", href: "#calendar" },
  { name: "FAQ", href: "#faq" },
  { name: "Student Center", href: "/student-center" },
];

const stats = [
  { label: "Flexible learning", value: "3 shifts" },
  { label: "Course duration", value: "6 months" },
  { label: "Vocational programs", value: "7+" },
  { label: "Target age group", value: "18–35" },
];

const departments = [
  {
    title: "Vocational Trades",
    description:
      "Hairdressing, Beauty Therapy (Nail Technology & Beauty Care), Plumbing, and Electrical Installation for practical, market-ready skills.",
  },
  {
    title: "Creative Arts",
    description:
      "Music programs including Vocals, Piano, and DJing to nurture artistic talent and creative expression.",
  },
  {
    title: "Future-Ready Skills",
    description:
      "Digital Literacy, Critical Thinking, and Artificial Intelligence (AI) applications integrated into technical trades.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Morning, Afternoon, and Evening shifts available to accommodate different student needs and commitments.",
  },
];

const admissionsSteps = [
  {
    title: "1. Contact Us",
    detail: "Call or WhatsApp to inquire about courses, schedules, and scholarship opportunities.",
  },
  {
    title: "2. Choose Program",
    detail:
      "Select from vocational trades, creative arts, or future-ready skills programs that match your goals.",
  },
  {
    title: "3. Enroll",
    detail:
      "Complete enrollment with flexible payment options. Total course cost: KES 72,000 for 6 months.",
  },
  {
    title: "4. Start Learning",
    detail:
      "Begin your journey with hands-on training, mentorship, and support toward employment or entrepreneurship.",
  },
];

const faqs = [
  {
    question: "What courses are offered at Yashica Training College?",
    answer:
      "We offer vocational trades (Hairdressing, Beauty Therapy, Plumbing, Electrical Installation), Creative Arts (Music - Vocals, Piano, DJing), and Future-Ready Skills (Digital Literacy, Critical Thinking, AI Applications). All programs are available in Morning, Afternoon, or Evening shifts.",
  },
  {
    question: "How much does a course cost?",
    answer:
      "The total course cost for a 6-month program is KES 72,000, which includes tuition (KES 48,000), learning materials (KES 12,000), and administration & support (KES 12,000). We also offer scholarships for eligible students from underprivileged backgrounds.",
  },
  {
    question: "What is the age requirement for enrollment?",
    answer:
      "Our programs are designed for youth aged 18–35 from low-income families in Gikambura, Kikuyu, Kawangware, and surrounding areas in Kiambu County.",
  },
  {
    question: "How long are the courses?",
    answer:
      "All our vocational programs are 6 months in duration, providing intensive, hands-on training that prepares students for immediate employment or entrepreneurship.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Yes, we actively seek to provide scholarships that cover tuition, learning materials, and essential supplies to remove barriers to education for youth from low-income families. Contact us to learn more about eligibility and the application process.",
  },
  {
    question: "What support is provided after graduation?",
    answer:
      "Beyond technical training, we provide monitoring, mentorship, and linkages to employment or entrepreneurial opportunities. Our post-graduation support ensures graduates have pathways to success in their chosen fields.",
  },
];

const gallery = [
  {
    src: "/media/orientation_day.jpg",
    alt: "Orientation Day Celebration",
  },
  {
    src: "/media/sports_day_6.jpg",
    alt: "Students enjoying games sessions at the student center",
  },
  {
    src: "/media/class_image_1.jpg",
    alt: "Classrooms with students enjoying lessons from their instructors",
  },
  {
    src: "/media/discussion_forum.jpg",
    alt: "Discussion session with students and instructors",
  },
];

const downloads = [
  {
    name: "2025–26 Enrollment Packet",
    href: "/forms/registration.pdf",
    description: "Course information, requirements, and scholarship application details.",
  },
  {
    name: "Student Handbook & Policies",
    href: "/forms/policies.pdf",
    description: "Attendance, conduct, and program expectations.",
  },
  {
    name: "Course Application Form",
    href: "/forms/health-clearance.pdf",
    description: "Application forms and enrollment guidelines.",
  },
];

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "LinkedIn", href: "#" },
];

const values = [
  "Affordable, quality education accessible to all",
  "Flexible learning options for diverse schedules",
  "Inclusivity, fairness, and community-backed support",
  "Transforming lives through practical skills and self-reliance",
];

function IconArrowRight() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-1"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-2"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#852991]"
        aria-expanded={isOpen}
      >
        <h3 className="text-base font-semibold text-slate-900 pr-4">{question}</h3>
        <svg
          className={`w-5 h-5 text-[#852991] flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-sm text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
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
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="#admissions"
              className="rounded-full bg-[#852991] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#d6c7df] transition hover:bg-[#852991]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
            >
              Enroll Today
            </Link>
            <Link
              href="#contact"
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
                    href="#admissions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-full bg-[#852991] px-4 py-3 text-sm font-semibold text-white text-center shadow-md shadow-[#d6c7df] transition hover:bg-[#852991]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
                  >
                    Enroll Today
                  </Link>
                  <Link
                    href="#contact"
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

      <section className="w-full bg-gradient-to-r from-[#852991] via-[#9a4ba8] to-[#852991] mt-1 pb-4 sm:pb-5 pt-4 sm:pt-5">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-lg sm:text-xl font-semibold text-white tracking-wide">
            Vocational Excellence • Affordable Education • Community-Focused
          </h2>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-8 sm:pt-10">
        <div className="mb-8 sm:mb-10">
          <HighlightCarousel />
        </div>
        <section
          id="home"
          className="grid gap-10 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60 lg:grid-cols-[1.1fr,0.9fr]"
        >
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 text-center sm:text-left sm:text-4xl lg:text-5xl leading-tight">
              <span className="block sm:inline">Transforming lives</span>{" "}
              <span className="block sm:inline bg-gradient-to-r from-[#852991] to-[#a855b8] bg-clip-text text-transparent">
                through practical skills
              </span>{" "}
              <span className="block sm:inline">and self-reliance.</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Yashica Training College is a leading center of excellence in vocational skills development, 
              equipping individuals aged 18–35 with critical skills including AI, hairdressing, beauty therapy, 
              plumbing, electrical installation, and music fostering self-reliance and community transformation.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#admissions"
                className="inline-flex items-center justify-center rounded-full bg-[#852991] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#d6c7df] transition hover:bg-[#852991]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
              >
                Enroll Now
                <IconArrowRight />
              </Link>
              <Link
                href="/academics"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#d6c7df] hover:bg-[#d6c7df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
              >
                View Courses
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 shadow-sm"
                >
                  <p className="text-lg font-semibold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#852991] via-[#a855b8] to-[#d6c7df] shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_35%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.2),transparent_35%)]" />
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative h-full">
              <Image
                src="/media/hero_training.jpg"
                alt="Students at Yashica Training College"
                width={1200}
                height={900}
                className="h-full w-full object-cover opacity-90"
                priority
              />
            </div>
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/30 bg-white/80 p-4 text-slate-900 shadow-lg backdrop-blur">
              <p className="text-sm font-semibold text-[#852991]">
                Practical, hands-on training for real-world success
              </p>
              <p className="text-sm text-slate-700">
                Modern workshops, flexible schedules, and mentorship support 
                designed to transform lives and communities.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="mt-20 grid gap-10 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#852991]">
              About Yashica
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Mission-driven, community-focused, transforming lives.
            </h2>
            <p className="text-base text-slate-600">
              Yashica Training College aims to be a leading center of excellence in vocational skills development. 
              Our mission is to transform lives and communities by equipping individuals with critical skills, 
              including Artificial Intelligence (AI), to foster self-reliance. We provide affordable, quality education 
              with flexible learning options, prioritizing inclusivity, fairness, and community-backed support.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
                >
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#d6c7df] text-[#852991]">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-slate-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5 rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/50">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-[#852991]">Leadership</p>
              <p className="text-base text-slate-700">
                Director: Lilian Diana Wanzare
              </p>
              <p className="text-sm text-slate-600">
                Director Wanzare leads Yashica Training College with a commitment to 
                affordable, quality vocational education and community transformation through 
                practical skills development.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <p className="text-lg font-semibold">Location</p>
                <p className="text-sm text-slate-600">
                  Rubis Petrol Station, 2nd Floor, Gikambura, Kikuyu, Kiambu County. 
                  Easily accessible for students from surrounding areas.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <p className="text-lg font-semibold">Target Audience</p>
                <p className="text-sm text-slate-600">
                  Youth aged 18–35 from low-income families in Gikambura, Kikuyu, 
                  Kawangware, and surrounding communities.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-gradient-to-r from-[#d6c7df] to-[#e8d9f0] p-4">
              <p className="text-sm font-semibold text-[#852991]">Holistic Support</p>
              <p className="text-sm text-slate-700">
                Beyond technical training, we provide monitoring, mentorship, and linkages 
                to employment or entrepreneurial opportunities post-graduation.
              </p>
            </div>
          </div>
        </section>

        <section id="academics" className="mt-20 space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#852991]">
                Academics
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Departments and learning pathways
              </h2>
            </div>
            <Link
              href="/academics"
              className="inline-flex items-center text-sm font-semibold text-[#852991] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
            >
              Learn More
              <IconArrowRight />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {departments.map((department) => (
              <div
                key={department.title}
                className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {department.title}
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  {department.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="admissions"
          className="mt-20 rounded-3xl bg-gradient-to-r from-[#852991] via-[#9a4ba8] to-[#852991] p-8 text-white shadow-2xl"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                Admissions
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Affordable enrollment with flexible payment options.
              </h2>
              <p className="text-base text-white/90">
                Our transparent pricing structure makes quality vocational education accessible. 
                Scholarships available for eligible students from underprivileged backgrounds.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-lg shadow-black/20 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <span className="text-[#852991]">Contact Us</span>
                  <span className="text-[#852991] ml-1">
                    <IconArrowRight />
                  </span>
                </Link>
                <a
                  href="/forms/registration.pdf"
                  className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  download
                >
                  Download Forms
                  <IconDownload />
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {admissionsSteps.map((step) => (
                <div
                  key={step.title}
                  className="h-full rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur"
                >
                  <p className="text-base font-semibold">{step.title}</p>
                  <p className="mt-2 text-sm text-white/90">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="calendar" className="mt-20 grid gap-8 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#852991]">
              Course Pricing
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Transparent and affordable fees
            </h2>
            <p className="text-base text-slate-600">
              Our 6-month programs are designed to be accessible with clear, 
              upfront pricing. Financial aid and scholarships available for eligible students.
            </p>
            <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                Flexible Scheduling
              </p>
              <p className="text-sm text-slate-600">
                Choose from Morning, Afternoon, or Evening shifts to fit your schedule 
                and commitments.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Tuition (per month)
                  </p>
                  <p className="text-xs text-slate-600">KES 8,000/month</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#852991]">
                  KES 48,000
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Learning Materials
                  </p>
                  <p className="text-xs text-slate-600">KES 2,000/month</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#852991]">
                  KES 12,000
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Administration & Support
                  </p>
                  <p className="text-xs text-slate-600">KES 2,000/month</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#852991]">
                  KES 12,000
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#d6c7df] to-[#e8d9f0] px-4 py-3 border border-[#d6c7df]">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Total Course Cost (6 months)
                  </p>
                  <p className="text-xs text-slate-600">All inclusive</p>
                </div>
                <span className="rounded-full bg-[#852991] px-3 py-1 text-xs font-semibold text-white">
                  KES 72,000
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mt-20 space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#852991]">
                Frequently Asked Questions
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Common questions about our programs
              </h2>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="text-sm font-semibold text-[#852991] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991] cursor-pointer"
            >
              Still have questions?
            </a>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#852991]">
              Student Support & Scholarships
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Committed to underprivileged youth
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-gradient-to-r from-[#d6c7df] to-[#e8d9f0] px-4 py-3 border border-[#d6c7df]">
                <p className="text-sm font-semibold text-[#852991]">Financial Aid</p>
                <p className="text-sm text-slate-700 mt-1">
                  We actively seek to provide scholarships that cover tuition, learning materials, 
                  and essential supplies to remove barriers to education for youth from low-income families.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-sm font-semibold text-slate-900">Target Communities</p>
                <p className="text-sm text-slate-600 mt-1">
                  Gikambura, Kikuyu, Kawangware, and surrounding areas in Kiambu County.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-sm font-semibold text-slate-900">Post-Graduation Support</p>
                <p className="text-sm text-slate-600 mt-1">
                  Monitoring, mentorship, and linkages to employment or entrepreneurial opportunities 
                  ensure graduates have pathways to success.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#852991]">
              Special Offer
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Limited Time Promotion
            </h2>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/media/promotion-intake.svg"
                alt="Intake is ongoing - 50% off tuition fees waiver"
                width={900}
                height={500}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-slate-600">
              Don&apos;t miss this opportunity! Contact us today to learn more about 
              eligibility and how to apply for the tuition fee waiver.
            </p>
          </div>
        </section>

        <section className="mt-20 space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#852991]">
                Campus Life
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Gallery and highlights
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <div
                key={item.src}
                className="group relative overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                  {item.alt}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-6">
            <a
              href="https://flic.kr/ps/47jr8g"
              className="inline-flex items-center rounded-full bg-[#852991] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#d6c7df] transition hover:bg-[#852991]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
            >
              View Full Gallery
              <IconArrowRight />
            </a>
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#852991]">
              Downloadable Forms
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready-to-use PDF resources
            </h2>
              <p className="text-base text-slate-600">
                Access enrollment packets, course applications, and student handbooks quickly.
                Files are static, versioned, and production-ready.
              </p>
            <div className="grid gap-3">
              {downloads.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  download
                  className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-600">{item.description}</p>
                  </div>
                  <IconDownload />
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#852991]">
              Contact & Location
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              We’re here to help
            </h2>
            <div className="grid gap-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-8 rounded-full bg-[#d6c7df] text-center text-[#852991]">
                  <span className="inline-block pt-1.5 text-sm">☎</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    General Inquiries
                  </p>
                  <p className="text-sm text-slate-600">
                    Call or WhatsApp: 0705 252 790
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-8 rounded-full bg-[#d6c7df] text-center text-[#852991]">
                  <span className="inline-block pt-1.5 text-sm">👤</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Director
                  </p>
                  <p className="text-sm text-slate-600">
                    Lilian Diana Wanzare • 0722 268484
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-8 rounded-full bg-[#d6c7df] text-center text-[#852991]">
                  <span className="inline-block pt-1.5 text-sm">📍</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Visit us
                  </p>
                  <p className="text-sm text-slate-600">
                    Rubis Petrol Station, 2nd Floor, Gikambura, Kikuyu, Kiambu County
                  </p>
                </div>
              </div>
            </div>
            <iframe
              title="Yashica Training College location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0!2d36.7!3d-1.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zLTEuMiAzNi43!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              className="h-56 w-full rounded-2xl border border-slate-200"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="border-t border-slate-200 bg-white py-10 text-slate-800"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold">Yashica Training College</p>
            <p className="text-sm text-slate-600">
              Transforming lives through vocational skills and self-reliance.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-[#d6c7df] hover:bg-[#d6c7df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
