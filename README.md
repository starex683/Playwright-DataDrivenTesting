# Playwright TypeScript Page Object Model (POM) 

A robust UI automation framework built using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern. This framework automates the DemoQA Student Registration Form and demonstrates **Data-Driven Testing (DDT)**, reusable fixtures, hooks, utilities, and a scalable project architecture.

---

# Features

* Playwright with TypeScript
* Page Object Model (POM)
* Data-Driven Testing (JSON)
* Custom Playwright Fixtures
* Reusable Base Page
* Before & After Hooks
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

**Responsibilities**

* Navigate to web pages
* Click elements
* Fill input fields
* Scroll elements into view
* Explicit waits
* Common reusable helper methods

### StudentFormPage.ts

Contains all locators and reusable methods related to the DemoQA Student Registration Form.

**Responsibilities**

* Enter student details
* Select gender
* Select date of birth
* Select subjects
* Select hobbies
* Upload picture
* Select state and city
* Submit the registration form
* Verify successful registration

---

## Fixtures

The **fixtures** folder contains reusable Playwright fixtures.

**Responsibilities**

* Browser setup
* Page Object initialization
* Shared test objects
* Reusable test context

---

## Hooks

The **hooks** folder contains reusable Playwright hooks.

**Responsibilities**

* Before Each
* After Each
* Test cleanup
* Logging
* Screenshot on failure (optional)

---

## Utils

The **utils** folder contains reusable utility classes.

Examples:

* Constants
* Wait Utilities
* Common helper methods

---

## Test Data

The **test-data** folder stores reusable test data.

### Student.ts

TypeScript interface representing the student data model.

### students.json

Contains multiple student records used for Data-Driven Testing.

---

# Installation

## Clone the Repository

```bash
git clone <repository-url>
```

Navigate to the project folder.

```bash
cd Playwright-DataDrivenTesting
```

Install project dependencies.

```bash
npm install
```

Install Playwright browsers.

```bash
npx playwright install
```

---

# Push Project to GitHub

Initialize Git.

```bash
git init
```

Check the repository status.

```bash
git status
```

Stage all project files.

```bash
git add .
```

Commit the changes.

```bash
git commit -m "Initial commit - Playwright TypeScript POM DemoQA Framework"
```

Create a new repository on GitHub.

Add the remote repository.

```bash
git remote add origin <repository-url>
```

Rename the default branch.

```bash
git branch -M main
```

Push the project.

```bash
git push -u origin main
```

---

# Run Tests

Run all tests.

```bash
npx playwright test
```

Run Smoke tests.

```bash
npx playwright test --grep @smoke
```

Run Sanity tests.

```bash
npx playwright test --grep @sanity
```

Run Regression tests.

```bash
npx playwright test --grep @regression
```

Run tests in headed mode.

```bash
npx playwright test --headed
```

Run tests on Chromium.

```bash
npx playwright test --project=chromium
```

Run a single test.

```bash
npx playwright test tests/StudentForm.spec.ts
```

---

# Reports

Generate the Playwright HTML Report.

```bash
npx playwright show-report
```

The framework generates:

* HTML Report
* Screenshots on Failure
* Video Recordings
* Trace Files

---

# Design Pattern

This framework follows the **Page Object Model (POM)** design pattern.

## Benefits

* Improved code reusability
* Better maintainability
* Easier debugging
* Reduced code duplication
* Separation of page logic and test logic

---

# Data-Driven Testing

Test data is maintained in:

```text
test-data/students.json
```

Each student record is executed independently, improving scalability, maintainability, and test coverage.

---

# CI/CD Ready

The framework can be integrated with:

* GitHub Actions
* Azure DevOps
* Jenkins
* GitLab CI

---

# Author

**Akhil Gandikota**

**QA Automation Engineer**

**Framework:** Playwright + TypeScript + Page Object Model (POM) + Data-Driven Testing (DDT)
