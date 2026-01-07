import Image from "next/image";
import Link from "next/link";
import HighlightCarousel from "@/components/HighlightCarousel";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Admissions", href: "#admissions" },
  { name: "Calendar", href: "#calendar" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

const stats = [
  { label: "Student–teacher ratio", value: "12:1" },
  { label: "University acceptance", value: "96%" },
  { label: "Clubs & activities", value: "35+" },
  { label: "Years of excellence", value: "38" },
];

const departments = [
  {
    title: "Lower School",
    description:
      "Inquiry-based classrooms that build confidence, literacy, and numeracy for early learners.",
  },
  {
    title: "Middle School",
    description:
      "Interdisciplinary projects, advisory, and hands-on labs to grow critical thinking.",
  },
  {
    title: "Upper School",
    description:
      "AP and honors courses, college counseling, and internships that prepare students for next steps.",
  },
  {
    title: "Arts & Athletics",
    description:
      "Award-winning visual and performing arts, competitive athletics, and wellness programming.",
  },
];

const admissionsSteps = [
  {
    title: "1. Inquire",
    detail: "Connect with our admissions team to explore programs and fit.",
  },
  {
    title: "2. Apply",
    detail:
      "Submit an online application with transcripts and recommendations.",
  },
  {
    title: "3. Visit",
    detail:
      "Tour campus, meet faculty, and experience classes with a shadow day.",
  },
  {
    title: "4. Decision",
    detail:
      "Receive timely placement decisions and individualized onboarding.",
  },
];

const calendar = [
  { date: "Aug 26", title: "First Day of School" },
  { date: "Sep 13", title: "Back-to-School Night" },
  { date: "Oct 18", title: "Fall Break" },
  { date: "Nov 7", title: "Parent-Teacher Conferences" },
  { date: "Dec 20", title: "Winter Showcase" },
];

const newsItems = [
  {
    title: "Skonga robotics team advances to regional finals",
    category: "STEM",
  },
  {
    title: "New wellness center opens for student counseling",
    category: "Community",
  },
  {
    title: "Class of 2026 earns record scholarships",
    category: "College Prep",
  },
];

const testimonials = [
  {
    name: "Elena, Grade 11",
    quote:
      "Teachers know me personally and push me to lead. I feel ready for college and beyond.",
  },
  {
    name: "Mr. Carter, Parent",
    quote:
      "The communication, safety, and joy my children feel every day sets Skonga apart.",
  },
  {
    name: "Anaya, Alumna",
    quote:
      "Skonga built my confidence, from debate club to research labs. I still return to mentor students.",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80",
    alt: "Students walking on a bright campus courtyard",
  },
  {
    src: "https://images.unsplash.com/photo-1523580846011-5d1bd9c0de0c?auto=format&fit=crop&w=900&q=80",
    alt: "Modern library with natural light and study spaces",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    alt: "Science lab with students collaborating on experiments",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    alt: "Performing arts students rehearsing on stage",
  },
];

const downloads = [
  {
    name: "2025–26 Admissions Packet",
    href: "/forms/registration.pdf",
    description: "Requirements, deadlines, and tuition assistance details.",
  },
  {
    name: "Family Handbook & Policies",
    href: "/forms/policies.pdf",
    description: "Attendance, conduct, and technology expectations.",
  },
  {
    name: "Health & Athletics Clearance",
    href: "/forms/health-clearance.pdf",
    description: "Medical forms and participation guidelines.",
  },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "YouTube", href: "https://youtube.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

const values = [
  "Inclusive community and belonging",
  "Future-ready technology and labs",
  "Healthy balance of rigor and wellness",
  "Service, leadership, and global citizenship",
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

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-700 shadow-sm">
              <span className="sr-only">Skonga School</span>
              <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400">
                <span className="absolute inset-[5px] rounded-full border border-white/60" />
                <span className="relative text-xs font-bold tracking-[0.18em]">
                  SG
                </span>
              </span>
            </div>
            <div>
              <p className="text-base font-semibold">Skonga School</p>
              <p className="text-sm text-slate-500">
                Excellence in learning and character.
              </p>
            </div>
          </div>
          <nav aria-label="Primary" className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="#admissions"
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              Apply Today
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              Visit Campus
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-20">
        <section
          id="home"
          className="grid gap-10 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60 lg:grid-cols-[1.1fr,0.9fr]"
        >
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Established 1987 • Accredited • Safe & Inclusive
            </span>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Rigorous education for future-ready students.
            </h1>
            <HighlightCarousel />
            <p className="max-w-2xl text-lg text-slate-600">
              Skonga School blends academic excellence with caring guidance,
              immersive technology, and vibrant arts and athletics—so every
              student discovers their strengths and leads with purpose.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#admissions"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              >
                Start Admissions
                <IconArrowRight />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              >
                Explore Academics
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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-400 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_35%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.2),transparent_35%)]" />
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative h-full">
              <Image
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80"
                alt="Students walking through the Skonga campus"
                width={1200}
                height={900}
                className="h-full w-full object-cover opacity-90"
                priority
              />
            </div>
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/30 bg-white/80 p-4 text-slate-900 shadow-lg backdrop-blur">
              <p className="text-sm font-semibold text-blue-700">
                Safe, welcoming, and ready for learning
              </p>
              <p className="text-sm text-slate-700">
                Modern labs, collaborative classrooms, and outdoor spaces
                designed for curiosity and community.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="mt-20 grid gap-10 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              About Skonga
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Mission-driven, student-centered, globally minded.
            </h2>
            <p className="text-base text-slate-600">
              Since 1987, Skonga School has paired academic rigor with care. Our
              faculty mentor students as individuals, integrating technology,
              arts, and service learning so graduates lead with empathy and
              skill in an ever-changing world.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
                >
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-slate-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5 rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/50">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-blue-700">Leadership</p>
              <p className="text-base text-slate-700">
                Head of School: Dr. Mira Thompson
              </p>
              <p className="text-sm text-slate-600">
                Dr. Thompson leads our experienced faculty with a focus on
                evidence-based instruction, safety, and partnerships with
                families.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <p className="text-lg font-semibold">Faculty</p>
                <p className="text-sm text-slate-600">
                  78 expert educators with advanced degrees and ongoing
                  professional learning.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <p className="text-lg font-semibold">Safety</p>
                <p className="text-sm text-slate-600">
                  Secure campus access, on-site nurse, and dedicated student
                  support teams.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-4">
              <p className="text-sm font-semibold text-blue-700">Support</p>
              <p className="text-sm text-slate-700">
                Counseling, learning support, and advisory ensure every student
                is seen, known, and equipped to thrive.
              </p>
            </div>
          </div>
        </section>

        <section id="academics" className="mt-20 space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Academics
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Departments and learning pathways
              </h2>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center text-sm font-semibold text-blue-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              Talk with a division head
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
          className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-8 text-white shadow-2xl"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                Admissions
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                A clear, supportive admissions journey.
              </h2>
              <p className="text-base text-blue-50">
                From inquiry to enrollment, our team keeps families informed
                with checklists, friendly communication, and timely updates.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-800 shadow-lg shadow-blue-900/20 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Schedule a tour
                  <IconArrowRight />
                </Link>
                <a
                  href="/forms/registration.pdf"
                  className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  download
                >
                  Download packet
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
                  <p className="mt-2 text-sm text-blue-50">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="calendar" className="mt-20 grid gap-8 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Key Dates
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              School calendar highlights
            </h2>
            <p className="text-base text-slate-600">
              Plan ahead with milestone events, conferences, and celebrations.
              A full printable calendar is available upon request.
            </p>
            <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                Daily schedule
              </p>
              <p className="text-sm text-slate-600">
                Campus opens 7:30 AM • Classes 8:10 AM–3:15 PM • Extended day
                available until 6:00 PM.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              {calendar.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-600">School-wide</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="mt-20 space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                News & Announcements
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Recent highlights from campus
              </h2>
            </div>
            <Link
              href="#contact"
              className="text-sm font-semibold text-blue-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              Share an update
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                  {item.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Safe, static update ready for production. Contact communications
                  for posting schedules.
                </p>
                <span className="mt-auto pt-4 text-sm font-semibold text-blue-700">
                  Read more
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Testimonials
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Trusted by families, students, and alumni
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex h-full flex-col rounded-2xl bg-slate-50 px-4 py-3"
                >
                  <p className="text-sm text-slate-700">“{testimonial.quote}”</p>
                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Virtual Tour
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Explore our campus from anywhere
            </h2>
            <video
              className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-black"
              controls
              preload="metadata"
              poster="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=60"
            >
              <source
                src="https://cdn.coverr.co/videos/coverr-walking-in-the-university-1576/1080p.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <p className="text-sm text-slate-600">
              Prefer an in-person tour? Our admissions team can schedule a guided
              visit tailored to your student&apos;s interests.
            </p>
          </div>
        </section>

        <section className="mt-20 space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Campus Life
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Gallery and highlights
              </h2>
            </div>
            <p className="text-sm text-slate-600">
              All assets optimized for fast loading in production.
            </p>
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
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Downloadable Forms
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready-to-use PDF resources
            </h2>
            <p className="text-base text-slate-600">
              Access admissions packets, policies, and health clearances quickly.
              Files are static, versioned, and production-ready.
            </p>
            <div className="grid gap-3">
              {downloads.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  download
                  className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Contact & Location
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              We’re here to help
            </h2>
            <div className="grid gap-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-8 rounded-full bg-blue-50 text-center text-blue-700">
                  <span className="inline-block pt-1.5 text-sm">☎</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Call or email
                  </p>
                  <p className="text-sm text-slate-600">
                    (555) 214-2026 • admissions@skonga.edu
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-8 rounded-full bg-blue-50 text-center text-blue-700">
                  <span className="inline-block pt-1.5 text-sm">📍</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Visit us
                  </p>
                  <p className="text-sm text-slate-600">
                    200 Skonga Way, Cedar Grove, CA 94000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-8 rounded-full bg-blue-50 text-center text-blue-700">
                  <span className="inline-block pt-1.5 text-sm">⏱</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Office hours
                  </p>
                  <p className="text-sm text-slate-600">
                    Monday–Friday, 8:00 AM–4:30 PM
                  </p>
                </div>
              </div>
            </div>
            <iframe
              title="Skonga School map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.927920836787!2d-122.08560802366534!3d37.42206587197357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb727c4f0e3af%3A0x5e71f4b3c3c28eea!2sGoogleplex!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
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
            <p className="text-lg font-semibold">Skonga School</p>
            <p className="text-sm text-slate-600">
              Inspiring scholars, artists, and citizens since 1987.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
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
