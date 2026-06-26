import { test } from '../fixtures/baseFixture';
import students from '../test-data/students.json';

students.forEach((student) => {

    test(`Register ${student.firstName} ${student.lastName}`, async ({ studentFormPage }) => {

        await studentFormPage.goto();

        await studentFormPage.fillStudentDetails(student);

        await studentFormPage.submit();

        await studentFormPage.verifyConfirmation(student);

    });

});