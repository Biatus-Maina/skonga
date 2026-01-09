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
  },
  {
    title: "Scholarship program expands to support more students",
    category: "Community",
    date: "December 2024",
    description:
      "Our scholarship program has expanded to provide financial assistance to more students from underprivileged backgrounds, removing barriers to quality education.",
  },
  {
    title: "Graduates secure employment and start successful businesses",
    category: "Success Stories",
    date: "November 2024",
    description:
      "Recent graduates from our vocational programs have successfully secured employment and launched their own businesses, demonstrating the practical value of our training.",
  },
];

const studentResources = [
  
  {
    title: "Academic Calendar",
    description: "View important dates, holidays, and exam schedules.",
    link: "#",
  },
  {
    title: "Student Handbook",
    description: "Download the complete student handbook with policies and guidelines.",
    link: "/forms/policies.pdf",
  },
  {
    title: "Career Services",
    description: "Get support with job placement, resume writing, and interview preparation.",
    link: "#",
  },
];

const supportServices = [
  {
    title: "Academic Support",
    description:
      "Tutoring, study groups, and one-on-one assistance to help you succeed in your courses.",
  },
  {
    title: "Financial Aid Office",
    description:
      "Information about scholarships, payment plans, and financial assistance programs.",
  },
  {
    title: "Career Counseling",
    description:
      "Guidance on career paths, job opportunities, and entrepreneurship support.",
  },
  {
    title: "Student Wellness",
    description:
      "Resources for mental health, stress management, and overall well-being.",
  },
];

export default function StudentCenterPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Header />

      {/* Video Banner with Overlay Content */}
      <section className="relative w-full overflow-hidden mt-1">
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
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
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
          
          {/* Overlay Content - Styled like Admissions Section */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="mx-auto max-w-6xl px-6 w-full">
              <AnimateOnScroll>
                <div className="group rounded-3xl bg-gradient-to-r from-[#852991]/85 via-[#9a4ba8]/80 to-[#852991]/85 backdrop-blur-md p-6 sm:p-8 text-white shadow-2xl border border-white/10 transition-all duration-500 hover:from-[#852991]/95 hover:via-[#9a4ba8]/90 hover:to-[#852991]/95 hover:shadow-[0_20px_50px_rgba(133,41,145,0.4)]">
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-90 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-0 group-hover:-translate-y-1">
                      Student Center
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight transition-all duration-500 delay-150 transform translate-y-0 group-hover:-translate-y-1">
                      Resources and information for students
                    </h2>
                    <p className="text-base text-white/90 max-w-3xl opacity-95 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-0 group-hover:-translate-y-0.5">
                      Access news, resources, and support services designed to help you succeed in your educational journey at Yashica Training College.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-8 sm:pt-10">
        <section className="space-y-8">
          <div className="mt-12">
            <h3 className="text-2xl font-semibold tracking-tight mb-6">
              Student News & Announcements
            </h3>
            <div className="grid gap-5 md:grid-cols-3">
              {studentNews.map((item, index) => (
                <article
                  key={index}
                  className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#852991]">
                      {item.category}
                    </p>
                    <p className="text-xs text-slate-500">{item.date}</p>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 flex-grow">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold tracking-tight mb-6">
              Quick Resources
            </h3>
            <div className="grid gap-5 md:grid-cols-2">
              {studentResources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  className="flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#852991]"
                >
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-slate-600">{resource.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold tracking-tight mb-6">
              Support Services
            </h3>
            <div className="grid gap-5 md:grid-cols-2">
              {supportServices.map((service, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-100 bg-gradient-to-r from-[#d6c7df] to-[#e8d9f0] p-6">
            <h3 className="text-xl font-semibold text-[#852991] mb-3">
              Need Help?
            </h3>
            <p className="text-sm text-slate-700 mb-4">
              If you have questions or need assistance, our student support team
              is here to help. Contact us through any of the following channels:
            </p>
            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-semibold">Phone:</span> 0705 252 790
              </p>
              <p>
                <span className="font-semibold">WhatsApp:</span> 0705 252 790
              </p>
              <p>
                <span className="font-semibold">Email:</span> Contact the
                administration office
              </p>
              <p>
                <span className="font-semibold">Location:</span> Rubis Petrol
                Station, 2nd Floor, Gikambura, Kikuyu, Kiambu County
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

