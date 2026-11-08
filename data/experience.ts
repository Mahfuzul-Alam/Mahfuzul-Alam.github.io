export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  projects: {
    name: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
  }[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Efficient Software Solutions",
    role: "Software Development Engineer in Test (SDET)",
    period: "May 2024 – Present",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    summary:
      "Leading automated testing initiatives and quality engineering across enterprise-scale multi-server platforms and ERP systems. Driving the adoption of Playwright, Cypress, and AI-assisted workflows to elevate test coverage and release confidence.",
    highlights: [
      "Engineered comprehensive end-to-end automation suites using Playwright and Cypress for complex multi-tier web applications.",
      "Integrated LLM-assisted workflows to accelerate test scenario generation, analyze edge cases from specification documents, and expand regression coverage.",
      "Managed full defect lifecycle in Jira: logging, severity prioritization, reproduction triage, and collaboration with developers to systematically eliminate recurring flaws.",
      "Conducted extensive functional, exploratory, smoke, sanity, and API integration testing prior to production deployments.",
      "Progressed from Trainee QA Engineer through Junior Software QA to SDET based on engineering impact and technical execution.",
    ],
    projects: [
      {
        name: "Smart Lotto",
        description:
          "Multi-server fundraising platform with distributed player, club, and administrative management modules.",
        responsibilities: [
          "Automated end-to-end user workflows for player and club interfaces using Cypress and Playwright.",
          "Conducted smoke, sanity, regression, and exploratory test cycles across independent server modules.",
          "Verified transaction processing, authentication boundaries, and state consistency across environments.",
        ],
        technologies: ["Playwright", "Cypress", "JavaScript", "REST APIs", "Jira"],
      },
      {
        name: "Churchfield Home Services",
        description:
          "Flagship ERP platform powering nationwide home retrofitting and energy service operations in Ireland.",
        responsibilities: [
          "Maintained quality criteria across customer-facing front-end portals and administrative back-office workflows.",
          "Designed and executed exploratory, functional, and smoke test suites for workflow dispatching and billing records.",
          "Partnered closely with product teams to validate business requirements against deployed releases.",
        ],
        technologies: ["Manual Testing", "API Testing", "Postman", "Agile", "Jira"],
      },
    ],
    technologies: [
      "Playwright",
      "Cypress",
      "JavaScript",
      "Postman",
      "REST APIs",
      "Jira",
      "LLM Prompting",
      "Agile/Scrum",
    ],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  specialization: string;
  thesis: {
    title: string;
    overview: string;
    significance: string;
  };
}

export const education: EducationItem = {
  degree: "B.Sc. in Computer Science & Engineering",
  institution: "American International University-Bangladesh (AIUB)",
  period: "2018 – 2023",
  location: "Dhaka, Bangladesh",
  specialization: "Software Engineering",
  thesis: {
    title: "A Comparison of Low Code Development Platforms in Terms of Convenience",
    overview:
      "A systematic evaluation of leading low-code development platforms examining developer productivity, learning curve, functional extensibility, and interface ergonomics.",
    significance:
      "Investigated how visual and declarative abstraction layers influence software development lifecycle speed and non-functional requirements.",
  },
};
