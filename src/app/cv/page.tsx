import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, ExternalLink, Github, Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "CV - Shoaib Ur Rehman | Physics, AI & Scientific Computing",
  description:
    "Europass-style CV of Shoaib Ur Rehman - BS Hons Physics (GCU Lahore), computational and plasma physics research, and AI / scientific computing projects. Open to MSc and research internships in Germany/EU.",
  keywords: [
    "Shoaib Ur Rehman",
    "CV",
    "Europass",
    "Physics",
    "Plasma Physics",
    "Computational Physics",
    "Data Science",
    "Scientific Computing",
    "MSc Germany",
  ],
  openGraph: {
    title: "CV - Shoaib Ur Rehman",
    description:
      "Physics graduate (GCU Lahore) seeking MSc / research internship in Geophysics, Data Science or Scientific Computing in Germany/EU.",
    type: "profile",
  },
}

const contact = {
  location: "Anarkali 54000, Lahore, Pakistan",
  phone: "+92 310 8200734",
  email: "kakarshoaibkhan5@gmail.com",
  portfolio: "https://my-portfolio-website-sigma-orcin.vercel.app",
  portfolioLabel: "my-portfolio-website-sigma-orcin.vercel.app",
  github: "https://github.com/kakarshoaibkhan5",
  githubLabel: "github.com/kakarshoaibkhan5",
}

const education = [
  {
    degree: "BS Hons Physics",
    school: "GCU Lahore",
    period: "2021-2025",
    grade: "GPA A+",
    details: [
      "Thesis: Beam-Driven Instability in a Cairns-Distributed Plasma",
      "Coursework: Computational Physics, Statistical Physics, Mathematical Methods, Modern Physics",
    ],
  },
  {
    degree: "HSSC Pre-Medical",
    school: "Govt Degree College Khanozai",
    period: "2019",
    grade: "813/1100",
    details: [],
  },
]

const projects = [
  {
    title: "Physics Seekho",
    stack: "Next.js 15",
    description:
      "Interactive Urdu/English AI physics tutor with 8 lessons, SVG diagrams and a live AI chat tutor.",
    href: "/projects/physics-seekho",
    label: "/projects/physics-seekho",
  },
  {
    title: "Quantum Visual Lab",
    stack: "Next.js, p5.js, Canvas",
    description:
      "Interactive double-slit experiment and Schrodinger wave-packet simulator for physics outreach.",
    href: "https://quantum-lab-navy.vercel.app",
    label: "quantum-lab-navy.vercel.app",
  },
  {
    title: "CERN AI Lab",
    stack: "Next.js, TypeScript",
    description:
      "CERN-inspired interactive AI experiments lab for particle-physics data exploration.",
    href: "/projects/cern-ai-lab",
    label: "/projects/cern-ai-lab",
  },
]

const skills = [
  {
    label: "Scientific computing",
    items: ["Python", "MATLAB", "OriginLab", "Data cleaning", "Database management"],
  },
  {
    label: "Physics & research",
    items: [
      "Computational Physics",
      "Statistical Physics",
      "Mathematical Methods",
      "Scientific research methodology",
      "Technical writing",
    ],
  },
  {
    label: "Web & tools",
    items: ["Next.js 15", "TypeScript", "Tailwind", "Git", "Vercel", "MS Excel", "Google Sheets"],
  },
]

const certifications = [
  { name: "Google AI Essentials", date: "Sep 2025" },
  { name: "AI in Digital Marketing", date: "Jul 2024" },
  { name: "Global Quantum Mechanics Challenge", date: "2026" },
]

const experience = [
  {
    role: "Private Physics & Biology Tutor",
    place: "Lahore",
    period: "2021-2025",
    description:
      "One-to-one tutoring in physics and biology for secondary and undergraduate students.",
  },
]

const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
  { name: "Pashto", level: "Native" },
]

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-5 first:mt-0 break-inside-avoid">
      <h2 className="border-b border-[#c7d2e8] pb-1 text-[13px] font-bold uppercase tracking-[0.14em] text-[#1e3a8a]">
        {title}
      </h2>
      <div className="mt-2.5 space-y-2.5 text-[13px] leading-relaxed text-slate-700">
        {children}
      </div>
    </section>
  )
}

export default function CvPage() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 sm:px-6 sm:py-14 print:bg-white print:p-0">
      <div className="mx-auto max-w-[840px]">
        {/* Actions - hidden when printing */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#1e3a8a]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={contact.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-[#1e3a8a]/40 hover:text-[#1e3a8a]"
            >
              <ExternalLink className="h-4 w-4" />
              Live portfolio
            </a>
            <a
              href="/CV_Shoaib_Europe.pdf"
              download="CV_Shoaib_Europe.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-[#1e3a8a] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#172f6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a8a]"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </div>

        {/* A4 sheet */}
        <article
          className="cv-sheet mx-auto bg-white px-8 py-9 shadow-[0_18px_50px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 sm:px-11 sm:py-11 print:px-0 print:py-0 print:shadow-none print:ring-0"
          style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}
        >
          {/* Header */}
          <header>
            <h1 className="text-[30px] font-bold leading-tight tracking-tight text-[#1e3a8a] sm:text-[32px]">
              Shoaib Ur Rehman
            </h1>
            <p className="mt-1 text-[13px] text-slate-500">
              Physics Graduate &nbsp;|&nbsp; Computational &amp; Plasma Physics &nbsp;|&nbsp; AI
              &amp; Scientific Computing
            </p>

            <ul className="mt-3 space-y-1 border-t-2 border-[#1e3a8a] pt-3 text-[12.5px] text-slate-600">
              <li className="flex flex-wrap items-center gap-x-5 gap-y-1">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#1e3a8a]" aria-hidden="true" />
                  {contact.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-[#1e3a8a]" aria-hidden="true" />
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-[#1e3a8a] hover:underline">
                    {contact.phone}
                  </a>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-[#1e3a8a]" aria-hidden="true" />
                  <a href={`mailto:${contact.email}`} className="hover:text-[#1e3a8a] hover:underline">
                    {contact.email}
                  </a>
                </span>
              </li>
              <li className="flex flex-wrap items-center gap-x-5 gap-y-1">
                <span>
                  Portfolio:{" "}
                  <a
                    href={contact.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    {contact.portfolioLabel}
                  </a>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Github className="h-3.5 w-3.5 text-[#1e3a8a]" aria-hidden="true" />
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    {contact.githubLabel}
                  </a>
                </span>
              </li>
            </ul>
          </header>

          <div className="mt-5">
            <Section title="Summary">
              <p>
                Physics graduate (BS Hons., GCU Lahore, 2021-2025, GPA A+) with research in
                computational and plasma physics. Thesis: Beam-Driven Instability in a
                Cairns-Distributed Plasma. Strong in Computational Physics, Statistical Physics,
                Mathematical Methods. Certified Google AI Essentials, Global Quantum Challenge
                2026. Built 3 interactive physics labs. Seeking MSc / Research Internship in
                Geophysics / Data Science / Scientific Computing in Germany/EU.
              </p>
            </Section>

            <Section title="Education">
              {education.map((item) => (
                <div key={item.degree}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-semibold text-slate-900">
                      {item.degree}{" "}
                      <span className="font-normal text-slate-500">
                        &mdash; {item.school}
                      </span>
                    </h3>
                    <p className="text-[12.5px] text-slate-500">
                      {item.period} &nbsp;&middot;&nbsp;{" "}
                      <span className="font-semibold text-[#1e3a8a]">{item.grade}</span>
                    </p>
                  </div>
                  {item.details.length > 0 && (
                    <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[12.5px] text-slate-600">
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </Section>

            <Section title="Projects">
              {projects.map((project) => (
                <div key={project.title}>
                  <h3 className="font-semibold text-slate-900">
                    {project.title}{" "}
                    <span className="font-normal text-slate-500">
                      &nbsp;&middot;&nbsp; {project.stack}
                    </span>
                  </h3>
                  <p className="text-[12.5px] text-slate-600">{project.description}</p>
                  <a
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[12.5px] text-[#1e3a8a] hover:underline"
                  >
                    {project.label}
                  </a>
                </div>
              ))}
              <p className="text-[12px] text-slate-500">
                Full portfolio:{" "}
                <a
                  href={`${contact.portfolio}/projects`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1e3a8a] hover:underline"
                >
                  {contact.portfolioLabel}/projects
                </a>
              </p>
            </Section>

            <Section title="Skills">
              <ul className="space-y-1.5">
                {skills.map((group) => (
                  <li key={group.label} className="flex gap-2">
                    <span aria-hidden="true" className="text-[#1e3a8a]">
                      &bull;
                    </span>
                    <span>
                      <span className="font-semibold text-slate-900">{group.label}:</span>{" "}
                      {group.items.join(", ")}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Certifications">
              <ul className="flex flex-wrap gap-x-2 gap-y-1">
                {certifications.map((cert, index) => (
                  <li key={cert.name}>
                    <span className="font-semibold text-slate-900">{cert.name}</span>{" "}
                    <span className="text-slate-500">({cert.date})</span>
                    {index < certifications.length - 1 && (
                      <span className="ml-2 text-slate-400" aria-hidden="true">
                        &middot;
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Experience">
              {experience.map((job) => (
                <div key={job.role}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-semibold text-slate-900">{job.role}</h3>
                    <p className="text-[12.5px] text-slate-500">
                      {job.place} &nbsp;&middot;&nbsp; {job.period}
                    </p>
                  </div>
                  <p className="mt-1 text-[12.5px] text-slate-600">{job.description}</p>
                </div>
              ))}
            </Section>

            <Section title="Languages">
              <ul className="flex flex-wrap gap-x-2 gap-y-1">
                {languages.map((language, index) => (
                  <li key={language.name}>
                    <span className="font-semibold text-slate-900">{language.name}</span>{" "}
                    <span className="text-slate-500">({language.level})</span>
                    {index < languages.length - 1 && (
                      <span className="ml-2 text-slate-400" aria-hidden="true">
                        &middot;
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </article>

        <p className="mt-6 text-center text-xs text-slate-500 print:hidden">
          ATS-friendly single-page CV &middot;{" "}
          <a href="/CV_Shoaib_Europe.pdf" download="CV_Shoaib_Europe.pdf" className="text-[#1e3a8a] hover:underline">
            CV_Shoaib_Europe.pdf
          </a>
        </p>
      </div>
    </div>
  )
}
