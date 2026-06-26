import { test } from '../fixtures/baseFixture';
import students from '../test-data/students.json';

test('Upload Student Picture', async ({ studentFormPage }) => {

    await studentFormPage.goto();

    await studentFormPage.uploadPicture(students[0].picture);

});