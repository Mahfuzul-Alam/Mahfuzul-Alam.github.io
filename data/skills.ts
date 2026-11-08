export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  type: string;
  verified: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Test Automation & Quality",
    description: "Modern automated frameworks, test runners, and structured testing methodologies.",
    skills: [
      "Playwright",
      "Cypress",
      "Selenium WebDriver",
      "End-to-End (E2E) Testing",
      "Regression Testing",
      "Smoke & Sanity Testing",
      "Exploratory Testing",
      "JMeter (Performance)",
    ],
  },
  {
    title: "Programming & Languages",
    description: "Languages used for automation frameworks, test scripting, and application engineering.",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL", "HTML5 & CSS3"],
  },
  {
    title: "API & Data Verification",
    description: "Interface testing, contract inspection, and backend data integrity.",
    skills: [
      "Postman",
      "RESTful APIs",
      "JSON Validation",
      "Relational Databases (SQL)",
      "Defect Lifecycle Management",
    ],
  },
  {
    title: "Developer Tools & CI/CD",
    description: "Version control, build tools, issue tracking, and automation pipelines.",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Jira Software",
      "Maven",
      "TestNG",
      "Page Object Model (POM)",
    ],
  },
  {
    title: "AI-Augmented QA & Workflows",
    description: "Leveraging intelligent language models and declarative automation.",
    skills: [
      "LLM Test Scenario Generation",
      "Edge-Case Identification",
      "Requirement Analysis with AI",
      "n8n Workflow Automation",
      "Heuristic Flakiness Analysis",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Cypress - Modern Automation Testing from Scratch + Frameworks",
    issuer: "Udemy",
    type: "Automation Frameworks",
    verified: true,
  },
  {
    title: "Building Test Automation Framework using Selenium and TestNG",
    issuer: "Coursera",
    type: "Enterprise Automation",
    verified: true,
  },
  {
    title: "Performance Testing with JMeter",
    issuer: "Coursera",
    type: "Load & Stress Testing",
    verified: true,
  },
];
