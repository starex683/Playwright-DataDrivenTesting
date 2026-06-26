import { test, expect } from '../fixtures/baseFixture';

test('Verify Student Registration Form',
    async ({ studentFormPage }) => {

        await studentFormPage.goto();

        await expect(studentFormPage.firstName).toBeVisible();

        await expect(studentFormPage.lastName).toBeVisible();

        await expect(studentFormPage.email).toBeVisible();

        await expect(studentFormPage.mobile).toBeVisible();

        await expect(studentFormPage.submitButton).toBeVisible();

});