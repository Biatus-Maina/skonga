import Link from "next/link";
import Header from "@/components/Header";

const departments = [
  {
    title: "Vocational Trades",
    description:
      "Hairdressing, Beauty Therapy (Nail Technology & Beauty Care), Plumbing, and Electrical Installation for practical, market-ready skills.",
    courses: [
      "Hairdressing",
      "Beauty Therapy",
      "Nail Technology",
      "Beauty Care",
      "Plumbing",
      "Electrical Installation",
    ],
  },
  {
    title: "Creative Arts",
    description:
      "Music programs including Vocals, Piano, and DJing to nurture artistic talent and creative expression.",
    courses: [
      "Music - Vocals",
      "Music - Piano",
      "Music - DJing",
    ],
  },
  {
    title: "Future-Ready Skills",
    description:
      "Digital Literacy, Critical Thinking, and Artificial Intelligence (AI) applications integrated into technical trades.",
    courses: [
      "Digital Literacy",
      "Critical Thinking",
      "Artificial Intelligence (AI) Applications in Technical Trades",
    ],
  },
  {
    title: "Flexible Scheduling",
    description:
      "Morning, Afternoon, and Evening shifts available to accommodate different student needs and commitments.",
    courses: [
      "Morning Shift",
      "Afternoon Shift",
      "Evening Shift",
    ],
  },
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

export default function AcademicsPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Header />

      <section className="w-full bg-gradient-to-r from-[#852991] via-[#9a4ba8] to-[#852991] mt-1 pb-4 sm:pb-5 pt-4 sm:pt-5">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-white tracking-wide">
            Academics
          </h1>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-8 sm:pt-10">
        <section className="space-y-8">
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
              href="/#contact"
              className="inline-flex items-center text-sm font-semibold text-[#852991] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
            >
              Contact our team
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
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-semibold text-slate-800">
                    Courses Offered:
                  </p>
                  <ul className="list-none space-y-1.5">
                    {department.courses.map((course, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#852991] flex-shrink-0" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

