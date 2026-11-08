export interface ResearchThesis {
  title: string;
  degree: string;
  department: string;
  institution: string;
  date: string;
  status: string;
  authors: {
    name: string;
    studentId: string;
  }[];
  supervisor: {
    name: string;
    designation: string;
    department: string;
  };
  abstract: string;
  background: string;
  researchQuestions: string[];
  studiedPlatforms: {
    name: string;
    vendor: string;
    architectureType: string;
    keyTraits: string;
  }[];
  benchmarkUseCase: {
    name: string;
    description: string;
    entities: string[];
    operations: string[];
    duration: string;
  };
  comparisonMatrix: {
    category: string;
    features: {
      feature: string;
      outSystems: boolean;
      zohoCreator: boolean;
      powerApps: boolean;
      salesforce: boolean;
    }[];
  }[];
  keyFindings: string[];
  limitations: string[];
}

export interface ResearchData {
  thesis: ResearchThesis;
  researchInterests: {
    title: string;
    description: string;
    topics: string[];
  }[];
  independentExperiments: {
    title: string;
    status: "Active Exploration" | "Planned" | "Prototyped";
    description: string;
    relevance: string;
  }[];
}

export const researchData: ResearchData = {
  thesis: {
    title: "A Comparison of Low Code Development Platforms in Terms of Convenience",
    degree: "Bachelor of Science in Computer Science",
    department: "Department of Computer Science, Faculty of Science & IT",
    institution: "American International University-Bangladesh (AIUB)",
    date: "May 2022",
    status: "Academic Project Thesis (Completed & Defended)",
    authors: [
      { name: "Faiaz Ben Reza", studentId: "18-36655-1" },
      { name: "Mahfuzul Alam", studentId: "18-36746-1" },
      { name: "Tarif Sadman", studentId: "18-36466-1" },
      { name: "Yasmin Sultana", studentId: "18-36848-1" },
    ],
    supervisor: {
      name: "Mir Md. Kawsur",
      designation: "Lecturer",
      department: "Department of Computer Science, AIUB",
    },
    abstract:
      "Low-code development platforms are simple visual environments that are increasingly being marketed and promoted by large IT corporations to enable citizen developers to construct software systems despite having no programming skills. The stated benefit of the latest trend in Low-Code Application Development is convenient and easy application development without extensive development abilities. Understanding and evaluating the LCDP to be used for the specific problem at hand are tough tasks, owing to the fact that decision-makers must choose from hundreds of diverse platforms, which are impossible to evaluate without specialized assistance. As a result, a complete taxonomy is required to expand on the existing low-code platforms and to assist users in determining which platforms are most fit for their needs. We evaluate these claims for four Low-Code platforms in a time-constrained experiment by creating a practical use case. While this was possible in a relatively short period of time for the majority of our use cases, the platforms varied greatly and technical expertise is still necessary for non-trivial applications. This research presents a technical survey of various LCDPs using a proposed conceptual comparative approach. To extract the functions and services that each analyzed platform may provide, a comparable set of characteristics was identified by researching four sample LCDPs. The ultimate goal is to make it easier to comprehend and compare the low-code platforms that can best meet the needs of a given user.",
    background:
      "Low-code development platforms (LCDPs) combine all or most of the tools and components necessary for software delivery into a single environment (unifying GUI modeling, database creation, business logic, and deployment). However, decision-makers face difficulty evaluating convenience claims across platforms without empirical comparison. This research conducted a 6-month hands-on comparative study across four representative market leaders.",
    researchQuestions: [
      "To what extent do Low-Code Development platforms make application development more convenient and user-friendly for people with little or no programming experience?",
      "What features do these platforms all have in common?",
      "What are the results of low-code platforms developed applications?",
    ],
    studiedPlatforms: [
      {
        name: "OutSystems",
        vendor: "OutSystems Inc.",
        architectureType: "Full Code Generation (C#/.NET, JS, HTML/CSS)",
        keyTraits:
          "Visual model-driven full-stack IDE with one-click deployment, graphical workflow editor, AI-enabled logic, and local or cloud hosting without proprietary lock-in.",
      },
      {
        name: "Zoho Creator",
        vendor: "Zoho Corporation",
        architectureType: "Proprietary Cloud Runtime (Deluge Scripting)",
        keyTraits:
          "Form-centric rapid app builder with native data centers, built-in and configurable workflows, and seamless integration into the Zoho product suite.",
      },
      {
        name: "Microsoft PowerApps",
        vendor: "Microsoft Corporation",
        architectureType: "Office 365 & Dataverse Runtime (Point-and-Click)",
        keyTraits:
          "Tightly integrated with Microsoft Office 365, SharePoint, and Teams, utilizing Excel-like declarative formulas and connectors across Microsoft services.",
      },
      {
        name: "Salesforce Platform",
        vendor: "Salesforce.com, inc.",
        architectureType: "Metadata-Driven Cloud Platform (Lightning / Heroku)",
        keyTraits:
          "Enterprise metadata-driven architecture with visual drag-and-drop builders, AI-enabled business logic, graphical workflow editors, and CRM extensibility.",
      },
    ],
    benchmarkUseCase: {
      name: "Contact Management Application",
      description:
        "A multi-screen benchmark system built from scratch on each platform following platform defaults without custom hand-written code, implementing authentication, data entry forms, searchable listings, and detail management.",
      entities: [
        "Login (login_id, username, password)",
        "User (id, name, mobile_number, user_email, user_address)",
        "Contacts (id, name, mobile, email, address, type)",
      ],
      operations: [
        "User Authentication (Login / Logout)",
        "View Contact Directory & Search",
        "Add New Contact with Validation",
        "Edit Existing Contact Records",
        "Delete Contact Records with Confirmation",
      ],
      duration: "6 Months of iterative development and comparative analysis",
    },
    comparisonMatrix: [
      {
        category: "UI & Interaction Paradigm",
        features: [
          { feature: "Drag-and-drop designer", outSystems: true, zohoCreator: true, powerApps: false, salesforce: true },
          { feature: "Point-and-click approach", outSystems: false, zohoCreator: false, powerApps: true, salesforce: false },
          { feature: "Pre-built forms and reports", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "Pre-built dashboards", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "Dedicated forms designer", outSystems: false, zohoCreator: true, powerApps: true, salesforce: false },
        ],
      },
      {
        category: "Workflows & Business Logic",
        features: [
          { feature: "Progress tracking", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "Built-in workflows", outSystems: false, zohoCreator: true, powerApps: false, salesforce: true },
          { feature: "Configurable workflows", outSystems: false, zohoCreator: true, powerApps: false, salesforce: true },
          { feature: "Business rules engine", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "Graphical workflow editor", outSystems: true, zohoCreator: false, powerApps: false, salesforce: true },
          { feature: "AI-enabled business logic", outSystems: true, zohoCreator: false, powerApps: false, salesforce: true },
        ],
      },
      {
        category: "Integration & Interoperability",
        features: [
          { feature: "Interoperability with external services", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "Connection with external data sources", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
        ],
      },
      {
        category: "Security & Collaboration",
        features: [
          { feature: "Application security", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "Platform security", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "Offline collaboration support", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "Online real-time collaboration", outSystems: true, zohoCreator: false, powerApps: false, salesforce: true },
        ],
      },
      {
        category: "Architecture & Deployment",
        features: [
          { feature: "Real code generation (e.g. C#/.NET)", outSystems: true, zohoCreator: false, powerApps: false, salesforce: false },
          { feature: "Models interpreted at run-time", outSystems: false, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "Deployment to cloud infrastructure", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "Deployment to on-premise/local infrastructures", outSystems: true, zohoCreator: false, powerApps: false, salesforce: true },
          { feature: "Scalability (users, data traffic, storage)", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
        ],
      },
    ],
    keyFindings: [
      "Rapid Prototype Feasibility: All four platforms successfully allowed constructing the benchmark Contact Management System rapidly using built-in drag-and-drop mechanisms without requiring external database setup or initial custom code.",
      "Technical Expertise Still Required: While citizen developers can quickly build straightforward data-entry CRUD tools, technical engineering expertise remains essential for non-trivial logic, third-party API integration, and edge-case handling.",
      "Toolchain Consolidation: Unlike traditional software development that requires juggling disjointed IDEs, ORM frameworks, database consoles, and build tools, low-code platforms unify these components into a single visual environment, reducing toolchain transition overhead.",
      "Security Analysis Gap: Development tools provide static security code analysis during build time, but lack dynamic application security testing (DAST) analyzing vulnerabilities during runtime.",
      "Customization & Hardware Limits: Hardware and native language capabilities are constrained compared to traditional programming, varying widely between code-generating platforms (OutSystems) and runtime-interpreted models (Zoho, PowerApps).",
    ],
    limitations: [
      "Full developer experience in most low-code environments requires paid enterprise subscriptions; evaluations were constrained by trial tier capabilities.",
      "All student developers had academic programming backgrounds, which could influence perceptions of low-code ease of use compared to absolute non-technical citizen developers.",
      "High-concurrency enterprise load testing and dynamic runtime vulnerability fuzzing were beyond the experimental scope.",
    ],
  },
  researchInterests: [
    {
      title: "AI in Software Engineering & Automated Test Synthesis",
      description:
        "Investigating how Large Language Models (LLMs) can systematically derive test specifications, discover edge-case boundary conditions, and assist regression test maintenance without hallucinating false positives.",
      topics: [
        "LLM-assisted test case derivation from user stories",
        "Automated edge-case and mutation discovery",
        "Deterministic assertion synthesis for Playwright & Cypress",
      ],
    },
    {
      title: "Software Reliability & CI/CD Test Flakiness",
      description:
        "Empirical study of non-deterministic automated tests, execution order dependencies, and statistical heuristic models for identifying test drift in continuous integration pipelines.",
      topics: [
        "Heuristic detection of intermittent test failures from JUnit XML",
        "CI/CD build pipeline stability metrics",
        "Root-cause triage of asynchronous UI timing anomalies",
      ],
    },
    {
      title: "Quality Engineering & Low-Code Paradigms",
      description:
        "Examining how low-code/no-code platforms interact with automated testing workflows, verification of visual declarative systems, and security validation in rapid application delivery.",
      topics: [
        "Testability and automated regression of low-code architectures",
        "Static vs Dynamic security analysis in rapid app development",
        "Balancing speed of visual assembly with long-term software quality",
      ],
    },
  ],
  independentExperiments: [
    {
      title: "Heuristic Test Flakiness Modeling in JUnit Artifacts",
      status: "Prototyped",
      description:
        "Investigating non-intrusive, statistical flakiness indicators derived purely from JUnit XML test outputs across consecutive builds, validated within the RunLens project.",
      relevance:
        "Provides QA teams with immediate visibility into test instability without requiring custom runtime instrumentation.",
    },
    {
      title: "Prompt Architecture for Structured Test Scenario Derivation",
      status: "Active Exploration",
      description:
        "Exploring few-shot prompt structures that guide LLMs to produce structured, reproducible Gherkin/BDD scenarios from ambiguous product requirements.",
      relevance:
        "Aims to reduce human cognitive load during sprint refinement while minimizing missed edge cases.",
    },
  ],
};
