import { test as base, expect } from '@playwright/test';
import { StudentFormPage } from '../pages/StudentFormPage.ts';

type DemoQAFixture = {
    studentFormPage: StudentFormPage;
};

export const test = base.extend<DemoQAFixture>({
    studentFormPage: async ({ page }, use) => {
        const studentFormPage = new StudentFormPage(page);

        await use(studentFormPage);
    }
});

export { expect };