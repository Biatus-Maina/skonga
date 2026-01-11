"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HighlightCarousel from "@/components/HighlightCarousel";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";
import SlidingGallery from "@/components/SlidingGallery";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "/academics" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Admissions", href: "#admissions" },
  { name: "Calendar", href: "#calendar" },
  { name: "FAQ", href: "#faq" },
  { name: "Student Center", href: "/student-center" },
];

const stats = [
  { label: "Flexible learning", value: "3 shifts" },
  { label: "Course duration", value: "3-9 months" },
  { label: "Vocational programs", value: "10+" },
  { label: "Target age group", value: "18–35" },
];

const departments = [
  {
    title: "Vocational Trades",
    description:
      "Hairdressing, Beauty Therapy (Nail Technology & Beauty Care), Plumbing, Electrical Installation, Baking and Pastry, Barbering, and Dreadlock for practical, market-ready skills.",
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
    detail:
      "Call or WhatsApp to inquire about courses, schedules, and scholarship opportunities.",
  },
  {
    title: "2. Choose Program",
    detail:
      "Select from vocational trades, creative arts, or future-ready skills programs that match your goals.",
  },
  {
    title: "3. Enroll",
    detail:
      "Complete enrollment with flexible payment options. Course costs vary by duration: 3-month programs (Barbering, Dreadlock, Music - DJing, Music - Vocals) and 9-month programs (Hairdressing, Beauty Therapy, Baking and Pastry, Electrical Installation, Plumbing, Music - Piano).",
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
      "We offer vocational trades (Hairdressing, Beauty Therapy, Plumbing, Electrical Installation, Baking and Pastry, Barbering, Dreadlock), Creative Arts (Music - Vocals, Piano, DJing), and Future-Ready Skills (Digital Literacy, Critical Thinking, AI Applications). All programs are available in Morning, Afternoon, or Evening shifts.",
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
      "We offer flexible course durations to suit different learning needs. Our 9-month programs include Hairdressing, Beauty Therapy, Baking and Pastry, Electrical Installation, Plumbing, and Music - Piano. Our 3-month programs include Barbering, Dreadlock, Music - DJing, and Music - Vocals. All programs provide intensive, hands-on training that prepares students for immediate employment or entrepreneurship.",
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
    description:
      "Course information, requirements, and scholarship application details.",
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
        <h3 className="text-base font-semibold text-slate-900 pr-4">
          {question}
        </h3>
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
            <div className="flex h-11 w-11 items-center justify-center">
              <Image
                src="/media/logo.png"
                alt="Yashica Training College Logo"
                width={44}
                height={44}
                className="h-full w-auto"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-base font-semibold">
                Yashica Training College
              </p>
              <p className="text-sm text-slate-500">
                Transforming lives through vocational skills.
              </p>
            </div>
            <div className="block sm:hidden">
              <p className="text-sm font-semibold">Yashica</p>
            </div>
          </div>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 md:flex"
          >
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

      <HighlightCarousel />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-8 sm:pt-10">
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
              Yashica Training College is a leading center of excellence in
              vocational skills development, equipping Young Adults from
              Gikambura, Kikuyu, Kawangware, and surrounding areas in Kiambu
              County with critical skills including AI, hairdressing, beauty
              therapy, plumbing, electrical installation, and music fostering
              self-reliance and community transformation.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

              <Link
                href="/testimonials"
                className="inline-flex items-center justify-center rounded-full border border-[#852991] bg-white px-5 py-3 text-sm font-semibold text-[#852991] transition hover:bg-[#852991] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
              >
                Success Stories
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
                Empowering youth in Gikambura, Kikuyu & Kawangware
              </p>
              <p className="text-sm text-slate-700">
                Modern workshops, flexible schedules, and mentorship support
                creating economic opportunities right here in our communities.
              </p>
            </div>
          </div>
        </section>

        <AnimateOnScroll delay={100}>
          <section
            id="about"
            className="mt-20 grid gap-10 lg:grid-cols-[1fr,1fr]"
          >
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#852991]">
                About Yashica
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Mission-driven, community-focused, transforming lives.
              </h2>
              <p className="text-base text-slate-600">
                Yashica Training College is dedicated to creating lasting impact
                for youth in Gikambura, Kikuyu, Kawangware, and surrounding
                areas in Kiambu County. Our vision is to be a leading center of
                excellence in vocational skills development, transforming lives
                and communities by equipping individuals with critical
                Artificial Intelligence skills to foster self-reliance and
                transform communities. Through affordable, quality education and
                community-focused programs, we&apos;re building pathways to
                self-reliance and economic empowerment right here in our local
                communities.
              </p>

              <p className="text-base text-slate-600">
                <strong>
                  Our vision is to be a leading center of excellence in
                  vocational skills development that transforms lives and
                  communities.
                </strong>
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
                    <p className="text-sm font-medium text-slate-800">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5 rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/50">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-[#852991]">
                  Training Approach
                </p>
                <p className="text-base text-slate-700">
                  Hands-on, practical learning for real-world success
                </p>
                <p className="text-sm text-slate-600">
                  Our curriculum emphasizes 70% practical training and 30%
                  theory, ensuring students gain immediate, applicable skills.
                  With modern workshops, industry-standard equipment, and
                  experienced instructors, we prepare graduates for employment
                  or entrepreneurship from day one.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <p className="text-lg font-semibold">Location</p>
                  <p className="text-sm text-slate-600">
                    Rubis Petrol Station, 2nd Floor, Gikambura, Kikuyu, Kiambu
                    County. Easily accessible for students from surrounding
                    areas.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <p className="text-lg font-semibold">Social Footprint</p>
                  <p className="text-sm text-slate-600">
                    By equipping young adults from Gikambura, Kikuyu, Kawangware
                    and other parts of the nation with essential vocational
                    skills, we are fostering a new generation of professionals
                    and entrepreneurs. Our guiding principle is to catalyze
                    economic growth and significantly reduce unemployment across
                    Kiambu County and the whole nation at large.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-gradient-to-r from-[#d6c7df] to-[#e8d9f0] p-4">
                <p className="text-sm font-semibold text-[#852991]">
                  Local Community Development
                </p>
                <p className="text-sm text-slate-700">
                  Beyond skills training, we&apos;re committed to transforming
                  our local communities through graduate employment placement,
                  entrepreneurship support, and partnerships with local
                  businesses. Our goal is to see our graduates become employers
                  and community leaders in Gikambura, Kikuyu, Kawangware, and
                  beyond.
                </p>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

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

        <AnimateOnScroll delay={150}>
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
                  Our transparent pricing structure makes quality vocational
                  education accessible. Scholarships available for eligible
                  students from underprivileged backgrounds.
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
        </AnimateOnScroll>

        <section
          id="calendar"
          className="mt-20 grid gap-8 lg:grid-cols-[1fr,1fr]"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#852991]">
              Course Pricing
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Transparent and affordable fees
            </h2>
            <p className="text-base text-slate-600">
              Our 6-month programs are designed to be accessible with clear,
              upfront pricing. Financial aid and scholarships available for
              eligible students.
            </p>
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
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#d6c7df] to-[#e8d9f0] px-4 py-3 border border-[#d6c7df]">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Total Course Cost (3 months)
                    </p>
                    <p className="text-xs text-slate-600">
                      Barbering, Dreadlock, Music - DJing, Music - Vocals
                    </p>
                  </div>
                  <span className="rounded-full bg-[#852991] px-3 py-1 text-xs font-semibold text-white">
                    KES 36,000
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#d6c7df] to-[#e8d9f0] px-4 py-3 border border-[#d6c7df]">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Total Course Cost (9 months)
                    </p>
                    <p className="text-xs text-slate-600">
                      Hairdressing, Beauty Therapy, Baking and Pastry,
                      Electrical Installation, Plumbing, Music - Piano
                    </p>
                  </div>
                  <span className="rounded-full bg-[#852991] px-3 py-1 text-xs font-semibold text-white">
                    KES 108,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarship Announcement */}
        <section className="mt-16">
          <div className="rounded-3xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-8 shadow-xl shadow-yellow-500/20">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                🎓 Great News!
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                2026 Scholarship Applications Now Open!
              </h3>
              <p className="text-lg text-white/95 max-w-2xl mx-auto">
                Get <strong>100% tuition fee coverage</strong> for select
                skill-based courses. Only pay a small monthly commitment fee of{" "}
                <strong>Ksh. 2,999</strong>.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-white/90 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-green-300">✓</span>
                  <span>Admission Ongoing</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/scholarships"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-6 py-3 text-lg font-bold text-yellow-600 shadow-xl transition-all duration-300 hover:bg-yellow-50 hover:shadow-2xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                  <span className="relative flex items-center gap-2">
                    Apply for Scholarship
                    <svg
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Link>
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
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="text-sm font-semibold text-[#852991] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991] cursor-pointer"
            >
              Still have questions?
            </a>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#852991]">
              Student Support & Scholarships
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Transforming communities through youth empowerment
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-gradient-to-r from-[#d6c7df] to-[#e8d9f0] px-4 py-3 border border-[#d6c7df]">
                <p className="text-sm font-semibold text-[#852991]">
                  Financial Aid
                </p>
                <p className="text-sm text-slate-700 mt-1">
                  We actively provide scholarships covering tuition, learning
                  materials, and essential supplies to remove barriers to
                  education for youth from low-income families across Gikambura,
                  Kikuyu, Kawangware, and surrounding areas. Our goal is to
                  ensure no young person in our community is left behind due to
                  financial constraints.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-sm font-semibold text-slate-900">
                  Community Impact Goals
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Creating economic opportunities and reducing youth
                  unemployment in Gikambura, Kikuyu, Kawangware, and surrounding
                  areas. We aim to graduate 200+ skilled professionals annually
                  who become catalysts for local economic development and
                  community transformation in Kiambu County.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-sm font-semibold text-slate-900">
                  Post-Graduation Support
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  We provide comprehensive support including job placement
                  assistance, business startup mentorship, and connections with
                  local employers and entrepreneurs. Our graduates don&apos;t
                  just find jobs they create businesses, employ others, and
                  become community leaders driving positive change in their
                  neighborhoods.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#852991]">
              Why Choose Us
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Your pathway to success
            </h2>
            <div className="space-y-4">
              <AnimateOnScroll delay={100}>
                <div className="group rounded-2xl bg-gradient-to-r from-[#d6c7df] to-[#e8d9f0] px-4 py-3 border border-[#d6c7df] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#852991] text-white text-sm font-bold shadow-sm">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#852991]">
                        Practical, Hands-On Training
                      </p>
                      <p className="text-sm text-slate-700 mt-1">
                        70% practical training and 30% theory ensures you gain
                        real-world skills that employers value. Learn by doing,
                        not just by reading.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={150}>
                <div className="group rounded-2xl bg-slate-50 px-4 py-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#852991] text-white text-sm font-bold shadow-sm">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">
                        Flexible Learning Options
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        Choose from Morning, Afternoon, or Evening shifts to fit
                        your schedule. Balance education with work and family
                        commitments.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="group rounded-2xl bg-slate-50 px-4 py-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#852991] text-white text-sm font-bold shadow-sm">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">
                        Affordable Education
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        Transparent pricing with scholarships available for
                        eligible students. Quality vocational education
                        accessible to all.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={250}>
                <div className="group rounded-2xl bg-slate-50 px-4 py-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#852991] text-white text-sm font-bold shadow-sm">
                      4
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">
                        Post-Graduation Support
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        We don&apos;t just train you we support your journey
                        with mentorship, job placement assistance, and
                        entrepreneurial linkages.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
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
          <SlidingGallery />
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
              Access enrollment packets, course applications, and student
              handbooks quickly. Files are static, versioned, and
              production-ready.
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
                  <span className="inline-block pt-1.5 text-sm">📧</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <p className="text-sm text-slate-600">
                    yashicatrainingcollege@gmail.com
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
                    Rubis Petrol Station, 2nd Floor, Gikambura, Kikuyu, Kiambu
                    County
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

      <Footer />
    </div>
  );
}
