"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const courses = [
  {
    title: "Hairdressing",
    duration: "9 months",
    description:
      "Master professional hairdressing techniques, styling, and salon management skills.",
    icon: "💇‍♀️",
  },
  {
    title: "Beauty Therapy",
    duration: "9 months",
    description:
      "Learn comprehensive beauty treatments, skincare, and therapeutic techniques.",
    icon: "💆‍♀️",
  },
  {
    title: "Baking & Pastry",
    duration: "9 months",
    description:
      "Develop expertise in baking, pastry arts, and culinary entrepreneurship.",
    icon: "🧁",
  },
  {
    title: "Electrical Installation",
    duration: "9 months",
    description:
      "Gain practical skills in electrical systems, wiring, and safety protocols.",
    icon: "⚡",
  },
];

const requirements = [
  "2 Passport Photos",
  "Photocopy of ID or Birth Certificate",
  "Ksh. 2,999 Commitment Fee",
];

const benefits = [
  "100% Tuition Fee Coverage",
  "Professional Certification Upon Completion",
  "9-Month Comprehensive Training",
  "Expert Instructors & Modern Equipment",
  "Small Monthly Commitment Fee Only",
  "Career Placement Support",
];

export default function ScholarshipPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="flex h-10 w-10 items-center justify-center">
                <Image
                  src="/media/logo.png"
                  alt="Yashica Training College"
                  width={40}
                  height={40}
                  className="h-full w-auto"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  Yashica Training College
                </p>
                <p className="text-sm text-[#852991] font-medium">
                  Fully Funded Scholarships 2026
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:border-[#852991] focus:outline-none focus:ring-2 focus:ring-[#852991] focus:ring-offset-2"
            >
              ← Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#852991] via-[#9a4ba8] to-[#852991] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm border border-white/30">
            <span className="mr-3 h-3 w-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></span>
            🎓 2026 Applications Now Open & Ongoing
          </div>

          <h1 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fully Funded
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-clip-text text-transparent drop-shadow-sm">
              Skills Scholarships
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-4xl text-xl text-white/90 leading-relaxed">
            We are excited to offer fully funded scholarships for select
            skill-based courses. Transform your future with 100% tuition
            coverage and launch your career with just a small monthly commitment
            fee of <span className="font-bold text-yellow-300">Ksh. 2,999</span>
            .
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-green-400 text-lg">✓</span>
              <span className="font-medium">Deadline: 18th December 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-green-400 text-lg">✓</span>
              <span className="font-medium">9 Month Programs</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-green-400 text-lg">✓</span>
              <span className="font-medium">Professional Certificates</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-green-400 text-lg">✓</span>
              <span className="font-medium">Admission Ongoing</span>
            </div>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdi89Hj-Glari_oxdScEkVGB7Id_rFzFmEaegJPPMxYeYxX3A/viewform"
            target="_self"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-10 py-5 text-xl font-bold text-[#852991] shadow-2xl transition-all duration-300 hover:bg-yellow-50 hover:shadow-3xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <span className="relative flex items-center">
              🚀 Apply Now - It&apos;s Free!
              <svg
                className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2"
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
          </a>

          <p className="mt-6 text-sm text-white/80">
            Don&apos;t miss this chance to skill up for your future!
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Course Selection */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Available Scholarship Courses
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our industry-focused programs designed to give you
              practical, job-ready skills. Each course runs for 9 months with
              professional certification upon completion.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <div
                key={course.title}
                className={`group cursor-pointer rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                  selectedCourse === course.title
                    ? "border-[#852991] bg-gradient-to-br from-[#852991]/10 to-[#852991]/5 shadow-xl shadow-[#852991]/20"
                    : "border-slate-200 bg-white hover:border-[#852991]/30 hover:shadow-[#852991]/10"
                }`}
                onClick={() =>
                  setSelectedCourse(
                    course.title === selectedCourse ? null : course.title,
                  )
                }
              >
                <div className="p-8 text-center">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-sm text-[#852991] font-semibold mb-4 bg-[#852991]/10 inline-block px-3 py-1 rounded-full">
                    {course.duration}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div
                    className={`rounded-xl bg-slate-50 p-4 transition-all duration-300 ${
                      selectedCourse === course.title
                        ? "bg-[#852991]/10 border-2 border-[#852991]/20"
                        : "group-hover:bg-[#852991]/5"
                    }`}
                  >
                    <p className="text-sm font-bold text-slate-700">
                      {selectedCourse === course.title
                        ? "✅ Selected for Application"
                        : "Click to select this course"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scholarship Benefits */}
        <section className="mb-20">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                What Your Scholarship Includes
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-start gap-4 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                      <svg
                        className="h-5 w-5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#852991] to-[#a855b8] p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-8 text-center">
                Financial Breakdown
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-lg">Regular Tuition Fee</span>
                  <span className="text-lg line-through text-white/60">
                    Full Amount
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-lg">Scholarship Coverage</span>
                  <span className="text-2xl font-bold text-yellow-300 animate-pulse">
                    100% FREE ✨
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-lg">Monthly Commitment Fee</span>
                  <span className="text-3xl font-bold">Ksh. 2,999</span>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-center text-white/90 font-medium">
                    Students admitted under the scholarship will only be
                    required to pay a small monthly fee of{" "}
                    <span className="font-bold text-yellow-300">
                      Ksh. 2,999
                    </span>{" "}
                    as commitment fee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Requirements Needed
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple requirements to get started on your fully funded
              scholarship journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {requirements.map((requirement, index) => (
              <div
                key={requirement}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 hover:border-[#852991]/30"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#852991]/10 group-hover:bg-[#852991]/20 transition-colors">
                  <span className="text-2xl font-bold text-[#852991]">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {requirement}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {index === 0 &&
                    "Two recent passport-size photographs for your scholarship application and student records."}
                  {index === 1 &&
                    "A photocopy of your National ID or Birth Certificate for identity verification and eligibility confirmation."}
                  {index === 2 &&
                    "One-time commitment fee of Ksh. 2,999 to secure your scholarship spot and demonstrate commitment to the program."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Location & Contact */}
        <section className="mb-20">
          <div className="rounded-3xl bg-slate-900 p-12 text-white shadow-2xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold mb-8">Visit Our Campus</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-2 text-yellow-400 text-2xl">📍</div>
                    <div>
                      <p className="text-xl font-bold mb-2">Our Location</p>
                      <p className="text-lg text-slate-300 leading-relaxed">
                        Rubis Petrol Station, Gikambura Kikuyu, 2nd Floor
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-2 text-yellow-400 text-2xl">📞</div>
                    <div>
                      <p className="text-xl font-bold mb-2">
                        Contact Information
                      </p>
                      <p className="text-lg text-slate-300">
                        For more info, Call / WhatsApp:{" "}
                        <span className="font-bold text-yellow-300">
                          0705 252 790
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-2 text-yellow-400 text-2xl">⏰</div>
                    <div>
                      <p className="text-xl font-bold mb-2">
                        Application Status
                      </p>
                      <div className="inline-flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
                        <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="font-bold text-green-300">
                          Admission is Ongoing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  Quick Facts
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-slate-300">Program Duration:</span>
                    <span className="font-bold text-xl">9 Months</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-slate-300">
                      Application Deadline:
                    </span>
                    <span className="font-bold text-xl text-yellow-300">
                      18th December 2026
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-slate-300">
                      Certificates Awarded:
                    </span>
                    <span className="font-bold text-xl text-green-300">
                      ✓ Upon Completion
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-slate-300">Tuition Coverage:</span>
                    <span className="font-bold text-xl text-green-300">
                      100% FREE
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Monthly Fee:</span>
                    <span className="font-bold text-xl">Ksh. 2,999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="rounded-3xl bg-gradient-to-r from-[#852991] via-[#9a4ba8] to-[#852991] p-16 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Don&apos;t Miss This Life-Changing Opportunity!
            </h2>
            <p className="text-2xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed">
              Transform your future with fully funded skills training.
            </p>
            <p className="text-xl text-yellow-300 mb-12 font-semibold">
              Limited spots available - Apply now while 2026 applications are
              open!
            </p>

            <div className="mb-12">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdi89Hj-Glari_oxdScEkVGB7Id_rFzFmEaegJPPMxYeYxX3A/viewform"
                target="_self"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-12 py-6 text-2xl font-bold text-[#852991] shadow-2xl transition-all duration-300 hover:bg-yellow-50 hover:shadow-3xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                <span className="absolute top-2 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle"></span>
                <span
                  className="absolute top-3 right-6 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle"
                  style={{ animationDelay: "0.5s" }}
                ></span>
                <span
                  className="absolute bottom-3 left-8 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle"
                  style={{ animationDelay: "1s" }}
                ></span>
                <span className="relative flex items-center">
                  🌟 Start Your Application Now
                  <svg
                    className="ml-4 h-8 w-8 transition-transform group-hover:translate-x-3"
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
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✅</span>
                <span className="font-medium">
                  Certificates will be awarded upon successful completion
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✅</span>
                <span className="font-medium">Admission is Ongoing</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 inline-block">
              <p className="text-lg text-white/90 mb-2">
                <strong>Questions? Need Help?</strong>
              </p>
              <p className="text-xl font-bold text-yellow-300">
                📱 Call/WhatsApp: 0705 252 790
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
