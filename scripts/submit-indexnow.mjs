#!/usr/bin/env node

/**
 * Submits all portfolio pages and articles to the IndexNow API
 * (instantly notifying Microsoft Bing, Yandex, Seznam, and AI search engines).
 */

const KEY = "e4e3dea8b405ed9a842a69fa93ba813c";
const HOST = "mahfuzul-alam.github.io";
const BASE_URL = `https://${HOST}`;

const URLS = [
  `${BASE_URL}/`,
  `${BASE_URL}/about/`,
  `${BASE_URL}/projects/`,
  `${BASE_URL}/research/`,
  `${BASE_URL}/writing/`,
  `${BASE_URL}/contact/`,
  // Projects
  `${BASE_URL}/projects/test-run-reliability-dashboard/`,
  `${BASE_URL}/projects/todo-app/`,
  `${BASE_URL}/projects/michigan-home-help/`,
  `${BASE_URL}/projects/dummywebtest/`,
  `${BASE_URL}/projects/selenium-dummywebtest/`,
  // SDET Articles
  `${BASE_URL}/writing/ai-assisted-software-testing-sdet-workflow/`,
  `${BASE_URL}/writing/ai-requirement-analysis-test-scenario-design/`,
  `${BASE_URL}/writing/chatgpt-jira-test-case-documentation/`,
  `${BASE_URL}/writing/ai-assisted-playwright-test-automation/`,
  `${BASE_URL}/writing/ai-assisted-qa-blocker-investigation/`,
  `${BASE_URL}/writing/heuristic-flakiness-detection-junit-artifacts/`,
  `${BASE_URL}/writing/augmenting-edge-case-discovery-llm-test-design/`,
];

async function submitIndexNow() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: `${BASE_URL}/${KEY}.txt`,
    urlList: URLS,
  };

  const endpoints = [
    "https://api.indexnow.org/IndexNow",
    "https://www.bing.com/indexnow",
  ];

  console.log(`[IndexNow] Submitting ${URLS.length} URLs for ${HOST}...`);

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });

      console.log(`[IndexNow] ${endpoint} -> Status ${res.status} (${res.statusText || "OK"})`);
    } catch (err) {
      console.warn(`[IndexNow] Failed for ${endpoint}:`, err.message);
    }
  }

  console.log("[IndexNow] Submission complete.");
}

submitIndexNow();
