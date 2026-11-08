export interface ResearchThesis {
  title: string;
  degree: string;
  department: string;
  institution: string;
  year: string;
  authors: string[];
  supervisor: {
    name: string;
    designation: string;
    department: string;
  };
  summary: string;
  problem: string;
  platforms: {
    name: string;
    vendor: string;
    approach: string;
    summary: string;
  }[];
  benchmarkApp: {
    name: string;
    summary: string;
    coreFeatures: string[];
  };
  takeaways: {
    title: string;
    description: string;
  }[];
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
    degree: "B.Sc. in Computer Science",
    department: "Department of Computer Science",
    institution: "American International University-Bangladesh (AIUB)",
    year: "2022",
    authors: ["Faiaz Ben Reza", "Mahfuzul Alam", "Tarif Sadman", "Yasmin Sultana"],
    supervisor: {
      name: "Mir Md. Kawsur",
      designation: "Lecturer",
      department: "Department of Computer Science, AIUB",
    },
    summary:
      "A 6-month empirical study evaluating developer convenience, rapid assembly tradeoffs, and architectural limits across four leading Low-Code Development Platforms (OutSystems, Zoho Creator, Microsoft PowerApps, and Salesforce) by implementing a standardized benchmark application.",
    problem:
      "Enterprise software teams face hundreds of competing low-code marketing claims. Without empirical side-by-side benchmarking, it is difficult to determine whether visual platforms genuinely speed up delivery or impose architectural constraints on non-trivial business logic.",
    platforms: [
      {
        name: "OutSystems",
        vendor: "OutSystems",
        approach: "Visual Code Generation",
        summary: "Full-stack model-driven development generating standard C#/.NET and web code without vendor lock-in.",
      },
      {
        name: "Zoho Creator",
        vendor: "Zoho",
        approach: "Cloud Forms & Workflows",
        summary: "Form-centric rapid app builder with native data centers and visual automation flows.",
      },
      {
        name: "Microsoft PowerApps",
        vendor: "Microsoft",
        approach: "Dataverse & Point-and-Click",
        summary: "Deep integration with Office 365, SharePoint, and Teams using declarative Excel-like logic.",
      },
      {
        name: "Salesforce Platform",
        vendor: "Salesforce",
        approach: "Metadata-Driven Cloud",
        summary: "Enterprise metadata architecture combining drag-and-drop tools with Heroku custom extensions.",
      },
    ],
    benchmarkApp: {
      name: "Contact Management Application",
      summary:
        "Built a complete CRUD benchmark system on all four platforms without custom hand-written code, testing how each platform handles relational data, authentication boundaries, search, and form validation.",
      coreFeatures: [
        "User authentication and session boundaries",
        "Searchable contact directories with dynamic filtering",
        "Form input validation and detail inspection",
        "Record update and deletion workflows",
      ],
    },
    takeaways: [
      {
        title: "Toolchain Unification",
        description:
          "Low-code environments consolidate fragmented traditional toolchains (IDE, database manager, UI editor, deployment pipelines) into a single visual surface, dramatically lowering initial project setup time.",
      },
      {
        title: "The Non-Trivial Logic Ceiling",
        description:
          "While citizen developers can quickly produce basic CRUD interfaces, technical engineering expertise remains vital once projects require custom business rules, complex API integrations, or stateful validation.",
      },
      {
        title: "Static vs. Dynamic Security Gap",
        description:
          "Platforms typically provide static code analysis during app assembly, but lack built-in dynamic application security testing (DAST) for inspecting runtime vulnerabilities.",
      },
    ],
    comparisonMatrix: [
      {
        category: "Visual Development & Ergonomics",
        features: [
          { feature: "Drag-and-drop UI designer", outSystems: true, zohoCreator: true, powerApps: false, salesforce: true },
          { feature: "Point-and-click interface builder", outSystems: false, zohoCreator: false, powerApps: true, salesforce: false },
          { feature: "Pre-built forms & dashboard templates", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
        ],
      },
      {
        category: "Business Logic & Workflows",
        features: [
          { feature: "Configurable business rules engine", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "Graphical workflow editor", outSystems: true, zohoCreator: false, powerApps: false, salesforce: true },
          { feature: "AI-assisted business logic", outSystems: true, zohoCreator: false, powerApps: false, salesforce: true },
        ],
      },
      {
        category: "Integration & Extensibility",
        features: [
          { feature: "External REST service interoperability", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "Third-party data source connectors", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
        ],
      },
      {
        category: "Architecture & Deployment",
        features: [
          { feature: "Real code generation (e.g. C#/.NET)", outSystems: true, zohoCreator: false, powerApps: false, salesforce: false },
          { feature: "Runtime metadata interpretation", outSystems: false, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "Cloud infrastructure deployment", outSystems: true, zohoCreator: true, powerApps: true, salesforce: true },
          { feature: "On-premise / local hosting support", outSystems: true, zohoCreator: false, powerApps: false, salesforce: true },
        ],
      },
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
