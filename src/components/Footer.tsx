import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/#admissions" },
  { name: "FAQ", href: "/#faq" },
  { name: "Student Center", href: "/student-center" },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: "📘" },
  { name: "Instagram", href: "#", icon: "📷" },
  { name: "YouTube", href: "#", icon: "▶️" },
  { name: "LinkedIn", href: "#", icon: "💼" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50 text-slate-800"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center">
                <Image
                  src="/media/logo.png"
                  alt="Yashica Training College Logo"
                  width={40}
                  height={40}
                  className="h-full w-auto"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  Yashica Training College
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Transforming lives through vocational skills and self-reliance.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#d6c7df] hover:bg-[#d6c7df] hover:text-[#852991] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#852991]"
                  aria-label={link.name}
                >
                  <span className="text-sm">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-slate-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-[#852991] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#852991]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-slate-900">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <span className="mt-0.5">📞</span>
                <div>
                  <p className="font-medium text-slate-900">General Inquiries</p>
                  <p>0705 252 790</p>
                  <p className="text-xs text-slate-500">Call or WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5">📧</span>
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <p>yashicatrainingcollege@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-slate-900">Location</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <div>
                  <p>Rubis Petrol Station, 2nd Floor</p>
                  <p>Gikambura, Kikuyu</p>
                  <p>Kiambu County, Kenya</p>
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <p className="text-xs font-semibold text-[#852991] mb-1">
                  Office Hours
                </p>
                <p className="text-xs text-slate-600">
                  Monday - Friday: 8:00 AM - 4:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              © {currentYear} Yashica Training College. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-500">
              <Link
                href="/#about"
                className="transition hover:text-[#852991] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#852991]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/#about"
                className="transition hover:text-[#852991] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#852991]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
