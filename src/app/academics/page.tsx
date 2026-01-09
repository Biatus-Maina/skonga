import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";

const vocationalTrades = {
  title: "Vocational Trades",
  introduction:
    "Our Vocational Trades department offers hands-on, practical training in essential skills that lead directly to employment or entrepreneurship. With industry-standard equipment and experienced instructors, students gain real-world expertise in high-demand fields. We offer flexible course durations: 9-month programs include Hairdressing, Beauty Therapy, Baking and Pastry, Electrical Installation, Plumbing, and Music - Piano. Our 3-month programs include Barbering, Dreadlock, Music - DJing, and Music - Vocals.",
  courses: [
    {
      name: "Hairdressing",
      description:
        "Master the art of hair styling, cutting, coloring, and treatment. Learn modern techniques and traditional methods to serve diverse client needs.",
      image: "/media/hairdressing.jpeg",
    },
    {
      name: "Beauty Therapy",
      description:
        "Comprehensive beauty therapy training covering facial treatments, skincare, makeup application, and client consultation techniques.",
      image: "/media/beauty_therapy.jpeg",
    },
    {
      name: "Nail Technology",
      description:
        "Specialized training in manicure, pedicure, nail art, and nail extensions. Learn the latest trends and techniques in nail care.",
      image: "/media/nail_technology.jpeg",
    },
    {
      name: "Plumbing",
      description:
        "Practical plumbing skills including pipe installation, repairs, fixture installation, and maintenance for residential and commercial settings.",
      image: "/media/plumbing.jpg",
    },
    {
      name: "Electrical Installation",
      description:
        "Comprehensive electrical training covering wiring, circuit installation, safety protocols, and electrical system maintenance.",
      image: "/media/elecrical_installation.jpg",
    },
    {
      name: "Baking and Pastry",
      description:
        "Learn the art of baking and pastry making including bread, cakes, pastries, and confectionery. Master techniques for both traditional and modern baked goods.",
      image: "/media/baking_and_pastry.jpeg",
    },
    {
      name: "Barbering",
      description:
        "Professional barbering training covering men's haircuts, beard trimming, styling, and grooming techniques. Learn classic and modern barbering skills for a successful career.",
      image: "/media/barbering.jpg",
    },
    {
      name: "Dreadlock",
      description:
        "Specialized training in dreadlock creation, maintenance, and styling. Master various techniques including natural, crochet, and interlocking methods for diverse hair types.",
      image: "/media/dreadlocks_2.jpeg",
    },
  ],
};

const creativeArts = {
  title: "Creative Arts",
  introduction:
    "The Creative Arts department nurtures artistic talent and creative expression through comprehensive music programs. Our programs develop technical skills, artistic vision, and performance confidence for aspiring musicians and DJs.",
  courses: [
    {
      name: "Music - Vocals",
      description:
        "Develop your vocal technique, range, and performance skills. Learn breathing techniques, pitch control, and stage presence.",
      image: "/media/music_vocals.webp",
    },
    {
      name: "Music - Piano",
      description:
        "Master piano playing from fundamentals to advanced techniques. Learn music theory, sight-reading, and performance skills.",
      image: "/media/piano_training.webp",
    },
    {
      name: "Music - DJing",
      description:
        "Learn the art of DJing including mixing, beat matching, equipment operation, and creating seamless transitions for live performances.",
      image: "/media/music_dJing.jpeg",
    },
  ],
};

const otherDepartments = [
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
        <section className="space-y-12">
          <AnimateOnScroll>
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
          </AnimateOnScroll>

          {/* Vocational Trades Department */}
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {vocationalTrades.title}
                </h3>
                <p className="text-base text-slate-600 max-w-3xl">
                  {vocationalTrades.introduction}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {vocationalTrades.courses.map((course, index) => (
              <AnimateOnScroll key={course.name} delay={200 + index * 50}>
                <div className="flex flex-col rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg overflow-hidden group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5 space-y-2">
                    <h4 className="text-lg font-semibold text-slate-900">
                      {course.name}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed flex-1">
                      {course.description}
                    </p>
                    <Link
                      href="/#contact"
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-[#852991] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#d6c7df]/50 transition-all duration-300 hover:bg-[#9a4ba8] hover:shadow-lg hover:shadow-[#d6c7df] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
                    >
                      Enroll Now
                      <IconArrowRight />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Creative Arts Department */}
          <AnimateOnScroll delay={100}>
            <div className="space-y-6 mt-12">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {creativeArts.title}
                </h3>
                <p className="text-base text-slate-600 max-w-3xl">
                  {creativeArts.introduction}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {creativeArts.courses.map((course, index) => (
              <AnimateOnScroll key={course.name} delay={200 + index * 50}>
                <div className="flex flex-col rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg overflow-hidden group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5 space-y-2">
                    <h4 className="text-lg font-semibold text-slate-900">
                      {course.name}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed flex-1">
                      {course.description}
                    </p>
                    <Link
                      href="/#contact"
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-[#852991] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#d6c7df]/50 transition-all duration-300 hover:bg-[#9a4ba8] hover:shadow-lg hover:shadow-[#d6c7df] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
                    >
                      Enroll Now
                      <IconArrowRight />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Other Departments */}
          <div className="grid gap-5 md:grid-cols-2">
            {otherDepartments.map((department, index) => (
              <AnimateOnScroll key={department.title} delay={400 + index * 100}>
                <div className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-lg font-semibold text-slate-900">
                  {department.title}
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  {department.description}
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-semibold text-slate-800">
                    Options Available:
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
              </AnimateOnScroll>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

