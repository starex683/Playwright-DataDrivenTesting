import { test } from '../fixtures/baseFixture';
import students from '../test-data/students.json';

test('Register Student', async ({ studentFormPage }) => {

    await studentFormPage.goto();

    await studentFormPage.fillStudentDetails(students[0]);

    await studentFormPage.submit();

    await studentFormPage.verifyConfirmation(students[0]);

    

});