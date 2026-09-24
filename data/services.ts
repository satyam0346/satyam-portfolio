export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Websites",
    description:
      "Modern, responsive websites for businesses, professionals and local brands.",
    tags: ["Landing Pages", "Business Websites", "Responsive Design", "Deployment"],
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web Applications",
    description:
      "Practical web applications designed around specific workflows and business needs.",
    tags: ["Dashboards", "CRUD Systems", "Database Applications", "Custom Interfaces"],
  },
  {
    id: "ai-solutions",
    number: "03",
    title: "AI-Enhanced Solutions",
    description:
      "AI-assisted development and automation for faster workflows and smarter digital experiences.",
    tags: ["AI Integration", "Automation", "API Integration"],
  },
];
