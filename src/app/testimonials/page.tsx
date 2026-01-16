"use client";

import Link from "next/link";
import Header from "@/components/Header";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";

// Avatar gradient combinations for professional look
const avatarGradients = [
  "bg-gradient-to-br from-purple-500 to-pink-500",
  "bg-gradient-to-br from-blue-500 to-cyan-500",
  "bg-gradient-to-br from-green-500 to-emerald-500",
  "bg-gradient-to-br from-orange-500 to-red-500",
  "bg-gradient-to-br from-indigo-500 to-purple-500",
  "bg-gradient-to-br from-pink-500 to-rose-500",
  "bg-gradient-to-br from-cyan-500 to-blue-500",
  "bg-gradient-to-br from-emerald-500 to-teal-500",
];

// Generate initials from full name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
}

// Get consistent gradient for a name using hash
function getGradientForName(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash + name.charCodeAt(i)) & 0xffffffff;
  }
  return avatarGradients[Math.abs(hash) % avatarGradients.length];
}

// Avatar component
interface AvatarProps {
  name: string;
  size: number;
}

function Avatar({ name, size }: AvatarProps) {
  const initials = getInitials(name);
  const gradient = getGradientForName(name);

  return (
    <div
      className={`${gradient} flex items-center justify-center rounded-full text-white font-bold shadow-lg`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${size * 0.4}px`,
      }}
    >
      {initials}
    </div>
  );
}

// Animated Counter Component
interface AnimatedCounterProps {
  target: string;
  duration?: number;
  className?: string;
}

function AnimatedCounter({
  target,
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);

          // Extract numeric value from target string
          const numericValue = parseInt(target.replace(/[^0-9]/g, ""));
          if (isNaN(numericValue)) return;

          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * numericValue);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(numericValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [target, duration, hasAnimated]);

  const displayValue = target.includes("%")
    ? `${count}%`
    : target.includes("+")
      ? `${count}+`
      : count.toString();

  return (
    <div ref={elementRef} className={className}>
      {displayValue}
    </div>
  );
}

interface StudentTestimonial {
  name: string;
  course: string;
  graduationYear: string;
  location: string;
  image: string;
  quote: string;
  currentStatus: string;
}

interface CommunityTestimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  impact: string;
}

interface EmployerTestimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  impact: string;
}

type Testimonial =
  | StudentTestimonial
  | CommunityTestimonial
  | EmployerTestimonial;

interface TestimonialCategory {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

const testimonialCategories: TestimonialCategory[] = [
  {
    title: "Student Success Stories",
    description:
      "Hear from our graduates who have transformed their lives through vocational skills training",
    testimonials: [
      {
        name: "Grace Wanjiku",
        course: "Hairdressing",
        graduationYear: "2025",
        location: "Gikambura",
        image: "/media/hairdressing.jpeg",
        quote:
          "Yashica Training College changed my life completely. I started with no skills and now I own my own salon in Gikambura. The hands-on training and business support helped me become financially independent and employ two other young women from our community.",
        currentStatus: "Salon Owner & Employer",
      },
      {
        name: "Samuel Kariuki",
        course: "Electrical Installation",
        graduationYear: "2024",
        location: "Kikuyu",
        image: "/media/elecrical_installation.jpg",
        quote:
          "The electrical installation program gave me practical skills that I use every day. Within three months of graduating, I had steady work with local contractors. Now I am planning to start my own electrical business to serve Kikuyu and surrounding areas.",
        currentStatus: "Certified Electrician",
      },
      {
        name: "Mary Njeri",
        course: "Beauty Therapy",
        graduationYear: "2024",
        location: "Kawangware",
        image: "/media/beauty_therapy.jpeg",
        quote:
          "I was a single mother struggling to make ends meet. The beauty therapy course and the scholarship program made it possible for me to study. Today, I work at a spa in Nairobi and also do home visits. My children now have a better future.",
        currentStatus: "Professional Beauty Therapist",
      },
      {
        name: "David Mwangi",
        course: "Plumbing",
        graduationYear: "2025",
        location: "Gikambura",
        image: "/media/plumbing.jpg",
        quote:
          "The instructors at Yashica are amazing. They taught us not just plumbing skills, but also how to run a business. I have been working steadily since graduation and I am saving money to expand my services. The college really prepares you for success.",
        currentStatus: "Licensed Plumber & Entrepreneur",
      },
    ],
  },
  {
    title: "Community Impact",
    description:
      "Local leaders and community members share how our graduates are transforming neighborhoods",
    testimonials: [
      {
        name: "Peter Kamau",
        role: "Chief, Gikambura Location",
        image: "/media/class_image_1.jpg",
        quote:
          "Yashica Training College has brought hope to our community. I have seen young people who were idle transform into skilled professionals and business owners. The college doesn&apos;t just train students—it builds our entire community&apos;s future.",
        impact: "Community Leadership",
      },
      {
        name: "Rose Wambui",
        role: "Local Business Owner, Kikuyu",
        image: "/media/discussion_forum.jpg",
        quote:
          "Many of my employees are Yashica graduates. They come with excellent practical skills and strong work ethics. The college is creating a generation of skilled workers who are driving economic growth in our area.",
        impact: "Economic Development",
      },
    ],
  },
  {
    title: "Employer Testimonials",
    description:
      "Local employers and business owners share their experiences with our graduates",
    testimonials: [
      {
        name: "Jane Muthoni",
        role: "Owner, Kikuyu Hair Salon",
        image: "/media/carousel_1.jpg",
        quote:
          "I have hired three Yashica graduates over the past year. They are well-trained, professional, and ready to work from day one. The quality of education they receive is outstanding, and they understand both the technical and business sides of their work.",
        impact: "Graduate Employment",
      },
      {
        name: "John Kiprotich",
        role: "Construction Manager, Kiambu",
        image: "/media/carousel_2.jpg",
        quote:
          "Yashica graduates in electrical and plumbing are among the best I have worked with. They have practical experience, follow safety protocols, and work efficiently. I actively recruit from this college because I know the quality of training they provide.",
        impact: "Industry Partnership",
      },
    ],
  },
];

const stats = [
  { number: "200+", label: "Graduates Trained" },
  { number: "85%", label: "Employment Rate" },
  { number: "40+", label: "Local Businesses Started" },
  { number: "4", label: "Communities Served" },
];

function IconQuote() {
  return (
    <svg
      className="h-8 w-8 text-[#852991] opacity-25"
      fill="currentColor"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path d="m9.352 4c-1.536 0-2.88.64-3.84 1.728-0.96 1.024-1.536 2.432-1.536 4.032 0 1.6 0.576 3.008 1.536 4.032 0.96 1.088 2.304 1.728 3.84 1.728s2.88-0.64 3.84-1.728c0.96-1.024 1.536-2.432 1.536-4.032 0-1.6-0.576-3.008-1.536-4.032-0.96-1.088-2.304-1.728-3.84-1.728zM22.848 4c-1.536 0-2.88 0.64-3.84 1.728-0.96 1.024-1.536 2.432-1.536 4.032 0 1.6 0.576 3.008 1.536 4.032 0.96 1.088 2.304 1.728 3.84 1.728s2.88-0.64 3.84-1.728c0.96-1.024 1.536-2.432 1.536-4.032 0-1.6-0.576-3.008-1.536-4.032-0.96-1.088-2.304-1.728-3.84-1.728z" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#852991] via-[#9a4ba8] to-[#852991] py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateOnScroll>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Success Stories
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
                Real stories from our graduates, employers, and community
                leaders showcasing the transformative impact of vocational
                education in Gikambura, Kikuyu, Kawangware, and surrounding
                areas.
              </p>
              <div className="mt-8 flex justify-center gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <AnimatedCounter
                      target={stat.number}
                      className="text-3xl font-bold"
                      duration={2500}
                    />
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-16">
          {/* Navigation */}
          <AnimateOnScroll>
            <div className="mb-12 flex flex-wrap justify-center gap-4">
              {testimonialCategories.map((category, index) => (
                <a
                  key={category.title}
                  href={`#section-${index}`}
                  className="rounded-full border border-[#852991] px-4 py-2 text-sm font-medium text-[#852991] transition hover:bg-[#852991] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#852991]"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Testimonial Sections */}
          {testimonialCategories.map((category, categoryIndex) => (
            <AnimateOnScroll key={category.title} delay={categoryIndex * 100}>
              <section id={`section-${categoryIndex}`} className="mb-20">
                <div className="mb-10 text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    {category.title}
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                    {category.description}
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  {category.testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50"
                    >
                      <div className="mb-6">
                        <IconQuote />
                      </div>

                      <blockquote className="mb-6 text-slate-700">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>

                      <div className="flex items-center gap-4">
                        <Avatar name={testimonial.name} size={48} />
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-slate-600">
                            {"course" in testimonial &&
                              `${testimonial.course} Graduate, `}
                            {"role" in testimonial && `${testimonial.role} • `}
                            {"graduationYear" in testimonial &&
                              `Class of ${testimonial.graduationYear} • `}
                            {"location" in testimonial && testimonial.location}
                          </div>
                          {"currentStatus" in testimonial && (
                            <div className="mt-1 inline-flex items-center rounded-full bg-[#d6c7df] px-3 py-1 text-xs font-medium text-[#852991]">
                              {testimonial.currentStatus}
                            </div>
                          )}
                          {"impact" in testimonial && (
                            <div className="mt-1 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                              {testimonial.impact}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* 5-star rating for all testimonials */}
                      <div className="mt-4 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <IconStar key={i} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimateOnScroll>
          ))}

          {/* Call to Action Section */}
          <AnimateOnScroll>
            <section className="rounded-3xl bg-gradient-to-r from-[#852991] via-[#9a4ba8] to-[#852991] px-8 py-16 text-center text-white">
              <h2 className="text-3xl font-bold tracking-tight">
                Ready to Write Your Success Story?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                Join hundreds of young people from Gikambura, Kikuyu,
                Kawangware, and surrounding communities who have transformed
                their lives through practical vocational training.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/#admissions"
                  className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-black shadow-xl transition-all duration-200 hover:bg-gray-50 hover:scale-105 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <span className="tracking-wide text-gray-900">
                    Start Your Journey
                  </span>
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white px-10 py-4 text-lg font-black text-white transition-all duration-200 hover:bg-white hover:text-gray-900 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <span className="tracking-wide">Contact Us</span>
                </Link>
              </div>
              <div className="mt-8 text-sm text-white/80">
                Scholarships and financial aid available for eligible students
              </div>
            </section>
          </AnimateOnScroll>

          {/* Alumni Network Section */}
          <AnimateOnScroll>
            <section className="mt-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Join Our Growing Alumni Network
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                  Connect with fellow graduates, access ongoing support, and
                  help mentor the next generation of skilled professionals in
                  your community.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d6c7df]">
                    <span className="text-2xl text-[#852991]">🤝</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Networking
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Connect with graduates across all programs and build
                    professional relationships
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d6c7df]">
                    <span className="text-2xl text-[#852991]">💼</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Career Support
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Access job opportunities, business partnerships, and ongoing
                    career guidance
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d6c7df]">
                    <span className="text-2xl text-[#852991]">🌟</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Mentorship
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Mentor current students and give back to your community
                    while growing your network
                  </p>
                </div>
              </div>
            </section>
          </AnimateOnScroll>
        </div>
      </main>

      <Footer />
    </div>
  );
}
