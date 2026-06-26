import { test,expect } from '../fixtures/baseFixture';

test('Verify Invalid Email Validation',
    async ({ studentFormPage }) => {

        await studentFormPage.goto();

        await studentFormPage.enterFirstName('John');

        await studentFormPage.enterLastName('Smith');

        await studentFormPage.enterEmail('john.com');

        await studentFormPage.selectGender('Male');

        await studentFormPage.enterMobile('9876543210');

        await studentFormPage.submit();

        await expect(studentFormPage.modalTitle).not.toBeVisible();

});