import { expect, test } from '../fixtures/baseFixture';

test('Invalid Mobile Number', async ({ studentFormPage }) => {

    await studentFormPage.goto();

    await studentFormPage.enterFirstName('John');
    await studentFormPage.enterLastName('Doe');
    await studentFormPage.selectGender('Male');
    await studentFormPage.enterMobile('12345');

    await studentFormPage.submit();

    await expect(studentFormPage.modalTitle).not.toBeVisible();

});