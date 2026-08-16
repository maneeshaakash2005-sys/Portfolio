// ---------------------------------------------------------------------------
// All content here is sourced directly from Maneesha Akash's CV.
// Do not add claims, employers, credentials, or metrics not present there.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Maneesha Akash",
  title: "AI Undergraduate | Aspiring Software & AI Engineer",
  email: "maneeshaakash2005@gmail.com",
  phone: "0728472539",
  location: "Malabe, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/maneesha-akash-0a906242a/",
  linkedinLabel: "linkedin.com/in/maneesha-akash-0a906242a",
  github: "https://github.com/maneeshaakash2005-sys",
  githubLabel: "github.com/maneeshaakash2005-sys",
  cvPath: "/Maneesha_Akash_Resume.pdf",
  intro:
    "I'm an AI undergraduate passionate about building intelligent systems, SaaS products, and technology solutions that solve real-world problems. I enjoy turning ideas into real software.",
};

export const aboutHeading = "Building software and AI solutions that matter.";

export interface ValueProp {
  title: string;
  description: string;
}

export const valueProps: ValueProp[] = [
  {
    title: "Problem Solver",
    description: "I enjoy solving real-world problems through code and logic.",
  },
  {
    title: "AI Enthusiast",
    description: "Exploring the power of AI and Machine Learning to build useful solutions.",
  },
  {
    title: "Product Builder",
    description: "Building and shipping products that create value for users.",
  },
  {
    title: "Team Player",
    description: "I value collaboration, communication, and continuous learning.",
  },
];

export interface CurrentlyBuildingItem {
  name: string;
  description: string;
}

export const currentlyBuilding: CurrentlyBuildingItem[] = [
  { name: "MailPilot AI", description: "AI-assisted email operations and automation, multi-tenant." },
  { name: "OrderBase", description: "SaaS platform for small businesses to sell and manage orders online." },
  { name: "BuildNET", description: "A social network connecting startup founders, investors, and professionals." },
];

export const stats = [
  { label: "Current education", value: "AI Undergraduate" },
  { label: "Projects listed in CV", value: "6+ Projects" },
  { label: "Professional experience", value: "2024–2025" },
];

export const about = {
  paragraphs: [
    "I'm currently pursuing a BSc in Artificial Intelligence at SLIIT, Sri Lanka, expected to complete in 2028. My interests sit at the intersection of Artificial Intelligence, Machine Learning, Software Development, Data Analytics, and Generative AI.",
    "Alongside my degree, I'm developing practical programming skills in Python, Java, and SQL, and I enjoy building technology-driven projects — from AI-assisted tools to multi-tenant SaaS platforms — to apply what I'm learning in the classroom to real, working software.",
  ],
};

export const education = [
  {
    degree: "BSc Artificial Intelligence",
    institution: "SLIIT, Sri Lanka",
    period: "Currently Reading · Expected 2028",
    description:
      "Studying Artificial Intelligence with a focus on programming, machine learning, data science, software development, and intelligent systems.",
    current: true,
  },
  {
    degree: "International Foundation in Artificial Intelligence",
    institution: "SLIIT Connect, Malabe, Sri Lanka",
    period: "",
    description: "",
    current: false,
  },
  {
    degree: "Professional Logistics & Supply Chain Management",
    institution: "Zabeel International Institute of Management, Dubai, UAE",
    period: "",
    description: "",
    current: false,
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "National School, Pannala",
    period: "",
    description: "",
    current: false,
  },
];

export const experience = [
  {
    role: "Supply Chain Analyst",
    company: "Amazon Fulfillment Center, Abu Dhabi",
    period: "September 2024 – February 2025",
    points: [
      "Maintained accurate inventory and warehouse records.",
      "Performed inventory tracking and stock verification.",
      "Ensured accurate documentation of incoming goods.",
      "Improved storage efficiency through organized stock management.",
      "Worked in a fast-paced, target-driven environment.",
      "Collaborated effectively within a multicultural team.",
      "Maintained high standards of workplace safety and quality.",
    ],
    demonstrates: [
      "Analytical thinking",
      "Problem solving",
      "Attention to detail",
      "Teamwork",
      "Operations awareness",
    ],
  },
];

export const skills = {
  programming: [
    { name: "Python", level: "Learning" },
    { name: "Java", level: null },
    { name: "SQL", level: null },
    { name: "C++", level: null },
  ],
  toolsPlatforms: ["Microsoft Excel", "Microsoft Word", "Git", "GitHub"],
  aiData: [
    "Artificial Intelligence Fundamentals",
    "Machine Learning Fundamentals",
    "Data Analytics",
  ],
  databases: ["Database Concepts"],
  portfolioTech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Framer Motion",
  ],
};

export const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Communication",
  "Teamwork",
  "Time Management",
  "Fast Learner",
  "Adaptability",
  "Leadership",
];

export const certificates = [
  { name: "STCW Certificate" },
  { name: "Maritime English" },
  { name: "Pre Sea Training Course" },
];

export const languages = ["English", "Sinhala"];

export type ProjectCategory = "ai" | "saas" | "web" | "mobile";
export type ProjectTag =
  | "AI"
  | "SaaS"
  | "Web"
  | "Mobile"
  | "IoT"
  | "University"
  | "Startup";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  contribution?: string;
  github?: string;
  liveDemo?: string;
  categories: ProjectCategory[];
  tags: ProjectTag[];
  featured: boolean;
  /** Illustrative UI preview — a design mockup, not a screenshot of a live product. */
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "mailpilot-ai",
    name: "MailPilot AI",
    tagline: "Multi-tenant SaaS platform for AI-assisted email operations and automation.",
    overview:
      "MailPilot AI is a multi-tenant SaaS platform built to bring AI assistance into everyday email operations, helping automate and streamline how email-based workflows are handled.",
    solution:
      "A multi-tenant architecture that applies AI to assist with and automate email operations for multiple organizations from a single platform.",
    technologies: ["AI Automation", "Multi-tenant SaaS", "Email Operations"],
    github: undefined,
    liveDemo: undefined,
    categories: ["ai", "saas"],
    tags: ["AI", "SaaS"],
    featured: true,
    image: "/Portfolio/images/projects/mailpilot.png",
  },
  {
    slug: "proposal-ai",
    name: "Proposal-AI",
    tagline: "AI-powered automation tool designed to generate business proposals.",
    overview:
      "Proposal-AI is an automation tool focused on using AI to generate business proposals, reducing the manual effort involved in drafting them.",
    solution: "AI-driven automation applied to the business proposal generation process.",
    technologies: ["AI Automation", "Document Generation"],
    github: undefined,
    liveDemo: undefined,
    categories: ["ai"],
    tags: ["AI", "Startup"],
    featured: true,
    image: "/Portfolio/images/projects/proposal-ai.png",
  },
  {
    slug: "orderbase",
    name: "OrderBase SaaS",
    tagline: "Multi-tenant ordering system enabling businesses to manage orders at scale.",
    overview:
      "OrderBase is a SaaS platform designed to help small businesses create online stores, manage products, receive customer orders, and manage business operations from a centralized dashboard. It was developed as a startup-oriented project.",
    solution:
      "A centralized, multi-tenant dashboard covering online store creation, product management, and order handling for multiple businesses.",
    technologies: ["Multi-tenant SaaS", "E-commerce Operations", "Dashboard"],
    github: "https://github.com/maneeshaakash2005-sys/OrderBaselk",
    liveDemo: undefined,
    categories: ["saas", "web"],
    tags: ["SaaS", "Web", "Startup"],
    featured: true,
    image: "/Portfolio/images/projects/orderbase.png",
  },
  {
    slug: "anythinglk",
    name: "AnythingLK",
    tagline: "Marketplace website built on the OrderBase platform.",
    overview:
      "AnythingLK is a marketplace concept designed to help local businesses and sellers reach customers online. It extends the OrderBase ecosystem rather than existing as a standalone, unrelated system.",
    solution:
      "A marketplace layer built on top of OrderBase, giving local sellers a shared storefront to reach customers.",
    technologies: ["Marketplace", "Web Platform", "OrderBase Ecosystem"],
    github: undefined,
    liveDemo: undefined,
    categories: ["saas", "web"],
    tags: ["Web", "SaaS", "Startup"],
    featured: true,
    image: "/Portfolio/images/projects/anythinglk.png",
  },
  {
    slug: "rideaware",
    name: "RideAware",
    tagline: "Android mobile application for a smart motorcycle helmet focused on rider safety.",
    overview:
      "RideAware was developed as a university project involving a smart motorcycle helmet and an ESP32-based system. The system is designed around an emergency SOS concept for motorcycle riders, connecting the helmet hardware with the mobile application to support emergency alerts.",
    solution:
      "An ESP32-based helmet system paired with an Android app, built around an emergency SOS concept connecting helmet hardware to a mobile application.",
    technologies: ["Android", "IoT", "ESP32", "Hardware/Software Integration"],
    github: undefined,
    liveDemo: undefined,
    categories: ["mobile"],
    tags: ["Mobile", "IoT", "University"],
    featured: true,
    image: "/Portfolio/images/projects/rideaware.png",
  },
  {
    slug: "buildnet",
    name: "BuildNET",
    tagline: "A social network connecting startup founders, investors, and professionals. (Work in Progress)",
    overview:
      "BuildNET is a social networking platform designed to connect startup founders, investors, and industry professionals in one ecosystem. It helps founders discover potential investors, connect with professionals for expert guidance, share business updates, and build valuable business relationships. Currently a work in progress.",
    solution:
      "A dedicated networking layer for the startup ecosystem, connecting founders with investors and industry professionals.",
    technologies: ["Social Networking", "Startup Ecosystem", "Web Platform"],
    github: undefined,
    liveDemo: undefined,
    categories: ["saas", "web"],
    tags: ["SaaS", "Web", "Startup"],
    featured: true,
  },
  {
    slug: "portfolio",
    name: "Personal Portfolio Website",
    tagline: "Personal website showcasing projects, skills, education, and professional experience.",
    overview:
      "This portfolio itself — built to present my projects, skills, education, and experience in one place.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/maneeshaakash2005-sys",
    liveDemo: undefined,
    categories: ["web"],
    tags: ["Web"],
    featured: false,
    image: "/Portfolio/images/projects/portfolio.png",
  },
];

export interface BuildingProject {
  name: string;
  description: string;
}

export const buildingProjects: BuildingProject[] = [
  {
    name: "OrderBase",
    description:
      "A SaaS platform helping small businesses create online stores, manage products, and handle customer orders from a centralized dashboard.",
  },
  {
    name: "AnythingLK",
    description:
      "A marketplace concept extending the OrderBase ecosystem, helping local businesses and sellers reach customers online.",
  },
  {
    name: "MailPilot AI",
    description:
      "A multi-tenant SaaS platform bringing AI assistance to everyday email operations and automation.",
  },
  {
    name: "Proposal-AI",
    description:
      "An AI-powered automation tool designed to generate business proposals.",
  },
  {
    name: "BuildNET",
    description:
      "A social networking platform designed to connect startup founders, investors, and industry professionals — helping founders discover investors, connect with professionals for guidance, share business updates, and build relationships.",
  },
];

export const filterCategories: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "AI / Machine Learning", value: "ai" },
  { label: "SaaS", value: "saas" },
  { label: "Web Development", value: "web" },
  { label: "Mobile / IoT", value: "mobile" },
];
