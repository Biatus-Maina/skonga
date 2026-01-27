import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const studentNews = [
  {
    title: "New AI applications course launched for technical trades",
    category: "Future Skills",
    date: "January 2025",
    description:
      "Yashica Training College introduces cutting-edge AI applications integrated into our technical trades programs, preparing students for the modern workforce.",
    icon: "🤖",
  },
  {
    title: "Scholarship program expands to support more students",
    category: "Community",
    date: "December 2024",
    description:
      "Our scholarship program has expanded to provide financial assistance to more students from underprivileged backgrounds, removing barriers to quality education.",
    icon: "🎓",
  },
  {
    title: "Graduates secure employment and start successful businesses",
    category: "Success Stories",
    date: "November 2024",
    description:
      "Recent graduates from our vocational programs have successfully secured employment and launched their own businesses, demonstrating the practical value of our training.",
    icon: "🚀",
  },
];

const studentResources = [
  {
    title: "Academic Calendar",
    description: "View important dates, holidays, and exam schedules.",
    link: "#",
    icon: "📅",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Student Handbook",
    description:
      "Download the complete student handbook with policies and guidelines.",
    link: "/forms/policies.pdf",
    icon: "📚",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Career Services",
    description:
      "Get support with job placement, resume writing, and interview preparation.",
    link: "#",
    icon: "💼",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Student Portal",
    description: "Access grades, course materials, and academic progress.",
    link: "#",
    icon: "🏛️",
    color: "from-orange-500 to-orange-600",
  },
];

const supportServices = [
  {
    title: "Academic Support",
    description:
      "Tutoring, study groups, and one-on-one assistance to help you succeed in your courses.",
    icon: "📖",
    features: ["One-on-one tutoring", "Study groups", "Academic coaching"],
  },
  {
    title: "Financial Aid Office",
    description:
      "Information about scholarships, payment plans, and financial assistance programs.",
    icon: "💰",
    features: ["Scholarship applications", "Payment plans", "Emergency funds"],
  },
  {
    title: "Career Counseling",
    description:
      "Guidance on career paths, job opportunities, and entrepreneurship support.",
    icon: "🎯",
    features: ["Career planning", "Job placement", "Business mentorship"],
  },
  {
    title: "Student Wellness",
    description:
      "Resources for mental health, stress management, and overall well-being.",
    icon: "🌱",
    features: ["Counseling services", "Stress management", "Health resources"],
  },
];

const quickStats = [
  { label: "Active Students", value: "500+", icon: "👥" },
  { label: "Courses Available", value: "10+", icon: "📋" },
  { label: "Success Rate", value: "95%", icon: "⭐" },
  { label: "Job Placement", value: "90%", icon: "💼" },
];

export default function StudentCenterPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Header />

      {/* Hero Section with Video Background */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/media/nail_tech.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#852991]/20 via-transparent to-transparent" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="mx-auto max-w-6xl px-6 w-full text-center">
              <AnimateOnScroll>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium text-white">
                    <span className="text-lg">🎓</span>
                    Student Center
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                    Your Success
                    <span className="block bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      Starts Here
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                    Access everything you need to excel in your educational
                    journey at Yashica Training College
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 pb-24">
        {/* Quick Stats Section */}
        <section className="-mt-16 relative z-10 mb-16">
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </section>

        {/* Quick Resources Section */}
        <section className="mb-20">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Quick Resources
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Access essential tools and information to support your academic
                journey
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {studentResources.map((resource, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <Link
                  href={resource.link}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div className="relative p-6">
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#852991] transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      {resource.description}
                    </p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-[#852991] group-hover:translate-x-2 transition-transform duration-300">
                      Access Now
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* News & Announcements Section */}
        <section className="mb-20">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Latest News & Announcements
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Stay updated with the latest developments and opportunities
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-6 lg:grid-cols-3">
            {studentNews.map((item, index) => (
              <AnimateOnScroll key={index} delay={index * 150}>
                <article className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-[#852991]/10 text-[#852991] text-xs font-semibold rounded-full mb-2">
                          {item.category}
                        </span>
                        <p className="text-xs text-slate-500">{item.date}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#852991] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-[#852991] to-[#9a4ba8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* Support Services Section */}
        <section className="mb-20">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Student Support Services
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive support to help you succeed academically and
                personally
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-6 lg:grid-cols-2">
            {supportServices.map((service, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="group bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#852991] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-slate-600"
                          >
                            <svg
                              className="w-4 h-4 text-[#852991] mr-2 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section>
          <AnimateOnScroll>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#852991] via-[#9a4ba8] to-[#852991] p-8 sm:p-12">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />

              <div className="relative">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Need Help? We&apos;re Here for You
                  </h3>
                  <p className="text-white/90 text-lg max-w-2xl mx-auto">
                    Our dedicated student support team is ready to assist you
                    with any questions or concerns
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-white">
                  <div className="text-center">
                    <div className="text-3xl mb-3">📞</div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-white/90">0705 252 790</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">💬</div>
                    <div className="font-semibold mb-1">WhatsApp</div>
                    <div className="text-white/90">0705 252 790</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">✉️</div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-white/90">Contact Admin Office</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">📍</div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-white/90 text-sm">
                      Rubis Petrol Station, 2nd Floor, Gikambura, Kikuyu
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#852991] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    Contact Support
                  </Link>
                  <Link
                    href="/#admissions"
                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#852991] transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>
      </main>

      <Footer />
    </div>
  );
}
