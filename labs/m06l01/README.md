# m06l01 · End-to-End Testing with Playwright: Multi-Tier Suites

Module 6: Production Testing, CI/CD & Deployment · lesson 6.1 · Pro · [Open the lesson](https://learnsome.tech/learn/fullstack-course/m06l01)

**Goal:** You can architect end-to-end test suites with Playwright, utilize accessible web-first locators and auto-retrying assertions, and mock network boundaries for deterministic runs.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l01-02](m06l01-02/) | Accessible Locators | Graded |
| [m06l01-03](m06l01-03/) | Accessible Locators | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Engineer an E2E Playwright Suite with Network Interception

1. Locate user interface elements using accessible roles and aria labels.
2. Mock downstream third-party network APIs using page route handlers.
3. Write web-first assertions that poll automatically for DOM transitions.
4. Configure parallel test execution across multi-browser worker suites.

> **Hint:** Use page.getByRole('button', { name: 'Submit' }) and expect(el).toBeVisible().

## Check yourself

- Why are accessible role locators more resilient than CSS class selectors in E2E tests?
- How do web-first assertions eliminate the need for arbitrary sleep statements?
- What advantages does network route interception provide when testing third-party APIs?
- How does running Playwright tests across multiple worker processes reduce CI runtimes?

---

[Course README](../../README.md) · [Production Full-Stack Engineering on LearnSome.tech](https://learnsome.tech/courses/fullstack-course)
