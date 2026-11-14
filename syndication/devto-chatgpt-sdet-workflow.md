---
title: "Beyond Test Cases: How I Use AI as an SDET in My Everyday Work"
published: true
description: "AI isn't replacing my testing skills. It's helping me become a more thoughtful, efficient, and technically capable software tester."
tags: softwaretesting, sdet, ai, qualityassurance
canonical_url: https://mahfuzul-alam.github.io/writing/ai-assisted-software-testing-sdet-workflow/
cover_image: https://mahfuzul-alam.github.io/og-image.png
---

*Originally published at [Mahfuzul Alam's Engineering Hub](https://mahfuzul-alam.github.io/writing/ai-assisted-software-testing-sdet-workflow/).*

## A Different Way of Working in Software Testing

Software testing has changed significantly over the years. A tester's responsibility is no longer limited to executing predefined test cases, identifying bugs, and reporting them to developers.

Modern software quality engineering requires understanding business requirements, exploring application behavior, investigating technical issues, designing automation strategies, and communicating effectively with different teams.

As I continue developing my career toward Software Development Engineer in Test (SDET), I've started incorporating Artificial Intelligence into many parts of my everyday workflow.

One tool I regularly use is ChatGPT. I don't use it simply to generate test cases or write documentation. I use it as a **technical thinking partner**: something that helps me break down complex problems, explore alternative approaches, understand unfamiliar technologies, and improve the quality of my work.

---

## 1. Understanding Requirements Before Starting Testing

One of the most important parts of testing happens before executing a single test case. Understanding what a feature is supposed to do is essential. However, requirements are not always straightforward. Sometimes they contain complex workflows, multiple user roles, conditional behavior, and dependencies between different modules.

I use ChatGPT to break down requirements into smaller, understandable parts:
* Explain complex requirement flows in simpler technical language
* Identify user roles and permissions
* Highlight edge cases, negative scenarios, and boundary values
* Uncover hidden dependencies across microservices

**Rule:** Never paste sensitive customer data or company confidential IP into public AI interfaces. Anonymize user flows and entity schemas first.

---

## 2. Deriving Comprehensive Test Scenarios

When designing test scenarios, human testers often naturally focus on the "happy path" first. AI helps expand coverage into edge cases:
* Input validation limits (character limits, encoding, SQL escape characters)
* Concurrency and race conditions (double clicking buttons, simultaneous form submissions)
* Session timeout and authorization boundary states

---

## 3. Writing Professional Jira Defect Reports

A bug report that lacks clarity slows down the entire engineering team. I use structured AI prompting to refine my bug tickets into a standardized format:
1. **Summary:** Clear, unambiguous title describing the failure condition.
2. **Preconditions:** Explicit environment state, user permissions, and test data requirements.
3. **Exact Steps to Reproduce:** Numbered actions with exact payload parameters.
4. **Expected vs Actual Behavior:** Deterministic comparison.
5. **Technical Context:** Stack trace snippet, response code, and browser/OS details.

---

## Conclusion: Augmentation, Not Replacement

The goal of AI in QA is not to automate away the tester’s critical thinking. The goal is to eliminate repetitive cognitive friction so engineers can focus on architecture, deep exploratory testing, and reliable automation frameworks.

*For more in-depth case studies and automation tools, visit [mahfuzul-alam.github.io](https://mahfuzul-alam.github.io/).*
