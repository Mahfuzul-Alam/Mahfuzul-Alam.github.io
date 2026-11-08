export interface ProjectCaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: "Test Automation" | "Software Engineering" | "Applied AI" | "Academic Projects";
  featured: boolean;
  date: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  summary: string;
  overview: string;
  problemStatement: string;
  objectives: string[];
  roleAndContributions: string[];
  architecture: {
    description: string;
    diagram?: string;
  };
  implementationDetails: {
    title: string;
    description: string;
    codeSnippet?: string;
  }[];
  keyFeatures: string[];
  resultsAndObservations: string[];
  challenges: string[];
  limitationsAndFuture: string[];
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: "test-run-reliability-dashboard",
    title: "RunLens — Test Run Reliability Dashboard",
    subtitle: "In-memory JUnit XML test analytics and empirical flakiness heuristic engine",
    category: "Test Automation",
    featured: true,
    date: "2024",
    technologies: [
      "TypeScript",
      "Next.js",
      "Python",
      "FastAPI",
      "defusedxml",
      "Tailwind CSS",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/Mahfuzul-Alam/test-run-reliability-dashboard",
    liveUrl: "https://mahfuzul-alam.github.io/test-run-reliability-dashboard/",
    summary:
      "A lightweight, privacy-first test analytics platform that parses standard JUnit XML reports, tracks cross-run test history in the browser, and detects flaky test oscillations through a transparent mathematical heuristic.",
    overview:
      "RunLens is an engineering-grade test intelligence tool designed to solve a universal software quality pain point: flaky and unstable CI/CD test runs. Traditional test observability solutions often mandate heavyweight infrastructure, remote databases, and expensive recurring subscriptions. RunLens provides instant, zero-infrastructure test analytics by executing stateless in-memory XML parsing and maintaining run history strictly inside the client's local browser storage.",
    problemStatement:
      "Non-deterministic ('flaky') tests erode developer confidence, trigger unnecessary CI pipeline re-runs, and delay production releases. In many teams, developers lack a straightforward, secure tool to upload test artifacts from disparate test runners (Pytest, Jest, Playwright, JUnit) and immediately verify which tests oscillate between pass and fail over time without sending confidential test data to third-party cloud servers.",
    objectives: [
      "Deliver instant JUnit XML ingestion compatible with Pytest, JUnit 4/5, Surefire, Jest, and Playwright.",
      "Protect against XML vulnerabilities (XXE, Billion Laughs) using hardened memory-safe parsers.",
      "Compute an objective, empirical flakiness heuristic across historical runs.",
      "Ensure 100% data privacy by persisting test history exclusively in browser localStorage with zero server-side retention.",
      "Support both real backend processing via FastAPI and an offline standalone demo dataset for seamless evaluation.",
    ],
    roleAndContributions: [
      "Architected the full system end-to-end, connecting an optimized Next.js frontend with a hardened FastAPI backend.",
      "Formulated and implemented the empirical flakiness heuristic rule based on outcome distributions across successive runs.",
      "Implemented XML parsing logic with defusedxml, enforcing 2MB payload limits to guard against memory exhaustion.",
      "Constructed interactive data visualizations to display failure rates, run timelines, and individual test history inspect cards.",
      "Configured automated GitHub Actions workflows for continuous static build and deployment to GitHub Pages.",
    ],
    architecture: {
      description:
        "The application employs a decoupled architecture. The frontend handles interactive dashboard state, run comparisons, and localStorage persistence. The backend acts as a stateless analysis engine that parses JUnit XML payloads into clean JSON schemas and immediately frees memory without disk I/O.",
      diagram: `
+--------------------------------------------------------------+
|                    Browser / Client UI                       |
|   - Test Case Explorer        - Run History Timeline        |
|   - Flakiness Metric Cards    - LocalStorage Persistence    |
+------------------------------+-------------------------------+
                               |
               (stateless POST | /api/v1/analyze)
                               v
+--------------------------------------------------------------+
|                     FastAPI Backend                          |
|   - Payload Guard (2MB Limit)                                |
|   - defusedxml Safe XML Parser                               |
|   - Normalized Schema Transformer (TestSuite / TestCase)     |
|   - In-Memory Processing (Zero Database / Zero File Storage) |
+--------------------------------------------------------------+
      `,
    },
    implementationDetails: [
      {
        title: "Deterministic Composite Key Identification",
        description:
          "Test cases across distinct runs are mapped reliably using a normalized composite key: '<classname>#<name>'. If the class name attribute is omitted, the parser gracefully falls back to the enclosing '<testsuite>' name attribute to preserve test uniqueness across builds.",
      },
      {
        title: "Transparent Flakiness Heuristic",
        description:
          "RunLens marks a test case as 'Possible Flaky' when it meets three unambiguous criteria: (1) at least 5 recorded non-skipped runs, (2) at least 1 passed outcome, and (3) at least 1 failed or errored outcome. This avoids misleading false alarms on newly introduced or persistently broken tests.",
      },
      {
        title: "Stateless In-Memory Parser with Security Hardening",
        description:
          "Implemented using Python's defusedxml library to completely disable entity expansion and external DTD retrieval, eliminating potential XXE injection vulnerabilities from uploaded test artifacts.",
      },
    ],
    keyFeatures: [
      "Universal JUnit XML Parser supporting all major test frameworks.",
      "Deterministic test identity hashing across variable build environments.",
      "Transparent mathematical flakiness classification with exact pass/fail counts.",
      "Completely private client-side run persistence via localStorage.",
      "Interactive multi-run demo explorer available offline with pre-seeded datasets.",
      "Search, filter by suite name, and filter by status (All, Passed, Failed, Flaky).",
    ],
    resultsAndObservations: [
      "Demonstrated reliable detection of intermittent payment and webhook failures across a 6-build simulated progression.",
      "Eliminated backend database latency entirely, achieving sub-50ms XML parse and response times for standard test suites.",
      "Validated zero telemetry leakage, ensuring enterprise developers can safely inspect proprietary build logs.",
    ],
    challenges: [
      "Handling variations in JUnit XML formats across different test frameworks (e.g. Jest vs Pytest vs Maven Surefire tag conventions).",
      "Designing responsive, readable visual tables that remain uncluttered on narrow mobile viewports.",
    ],
    limitationsAndFuture: [
      "Does not currently parse line-by-line stack traces or console stdout logs from failed tests.",
      "Future roadmap: Add exportable JSON/CSV diagnostic reports and optional Git commit hash tagging for enhanced regression correlation.",
    ],
  },
  {
    slug: "todo-app",
    title: "Zenith Tasks — Accessible Personal Task System",
    subtitle: "A calm, high-performance personal task manager built with Next.js App Router and strict TypeScript",
    category: "Software Engineering",
    featured: true,
    date: "2024",
    technologies: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "LocalStorage API",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/Mahfuzul-Alam/todo-app",
    liveUrl: "https://mahfuzul-alam.github.io/todo-app/",
    summary:
      "A distraction-free, privacy-first task management application engineered for instant client-side performance, complete keyboard operability, and strict WCAG accessibility standards.",
    overview:
      "Zenith Tasks is a thoughtfully designed personal task management application built to deliver a calm, uncluttered productivity experience. It focuses on engineering rigor: resilient client-side storage, complete keyboard operability, non-color-reliant visual cues, and zero external telemetry.",
    problemStatement:
      "Many modern task applications are burdened by slow cloud synchronization, heavy account walls, intrusive trackers, and poor accessibility for keyboard and screen-reader users. Everyday productivity tools should be fast, private, and fully operable without pointing devices.",
    objectives: [
      "Develop a zero-latency task management tool that requires no authentication or external servers.",
      "Achieve full WCAG accessibility compliance with semantic HTML, high-contrast focus rings, and explicit ARIA attributes.",
      "Ensure robust error recovery and graceful handling for restricted browser storage environments.",
      "Deliver a seamless, responsive layout optimized from 375px mobile displays to wide desktop monitors.",
    ],
    roleAndContributions: [
      "Engineered the full application architecture using Next.js App Router and static HTML export.",
      "Built resilient localStorage validation, sanitization, and quota-exhaustion error handlers.",
      "Implemented comprehensive keyboard navigation shortcuts (inline edits, item toggles, modal escapes).",
      "Designed an accessible visual system featuring dual-signal priority indicators (text and color).",
    ],
    architecture: {
      description:
        "Built as a fully static, client-hydrated single page architecture with modular component separation. State is managed reactively with React hooks and synchronized with localStorage through a fault-tolerant storage wrapper.",
    },
    implementationDetails: [
      {
        title: "Resilient Storage Wrapper",
        description:
          "Includes automated JSON schema validation, corrupted item sanitization, and graceful notifications when browser storage quotas or private-mode restrictions are encountered.",
      },
      {
        title: "Accessible Interaction Design",
        description:
          "All interactive elements possess explicit accessible names, full Tab/Shift+Tab sequences, Enter/Space toggles, and Escape key listeners for modal cancellation.",
      },
    ],
    keyFeatures: [
      "Quick task addition with optional due dates and explicit priority levels (Low, Medium, High).",
      "Inline task editing without page reloads or modal clutter.",
      "Live search and status filtering (All, Active, Completed).",
      "Visual momentum progress bar reflecting real-time task completion ratios.",
      "Accessible bulk deletion confirmation modal.",
      "Non-color-dependent overdue and priority badges.",
    ],
    resultsAndObservations: [
      "Achieved instantaneous (0ms perceived network latency) task updates through client-side state.",
      "Tested and verified full accessibility navigation using screen readers and keyboard-only control.",
      "Zero dependencies on external APIs or database services.",
    ],
    challenges: [
      "Managing hydration mismatches when synchronizing client-side localStorage with SSR/SSG HTML output.",
      "Ensuring clean mobile interactions for inline text editing without causing mobile browser viewport zooming.",
    ],
    limitationsAndFuture: [
      "Storage is currently scoped to a single device and browser profile.",
      "Future roadmap: Add optional local JSON file export/import for cross-device backup.",
    ],
  },
  {
    slug: "michigan-home-help",
    title: "Michigan Home Help — Caregiver Eligibility Portal",
    subtitle: "Interactive questionnaire workflow and knowledge base interface for home care assistance",
    category: "Software Engineering",
    featured: true,
    date: "2024",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "n8n (Architectural Hook)"],
    githubUrl: "https://github.com/Mahfuzul-Alam/michigan-home-help",
    liveUrl: "https://www.michiganworkfromhome.com/",
    summary:
      "A clean, multi-step eligibility questionnaire and knowledge base frontend created to help families and caregivers navigate the Michigan Home Help Medicaid-funded program.",
    overview:
      "The Michigan Home Help portal was created to assist elderly, disabled, or caregiver applicants in evaluating program qualification. The platform translates complex government assistance criteria into a structured, step-by-step questionnaire with dynamic outcome branches and an informative knowledge base.",
    problemStatement:
      "Navigating state healthcare and in-home caregiving assistance programs is often confusing and overwhelming for families. Applicants frequently struggle to identify eligibility factors and understand allowable daily living assistance services.",
    objectives: [
      "Create a clear, non-intimidating multi-step questionnaire guiding users through qualification rules.",
      "Provide an accessible knowledge base detailing program rules, allowable care hours, and documentation needs.",
      "Design an architectural hook for downstream automation (e.g. n8n webhook triggers) to support automated case submission once approved by stakeholders.",
    ],
    roleAndContributions: [
      "Designed and coded the frontend interface and questionnaire logic using clean semantic HTML and modular JavaScript.",
      "Built dynamic UI state flows: displaying specific knowledge-base calls to action only upon qualifying questionnaire completions.",
      "Prepared the integration architecture and webhook configuration interface for future automated n8n pipeline workflows.",
    ],
    architecture: {
      description:
        "A lightweight, dependency-free frontend architecture utilizing pure semantic HTML5, shared CSS modules, and structured vanilla JavaScript event handlers. Prepared with a configurable webhook integration hook for n8n.",
    },
    implementationDetails: [
      {
        title: "Conditional Flow Routing",
        description:
          "The interactive questionnaire evaluates multi-variable user responses to branch cleanly between qualified submissions and alternative resources.",
      },
      {
        title: "Architectural Automation Hook",
        description:
          "The codebase includes an explicit configuration point (N8N_WEBHOOK_URL) designed to dispatch payload objects to an n8n workflow upon client deployment.",
      },
    ],
    keyFeatures: [
      "Multi-step interactive eligibility questionnaire.",
      "Dynamic call-to-action routing based on response validation.",
      "Comprehensive knowledge-base documentation page.",
      "Client-ready privacy policy draft.",
      "Responsive layout optimized for mobile and desktop reading.",
    ],
    resultsAndObservations: [
      "Delivered a fast, accessible, zero-dependency questionnaire with instant state transitions.",
      "Maintained complete transparency on completed frontend features versus planned automation integrations.",
    ],
    challenges: [
      "Designing government assistance guidance in plain, compassionate, and legally sound language.",
    ],
    limitationsAndFuture: [
      "Downstream n8n webhook automation remains intentionally inactive pending final client workflow confirmation.",
    ],
  },
  {
    slug: "cypress-dummy-web-test",
    title: "Cypress End-to-End Automation Test Suite",
    subtitle: "Modular web test automation framework covering user journeys, forms, and assertion flows",
    category: "Test Automation",
    featured: true,
    date: "2024",
    technologies: ["Cypress", "JavaScript", "Mocha", "Chai", "Web Automation"],
    githubUrl: "https://github.com/Mahfuzul-Alam/dummywebtest",
    summary:
      "A structured Cypress automated test repository demonstrating end-to-end testing techniques, custom assertions, dynamic element handling, and resilient selector strategies.",
    overview:
      "This test automation project demonstrates core software quality engineering practices using Cypress. It covers typical enterprise web application interactions including user authentication, form validation, dynamic AJAX updates, and UI state verification.",
    problemStatement:
      "Modern Single Page Applications (SPAs) frequently introduce asynchronous timing issues, animation flakiness, and brittle DOM selectors that break legacy test scripts.",
    objectives: [
      "Build maintainable, readable test specs using Cypress and Mocha syntax.",
      "Demonstrate automatic waiting and resilient assertion patterns to eliminate timing flakiness.",
      "Validate user-facing workflows with comprehensive error-state coverage.",
    ],
    roleAndContributions: [
      "Authored modular Cypress test specs covering authentication, navigation, and input verification.",
      "Implemented reusable custom commands and utility helpers to reduce test script duplication.",
      "Organized fixtures and test data files for consistent execution.",
    ],
    architecture: {
      description:
        "Structured around standard Cypress test architecture: test specs in cypress/e2e, reusable helpers in cypress/support, and isolated test datasets in cypress/fixtures.",
    },
    implementationDetails: [
      {
        title: "Asynchronous Assertion Synchronization",
        description:
          "Leveraged Cypress built-in retry-ability and chaining to ensure assertions evaluate only when DOM nodes reach their expected steady state.",
      },
    ],
    keyFeatures: [
      "End-to-end workflow verification across core user paths.",
      "Form input validation and boundary condition assertions.",
      "Modular spec structure with reusable test utilities.",
    ],
    resultsAndObservations: [
      "Consistently fast test execution with clear failure artifacts and video/screenshot captures.",
    ],
    challenges: [
      "Managing test isolation across consecutive test runs to prevent shared state contamination.",
    ],
    limitationsAndFuture: [
      "Expanding suite to integrate with CI/CD headless test runners in GitHub Actions.",
    ],
  },
  {
    slug: "selenium-agile-alm",
    title: "AgileALM Test Automation with Selenium & POM",
    subtitle: "Enterprise Java test framework using Selenium WebDriver, Maven, TestNG, and Page Object Model",
    category: "Test Automation",
    featured: false,
    date: "2023",
    technologies: ["Java", "Selenium WebDriver", "TestNG", "Maven", "Page Object Model (POM)"],
    githubUrl: "https://github.com/Mahfuzul-Alam/SeleniumDummyWebTest",
    summary:
      "An enterprise-style automated testing framework developed in Java using Selenium WebDriver, TestNG, and Maven, structured using the Page Object Model (POM) design pattern.",
    overview:
      "This project showcases traditional enterprise test engineering methodologies. Built with Java, Maven, and Selenium WebDriver, it organizes UI interactions into maintainable Page Objects, separating page element selectors from test assertion logic.",
    problemStatement:
      "Unstructured Selenium scripts that mix element locators, driver waits, and business logic quickly become unmaintainable when enterprise UI layouts evolve.",
    objectives: [
      "Implement the Page Object Model (POM) to decouple UI structure from test assertions.",
      "Manage dependencies, build lifecycles, and test suites cleanly with Apache Maven.",
      "Use TestNG annotations, assertions, and data providers for scalable test execution.",
    ],
    roleAndContributions: [
      "Architected the Maven project structure and pom.xml dependency management.",
      "Developed modular Page Classes encapsulating WebDriver actions and explicit wait strategies.",
      "Wrote parameterized TestNG test suites verifying complex web application workflows.",
    ],
    architecture: {
      description:
        "Follows the Page Object Model (POM) design pattern: src/main/java contains Page classes representing application screens, while src/test/java houses TestNG test runner suites.",
    },
    implementationDetails: [
      {
        title: "Page Object Decoupling",
        description:
          "Every web page is modeled as a distinct Java class containing private WebElement locators and public action methods, minimizing script maintenance when UI elements change.",
      },
    ],
    keyFeatures: [
      "Clean Page Object Model architecture.",
      "Explicit WebDriverWait synchronization preventing race conditions.",
      "TestNG XML configuration files for granular test suite grouping.",
      "Automated Maven lifecycle build and test execution.",
    ],
    resultsAndObservations: [
      "Demonstrated high test resilience and maintainability compared to procedural test scripts.",
    ],
    challenges: [
      "Handling dynamic web elements and timing synchronizations across different browser drivers.",
    ],
    limitationsAndFuture: [
      "Project focused on desktop browser testing; future enhancement could include Dockerized Selenium Grid execution.",
    ],
  },
];
