export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: string;
  category: string;
  summary: string;
  content: {
    sectionTitle: string;
    paragraphs: string[];
    codeBlock?: {
      language: string;
      code: string;
    };
  }[];
  references: string[];
}

export const articles: Article[] = [
  {
    slug: "heuristic-flakiness-detection-junit-artifacts",
    title: "Heuristic Flakiness Detection: Identifying Unstable Tests from JUnit Artifacts",
    subtitle:
      "How lightweight, client-side outcome aggregation can pinpoint non-deterministic tests without heavy CI instrumentation.",
    date: "November 2024",
    readingTime: "5 min read",
    category: "Software Quality & Reliability",
    summary:
      "Flaky tests introduce noise into CI/CD pipelines, draining engineering velocity. This article explains how empirical heuristic rules can extract reliable flakiness indicators directly from standard JUnit XML reports.",
    content: [
      {
        sectionTitle: "The Cost of CI Noise",
        paragraphs: [
          "Automated regression suites are built to deliver deterministic feedback: if code is healthy, tests pass; if a regression occurs, tests fail. When a test suite instead behaves non-deterministically—passing on one commit and failing on another without functional code modifications—it erodes trust in the deployment pipeline.",
          "Engineering teams often respond to flakiness by re-running failed jobs or muting suspect tests. While expedient, this masks underlying architectural instability and prolongs release cycles.",
        ],
      },
      {
        sectionTitle: "Extracting Value from Standard JUnit Artifacts",
        paragraphs: [
          "Virtually every modern automated test framework—Pytest, Playwright, Jest, JUnit 5, and Surefire—produces a standardized JUnit XML artifact upon execution. Rather than instrumenting application runtimes with heavyweight observability agents, a surprising amount of diagnostic intelligence can be extracted simply by aggregating these XML files across historical builds.",
          "By indexing tests using a composite key of classname and test name, we can trace individual test outcome transitions across multiple pipeline executions.",
        ],
        codeBlock: {
          language: "typescript",
          code: `// Composite test identifier
const testKey = \`\${testcase.classname || testsuite.name}#\${testcase.name}\`;

// Evaluating flakiness heuristic across recorded outcomes
function isPossibleFlaky(outcomes: TestOutcome[]): boolean {
  const nonSkipped = outcomes.filter(o => o.status !== 'skipped');
  const passes = nonSkipped.filter(o => o.status === 'passed').length;
  const failures = nonSkipped.filter(o => o.status === 'failed' || o.status === 'error').length;

  return nonSkipped.length >= 5 && passes >= 1 && failures >= 1;
}`,
        },
      },
      {
        sectionTitle: "Heuristic Classification vs Root Cause Diagnosis",
        paragraphs: [
          "It is critical to distinguish between a statistical heuristic and root cause verification. A heuristic does not claim to prove race conditions or environmental jitter; instead, it provides a mathematical triage signal. When an engineer sees a test tagged with 4 passes and 2 failures across 6 builds, they possess actionable evidence to inspect asynchronous waits, shared database fixtures, or network timeouts.",
          "By focusing on lightweight, client-side parsing—as implemented in the RunLens architecture—developers can inspect these signals instantly without privacy compromises or database operational overhead.",
        ],
      },
    ],
    references: [
      "Luo, Q. et al. 'An Empirical Analysis of Flaky Tests.' ACM SIGSOFT FSE, 2014.",
      "Google Testing Blog. 'Where do my flaky tests come from?' 2016.",
      "Martin Fowler. 'Eradicating Non-Determinism in Tests.' 2011.",
    ],
  },
  {
    slug: "augmenting-edge-case-discovery-llm-test-design",
    title: "Augmenting Edge-Case Discovery: Practical Strategies for LLM-Assisted Test Design",
    subtitle:
      "Leveraging generative AI as a systematic exploration partner to uncover boundary conditions without sacrificing engineering rigor.",
    date: "October 2024",
    readingTime: "6 min read",
    category: "Applied AI in QA",
    summary:
      "LLMs should not be treated as autonomous QA engineers that write untested code blindly. Instead, their greatest leverage in quality engineering lies in counterfactual requirement analysis, boundary condition derivation, and edge-case brainstorming.",
    content: [
      {
        sectionTitle: "Moving Beyond Blind Code Generation",
        paragraphs: [
          "Much of the current excitement around AI in software development focuses on automated code synthesis. However, for a Software Development Engineer in Test, generating hundreds of superficial automated scripts without deep domain context creates more technical debt than it resolves.",
          "The true high-leverage application of LLMs in quality engineering is not raw code typing; it is structured critical thinking and cognitive scenario expansion.",
        ],
      },
      {
        sectionTitle: "The Boundary Exploration Workflow",
        paragraphs: [
          "Human engineers are naturally biased toward validating the 'happy path'—the primary user journey intended by product specifications. LLMs, when prompted with rigorous persona constraints and negative condition directives, excel at brainstorming counterfactual scenarios.",
          "Examples include exploring simultaneous concurrent actions, expired session states, unusual Unicode string inputs, and asynchronous webhook receipt delays.",
        ],
        codeBlock: {
          language: "markdown",
          code: `Prompt Strategy:
1. Provide the structured requirement / API specification.
2. Direct the model to assume an adversarial QA perspective.
3. Explicitly request 4 categories of scenarios:
   - Boundary & Partition values
   - Asynchronous state interruptions
   - Authorization boundary leaks
   - Malformed payload resiliency`,
        },
      },
      {
        sectionTitle: "Human-in-the-Loop Verification",
        paragraphs: [
          "The golden rule of AI-assisted QA remains human engineering verification. An LLM's generated scenarios must be vetted against actual business logic, filtered for technical plausibility, and implemented within established framework conventions (such as Playwright or Cypress) using deterministic assertions.",
          "When applied intentionally, this hybrid approach elevates release confidence while dramatically shortening the time required to achieve comprehensive test coverage.",
        ],
      },
    ],
    references: [
      "Kaner, C., Bach, J., & Pettichord, B. 'Lessons Learned in Software Testing.' Wiley, 2001.",
      "IEEE Software. 'Software Testing in the Era of Generative AI.' 2023.",
    ],
  },
];
