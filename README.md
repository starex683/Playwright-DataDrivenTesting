# Playwright TypeScript Page Object Model (POM) - DemoQA

A robust UI automation framework built using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern. This framework automates the DemoQA Student Registration Form and demonstrates Data-Driven Testing (DDT), reusable fixtures, hooks, utilities, and a scalable project architecture.

---

# Features

* Playwright with TypeScript
* Page Object Model (POM)
* Data-Driven Testing (JSON)
* Custom Playwright Fixtures
* Reusable Base Page
* Before/After Hooks
* File Upload Automation
* Cross-browser Testing
* HTML Reports
* Screenshots on Failure
* Video Recording on Failure
* Parallel Test Execution
* Smoke, Sanity, and Regression Test Execution using Tags

---

# Tech Stack

* Playwright
* TypeScript
* Node.js
* JSON
* Git & GitHub

---

# Project Structure

```text
Playwright-DataDrivenTesting
│
├── tests
│   ├── StudentForm.spec.ts
│   ├── StudentFormDDT.spec.ts
│   ├── StudentValidation.spec.ts
│   ├── FormValidation.spec.ts
│   ├── InvalidEmail.spec.ts
│   ├── InvalidMobile.spec.ts
│   ├── FileUpload.spec.ts
│   └── MultipleStudents.spec.ts
│
├── pages
│   ├── BasePage.ts
│   └── StudentFormPage.ts
│
├── fixtures
│   └── baseFixture.ts
│
├── hooks
│   └── hooks.ts
│
├── test-data
│   ├── Student.ts
│   ├── students.json
│   └── sample.png
│
├── utils
│   ├── Constants.ts
│   └── WaitUtils.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

# Project Components

## Pages

The **pages** folder contains all Page Object classes.

### BasePage.ts

The Base Page contains reusable methods shared across all page objects.


### StudentFormPage.ts

Contains all locators and actions related to the DemoQA Student Registration Form.

## utils

Reusable utility classes.

Example:

* File upload helper
* Common helper methods

---

# Installation

Tp push code to GIT:
git init
git status
git add .
git commit -m "Initial commit - Playwright TypeScript POM DemoQA Framework"
create repository
git remote add origin URL
git branch -M main
git push -u origin main


Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd Playwright-DemoQA-POM
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# Run Tests

Run all tests

```bash
npx playwright test
```

Run Smoke tests

```bash
npx playwright test --grep @smoke
```

Run Sanity tests

```bash
npx playwright test --grep @sanity
```

Run Regression tests

```bash
npx playwright test --grep @regression
```

Run in headed mode

```bash
npx playwright test --headed
```

Run on Chromium

```bash
npx playwright test --project=chromium
```

Run a single test

```bash
npx playwright test tests/StudentForm.spec.ts
```

---

# Reports

Generate Playwright HTML Report

```bash
npx playwright show-report
```

Reports generated:

* HTML Report
* Screenshots
* Videos
* Trace files

---

# Design Pattern

This framework follows the **Page Object Model (POM)** design pattern.

Benefits:

* Improved code reusability
* Better maintainability
* Easier debugging
* Reduced code duplication
* Separation of test logic and page logic

---

# Data-Driven Testing

Test data is maintained in:

```text
test-data/students.json
```

Each student record is executed independently, improving scalability and test coverage.

---

# CI/CD Ready

The framework is compatible with:

* GitHub Actions
* Azure DevOps
* Jenkins
* GitLab CI

---

# Author

**Akhil Gandikota**

QA Automation Engineer

**Framework:** Playwright + TypeScript + Page Object Model + Data-Driven Testing
