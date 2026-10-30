export type Project = {
  title: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    title: "SaaS Design System",
    description: "Premium Design System with 30+ reusable components.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    liveUrl: "https://saas-design-system-5ki9.vercel.app",
    githubUrl: "https://github.com/kakarshoaibkhan5/saas-design-system",
  },
  {
    title: "SaaS Landing Frontend",
    description: "Modern responsive landing page for SaaS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "https://02-saas-landing-frontend.vercel.app",
    githubUrl: "https://github.com/kakarshoaibkhan5/02-saas-landing-frontend",
  },
  {
    title: "Enterprise API Backend",
    description: "Scalable Node.js backend with JWT auth.",
    tech: ["Node.js", "Express", "MongoDB"],
    liveUrl: "https://enterprise-api-backend.onrender.com",
    githubUrl: "https://github.com/kakarshoaibkhan5/enterprise-api-backend",
  },
  {
    title: "Fullstack Task SaaS",
    description: "Complete task management SaaS with teams.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    liveUrl: "https://fullstack-task-saas.vercel.app",
    githubUrl: "https://github.com/kakarshoaibkhan5/fullstack-task-saas",
  },
  {
    title: "AI Resume Parser",
    description: "AI tool that parses resumes using NLP.",
    tech: ["Python", "Streamlit", "OpenAI"],
    liveUrl: "https://ai-resume-parser-kakarshoaib.streamlit.app",
    githubUrl: "https://github.com/kakarshoaibkhan5/ai-resume-parser",
  },
]
