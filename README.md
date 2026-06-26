# Playwright TypeScript Page Object Model - DemoQA

A robust UI automation framework built using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern. This framework automates the DemoQA Student Registration Form and demonstrates Data-Driven Testing (DDT), reusable fixtures, hooks, and clean project architecture.

---

# Features

* Playwright with TypeScript
* Page Object Model (POM)
* Data-Driven Testing using JSON
* Custom Playwright Fixtures
* Reusable Base Page
* Before/After Hooks
* File Upload Automation
* Cross-browser execution
* HTML Report
* Screenshot on failure
* Video recording on failure
* Parallel execution
* Smoke, Sanity, and Regression test execution using tags

---

# Tech Stack

* Playwright
* TypeScript
* Node.js
* Page Object Model (POM)
* JSON Test Data
* Git & GitHub

---

# Project Structure

Playwright-DataDrivenTesting
│
├── tests
│   ├── StudentForm.spec.ts
│   ├── StudentFormDDT.spec.ts
│   ├── StudentValidation.spec.ts
│   ├── MandatoryFields.spec.ts
│   ├── InvalidEmail.spec.ts
│   ├── InvalidMobile.spec.ts
│   ├── FileUpload.spec.ts
│   └── MultipleStudents.spec.ts
│
├── pages
│   └── StudentFormPage.ts
│
├── fixtures
│   └── baseFixture.ts
│
├── test-data
│   └── students.json
│
├── utils
│   ├── Constants.ts
│   └── WaitUtils.ts
│
├── hooks
│   └── hooks.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

# Project Components

## pages

Contains all Page Object classes.

* **BasePage.ts**

  * Common reusable Playwright methods
  * Click
  * Fill
  * Navigate
  * Waits
  * Scroll

* **StudentFormPage.ts**

  * Student Registration Form locators
  * Form actions
  * Submission
  * Validation
  * Confirmation verification

---

## tests

Contains all test scenarios.

| Test File                 | Description                         |
| ------------------------- | ----------------------------------- |
| StudentForm.spec.ts       | Register a student successfully     |
| StudentFormDDT.spec.ts    | Data-driven registration using JSON |
| StudentValidation.spec.ts | Verify form elements                |
| FormValidation.spec.ts    | Mandatory field validation          |
| InvalidEmail.spec.ts      | Invalid email validation            |
| InvalidMobile.spec.ts     | Invalid mobile number validation    |
| MultipleStudents.spec.ts  | Register multiple students          |

---

## fixtures

Contains reusable Playwright fixtures.

Example:

* Browser setup
* Page Object initialization
* Shared test objects

---

## hooks

Contains reusable test hooks.

Example:

* Before Each
* After Each
* Screenshot on failure
* Logging

---

## test-data

Contains all reusable test data.

### students.json

Stores student information used by Data-Driven Tests.

Example:

* Name
* Email
* Gender
* Mobile
* Subjects
* Hobbies
* State
* City

### Student.ts

TypeScript interface for the student data model.

---

## utils

Reusable utility classes.

Example:

* File upload helper
* Common helper methods

---

# Installation

--GIT Commands
**git init
git status
git add .
git commit -m "Initial commit - Playwright TypeScript POM DemoQA Framework"
create repository
git remote add origin URL
git branch -M main
git push -u origin main**
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
