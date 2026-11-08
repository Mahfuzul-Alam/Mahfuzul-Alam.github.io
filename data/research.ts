export interface ResearchData {
  thesis: {
    title: string;
    degree: string;
    institution: string;
    year: string;
    status: string;
    abstract: string;
    background: string;
    problem: string;
    objectives: string[];
    methodology: {
      description: string;
      criteria: {
        criterion: string;
        description: string;
      }[];
    };
    keyObservations: string[];
    limitations: string[];
  };
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
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    year: "2023",
    status: "Undergraduate Thesis (Completed)",
    abstract:
      "As demand for rapid software delivery accelerates, Low-Code Development Platforms (LCDPs) have emerged as an alternative to traditional hand-coded development. This study investigated and compared leading low-code platforms to evaluate user convenience, architectural flexibility, development speed, and learning curves for software engineers and non-technical builders.",
    background:
      "Enterprise digital transformation requires increasingly swift application turnaround times. Low-Code Development Platforms abstract away boilerplate code and infrastructure setup through visual modeling, drag-and-drop interfaces, and pre-built components. However, questions remain regarding how these platforms impact engineering autonomy, developer experience, and non-functional requirements such as maintainability and custom logic integration.",
    problem:
      "Selecting an appropriate development platform requires balancing speed of initial delivery with long-term engineering convenience. Without an empirical evaluation framework, teams struggle to determine whether low-code abstractions provide genuine productivity gains or impose restrictive architectural constraints.",
    objectives: [
      "Analyze the operational workflow and interface ergonomics of representative low-code development platforms.",
      "Establish an evaluation framework centering on developer convenience, setup friction, and extensibility.",
      "Compare how platforms handle common software engineering concerns such as database modeling, custom business logic, and API connectivity.",
      "Identify trade-offs between rapid visual assembly and engineering flexibility.",
    ],
    methodology: {
      description:
        "The study established a comparative matrix evaluating platform features across multiple development lifecycle dimensions, focusing on qualitative ergonomics and setup efficiency.",
      criteria: [
        {
          criterion: "Development Speed & Visual Ergonomics",
          description:
            "Efficiency of UI generation, component drag-and-drop mechanics, and pre-built module availability.",
        },
        {
          criterion: "Extensibility & Custom Logic",
          description:
            "Ease of integrating custom scripts, bespoke code, and third-party RESTful APIs.",
        },
        {
          criterion: "Learning Curve & Onboarding",
          description:
            "Time required for developers to navigate tooling, understand platform abstractions, and deploy functional applications.",
        },
        {
          criterion: "Maintenance & Debugging",
          description:
            "Visibility into runtime logs, error diagnostics, and iteration speed when revising application logic.",
        },
      ],
    },
    keyObservations: [
      "Low-code platforms substantially accelerate initial prototype delivery and administrative CRUD application development.",
      "Convenience is strongly correlated with project complexity: platforms excel in standard data-entry workflows but present friction when implementing non-standard business rules.",
      "Vendor lock-in and limited direct control over underlying generated code represent significant considerations for long-term maintainability.",
    ],
    limitations: [
      "Study was conducted within academic evaluation parameters; performance under high-concurrency enterprise load was outside the scope.",
      "Platform feature sets in the low-code domain evolve rapidly; observations represent platform state at the time of study.",
    ],
  },
  researchInterests: [
    {
      title: "AI in Software Engineering & Test Generation",
      description:
        "Investigating how Large Language Models (LLMs) can reliably synthesize test specifications, identify boundary conditions, and assist in regression test maintenance without hallucinating false verifications.",
      topics: [
        "LLM-assisted test case derivation from user stories",
        "Automated edge-case and mutation discovery",
        "Synthesizing reliable end-to-end assertions",
      ],
    },
    {
      title: "Software Reliability & Test Flakiness",
      description:
        "Empirical study of non-deterministic automated tests, execution order dependencies, and statistical heuristic models for identifying test drift in continuous integration pipelines.",
      topics: [
        "Heuristic detection of intermittent test failures",
        "CI/CD build pipeline stability metrics",
        "Root-cause classification of asynchronous UI timing bugs",
      ],
    },
    {
      title: "Quality Engineering & Low-Code Paradigms",
      description:
        "Examining how low-code/no-code platforms interact with automated testing workflows and verifying quality assurance for visual and declarative systems.",
      topics: [
        "Testability of visual and declarative application architectures",
        "Workflow automation pipelines in software delivery",
        "Balancing development velocity with strict QA standards",
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
