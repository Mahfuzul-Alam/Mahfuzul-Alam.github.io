export interface PersonalData {
  name: string;
  initials: string;
  title: string;
  headline: string;
  shortBio: string;
  aboutBio: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  photoUrl: string;
  resumeUrl: string;
  highlights: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const personalData: PersonalData = {
  name: "Mahfuzul Alam",
  initials: "MA",
  title: "Software Development Engineer in Test (SDET)",
  headline: "Building reliable software through intelligent testing and automation.",
  shortBio:
    "Exploring the intersection of software quality, automation engineering, and applied AI.",
  aboutBio:
    "I'm a Software Development Engineer in Test focused on building reliable software through engineering-driven testing, test automation, and practical applications of emerging technologies. My work and interests span automation engineering, software quality, application testing, and AI-assisted software engineering.",
  email: "mahfuzshanto12@gmail.com",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/Mahfuzul-Alam",
  linkedin: "https://www.linkedin.com/in/1-mahfuzul-alam/",
  photoUrl: "/images/mahfuzul-alam.jpg",
  resumeUrl: "/documents/Mahfuzul_Alam_CV.pdf",
  highlights: [
    {
      label: "Professional Focus",
      value: "SDET & Automation",
      description: "Engineering-led testing across enterprise and web applications.",
    },
    {
      label: "Core Frameworks",
      value: "Playwright & Cypress",
      description: "End-to-end browser automation, API verification, and CI test suites.",
    },
    {
      label: "Industry Experience",
      value: "2.5+ Years",
      description: "Hands-on QA engineering, automation architecture, and defect lifecycle.",
    },
    {
      label: "Applied Innovation",
      value: "AI-Augmented QA",
      description: "Leveraging LLMs for test design, edge-case discovery, and requirement analysis.",
    },
  ],
};
