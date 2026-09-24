export type ProjectStatus = "LIVE" | "BUILT" | "UNDER DEVELOPMENT" | "ONGOING";
export type MockupType = "browser" | "mobile" | "none";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  status: ProjectStatus;
  statusLabel: string;
  tags: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  mockupType: MockupType;
  featured: boolean;
  /** image path relative to /public */
  image?: string;
}

export const projects: Project[] = [
  {
    id: "premium-women-salon",
    title: "Premium Women Salon",
    description:
      "A modern responsive salon website designed to present services, build trust and provide a polished online presence for a beauty business.",
    status: "LIVE",
    statusLabel: "LIVE DEMO",
    tags: ["Design", "Development", "Responsive UI"],
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    liveUrl: "https://premium-women-salon.vercel.app/",
    mockupType: "browser",
    featured: true,
    image: "/premium-women-salon.vercel.png",
  },
  {
    id: "salon-design-1",
    title: "Salon Design 1",
    description:
      "A responsive salon website concept exploring a clean, modern business-focused web experience.",
    status: "LIVE",
    statusLabel: "LIVE DEMO",
    tags: ["Design", "Responsive"],
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    liveUrl: "https://salon-design1-flame.vercel.app/",
    mockupType: "browser",
    featured: false,
    image: "/salon-design1-flame.vercel.png",
  },
  {
    id: "classmate",
    title: "ClassMate",
    description:
      "A university-focused productivity and class-management application designed to bring timetable, assignments, exams, announcements and study materials into one place.",
    status: "BUILT",
    statusLabel: "BUILT",
    tags: ["Mobile App", "Productivity", "University"],
    tech: ["Flutter", "Firebase", "Riverpod"],
    githubUrl: "https://github.com/satyam0346/ClassMate",
    mockupType: "mobile",
    featured: true,
    image: "/projects/classmate.png",
  },
];

export const buildingProjects: Project[] = [
  {
    id: "feeledger",
    title: "FeeLedger",
    description:
      "A fee and payment management platform designed to simplify student, batch and payment tracking for educational organizations.",
    status: "UNDER DEVELOPMENT",
    statusLabel: "UNDER DEVELOPMENT",
    tags: ["Dashboard", "Payments", "CRUD"],
    tech: ["Next.js", "TypeScript", "Database"],
    githubUrl: "https://github.com/satyam0346/feeledger",
    mockupType: "browser",
    featured: false,
  },
  {
    id: "kisansetu",
    title: "KisanSetu",
    description:
      "An ongoing team project developed for Smart India Hackathon 2026, focused on improving coordination and visibility in agricultural procurement.",
    status: "ONGOING",
    statusLabel: "SIH 2026 · ONGOING",
    tags: ["Full Stack", "SIH 2026", "Agriculture Technology"],
    tech: ["Full Stack"],
    mockupType: "none",
    featured: false,
  },
];
