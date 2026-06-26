import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Student } from '../test-data/Student';

export class StudentFormPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    readonly url = 'https://demoqa.com/automation-practice-form';

    // Text Fields
    readonly firstName = this.page.getByRole('textbox', { name: 'First Name' });
    readonly lastName = this.page.getByRole('textbox', { name: 'Last Name' });
    readonly email = this.page.getByRole('textbox', { name: 'name@example.com' });
    readonly mobile = this.page.getByRole('textbox', { name: 'Mobile Number' });
    readonly address = this.page.getByRole('textbox', { name: 'Current Address' });

    // Other Controls
    readonly subjectInput = this.page.locator('#subjectsInput');
    readonly uploadPictureInput = this.page.locator('#uploadPicture');
    readonly submitButton = this.page.getByRole('button', { name: 'Submit' });

    readonly modalTitle = this.page.locator('#example-modal-sizes-title-lg');
    readonly resultTable = this.page.locator('.table-responsive');

    async goto() {

        await this.page.goto(this.url);

        // Remove sticky banner and footer
        await this.page.evaluate(() => {
            document.querySelector('#fixedban')?.remove();
            document.querySelector('footer')?.remove();
        });

    }

    async enterFirstName(firstName: string) {
        await this.firstName.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastName.fill(lastName);
    }

    async enterEmail(email: string) {
        await this.email.fill(email);
    }

    async enterMobile(mobile: string) {
        await this.mobile.fill(mobile);
    }

    async enterAddress(address: string) {
        await this.address.fill(address);
    }

 async selectGender(gender: string) {

    switch (gender) {

        case 'Male':
            await this.page.locator('label[for="gender-radio-1"]').click();
            break;

        case 'Female':
            await this.page.locator('label[for="gender-radio-2"]').click();
            break;

        case 'Other':
            await this.page.locator('label[for="gender-radio-3"]').click();
            break;

        default:
            throw new Error(`Invalid gender: ${gender}`);
    }

}
    async selectDate(day: string, month: string, year: string) {

        await this.page.locator('#dateOfBirthInput').click();

        await this.page.locator('.react-datepicker__year-select').selectOption(year);

        await this.page.locator('.react-datepicker__month-select').selectOption(month);

        const formattedDay = day.padStart(2, '0');

        await this.page
            .locator(`.react-datepicker__day--0${formattedDay}:not(.react-datepicker__day--outside-month)`)
            .click();

    }



    // Subjects

    async selectSubjects(subjects: string[]) {

        for (const subject of subjects) {

            await this.subjectInput.click();

            await this.subjectInput.fill(subject);

            await this.page.getByRole('option', { name: subject }).click();

        }

    }

    // Hobbies

    async selectHobbies(hobbies: string[]) {

        for (const hobby of hobbies) {

            await this.page.getByRole('checkbox', { name: hobby }).check();

        }

    }

    // Upload Picture

    async uploadPicture(filePath: string) {

        await this.uploadPictureInput.setInputFiles(filePath);

    }

    // State

    async selectState(state: string) {

    await this.page.locator('.css-hlgwow > .css-19bb58m').click();

    await this.page.getByRole('option', { name: state }).click();

}

async selectCity(city: string) {

    await this.page.locator('.css-13cymwt-control > .css-hlgwow > .css-19bb58m').click();

    await this.page.getByRole('option', { name: city }).click();

}

    // Fill Complete Form

    async fillStudentDetails(student: Student) {

        await this.enterFirstName(student.firstName);

        await this.enterLastName(student.lastName);

        await this.enterEmail(student.email);

        await this.selectGender(student.gender);

        await this.enterMobile(student.mobile);

        await this.selectDate(
            student.day,
            student.month,
            student.year
        );

        await this.selectSubjects(student.subjects);

        await this.selectHobbies(student.hobbies);

        await this.uploadPicture(student.picture);

        await this.enterAddress(student.address);

        await this.selectState(student.state);

        await this.selectCity(student.city);

    }
        // Submit Form

    async submit() {

        await this.submitButton.scrollIntoViewIfNeeded();

        await this.submitButton.click();

    }

    // Verify Success Modal

    async verifyConfirmation(student: Student) {

        await expect(this.modalTitle)
            .toHaveText('Thanks for submitting the form');

        await expect(this.resultTable).toContainText(student.firstName);
        await expect(this.resultTable).toContainText(student.lastName);
        await expect(this.resultTable).toContainText(student.email);
        await expect(this.resultTable).toContainText(student.gender);
        await expect(this.resultTable).toContainText(student.mobile);
        await expect(this.resultTable).toContainText(student.address);
        await expect(this.resultTable).toContainText(student.state);
        await expect(this.resultTable).toContainText(student.city);

    }

    // Close Success Modal

    async closeConfirmationModal() {

        await this.page
            .getByRole('button', { name: 'Close' })
            .click();

    }

    // Verify Form Loaded

    async verifyFormLoaded() {

        await expect(this.firstName).toBeVisible();

        await expect(this.lastName).toBeVisible();

        await expect(this.email).toBeVisible();

        await expect(this.mobile).toBeVisible();

        await expect(this.submitButton).toBeVisible();

    }

}
