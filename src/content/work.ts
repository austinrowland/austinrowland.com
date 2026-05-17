export type WorkKind = "role" | "project" | "milestone" | "venture";

export type WorkEntry = {
  title: string;
  organization: string;
  kind: WorkKind;
  startDate: string;
  endDate?: string;
  question: string;
  summary: string;
  impact: string[];
  technologies: string[];
  featured: boolean;
};

export const workEntries: WorkEntry[] = [
  {
    title: "Founding Forward Deployed Engineer",
    organization: "Postman",
    kind: "role",
    startDate: "2025-10",
    question:
      "How do we help builders and enterprises ship next generation of software through better API infrastructure and agentic workflows?",
    summary:
      "Works close to strategic builders and enterprise teams to connect API infrastructure with emerging agentic software workflows.",
    impact: [
      "Supports API infrastructure used by 40M+ developers worldwide.",
      "Brings customer implementation context back into product and platform decisions.",
    ],
    technologies: ["APIs", "Agentic workflows", "Enterprise infrastructure"],
    featured: true,
  },
  {
    title: "Software Engineer",
    organization: "Palo Alto Networks",
    kind: "role",
    startDate: "2024-08",
    endDate: "2025-10",
    question:
      "How do we enable secure software and network access to keep enterprises building the future?",
    summary:
      "Built software for enterprise security products with a focus on secure access and reliability at production scale.",
    impact: [
      "Contributed to secure software and network access capabilities for enterprise customers.",
    ],
    technologies: ["Enterprise security", "Network access", "Cloud software"],
    featured: true,
  },
  {
    title: "Founder",
    organization: "Avova Health",
    kind: "venture",
    startDate: "2024-01",
    endDate: "2024-07",
    question:
      "How can preventative health software help people understand and act on their own data to transform their health outcomes?",
    summary:
      "Explored a preventative health product centered on personal health data, user understanding, and behavior change.",
    impact: [
      "Interviewed 100+ patients to shape the problem space and product direction.",
      "Translated patient discovery into early product requirements for preventative health software.",
    ],
    technologies: ["Health data", "Patient discovery", "Product strategy"],
    featured: true,
  },
  {
    title: "Executive Director / Program Manager",
    organization: "Tikkun Olam Makers",
    kind: "project",
    startDate: "2022-08",
    endDate: "2024-05",
    question:
      "How can we build the most impactful assistive technology products and change how people interact with their disabilities?",
    summary:
      "Led assistive technology programs connecting people with disabilities, makers, and product teams around practical accessibility needs.",
    impact: [
      "Managed programs focused on building assistive technology products around direct user needs.",
    ],
    technologies: [
      "Assistive technology",
      "Program management",
      "Product discovery",
    ],
    featured: true,
  },
  {
    title: "Software Engineer Intern",
    organization: "Cisco Systems",
    kind: "role",
    startDate: "2023-05",
    endDate: "2023-12",
    question:
      "How do we secure enterprise cloud workloads at scale to keep enterprise products secure?",
    summary:
      "Worked on software for securing enterprise cloud workloads in production product environments.",
    impact: [
      "Contributed engineering work toward enterprise cloud workload security.",
    ],
    technologies: ["Cloud security", "Enterprise software"],
    featured: false,
  },
  {
    title: "Product Engineer",
    organization: "Passive Haptic Rehab Gloves Research Lab",
    kind: "project",
    startDate: "2023-08",
    endDate: "2023-12",
    question:
      "How can computer vision and rehab hardware help stroke patients rebuild lost motor control?",
    summary:
      "Built product and engineering pieces for rehabilitation hardware research combining computer vision and passive haptic feedback.",
    impact: [
      "Advanced rehab hardware exploration for stroke patient motor control recovery.",
    ],
    technologies: ["Computer vision", "Rehab hardware", "Product engineering"],
    featured: false,
  },
];

export function getSortedWorkEntries(): WorkEntry[] {
  return [...workEntries].sort(
    (a, b) =>
      new Date(`${b.startDate}-01`).getTime() -
      new Date(`${a.startDate}-01`).getTime(),
  );
}

export function getFeaturedWork(): WorkEntry[] {
  return getSortedWorkEntries().filter((entry) => entry.featured);
}
