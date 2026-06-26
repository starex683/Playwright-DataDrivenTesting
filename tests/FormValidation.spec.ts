import { test,expect } from '../fixtures/baseFixture';

test('Verify Mandatory Fields Validation',
    async ({ studentFormPage }) => {

        await studentFormPage.goto();

        await studentFormPage.submit();

        await expect(studentFormPage.modalTitle).not.toBeVisible();

});