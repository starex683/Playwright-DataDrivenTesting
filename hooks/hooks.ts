import { test } from '../fixtures/baseFixture';

test.beforeEach(async ({ page }) => {

    console.log('========================================');
    console.log('Starting Test...');
    console.log(`Executing: ${test.info().title}`);
    console.log('========================================');

    await page.goto('https://demoqa.com/automation-practice-form');

});

test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

        await page.screenshot({
            path: `test-results/${testInfo.title}.png`,
            fullPage: true
        });

        console.log(`Test Failed: ${testInfo.title}`);
    } else {
        console.log(`Test Passed: ${testInfo.title}`);
    }

    console.log(`Status : ${testInfo.status}`);
    console.log(`Duration : ${testInfo.duration} ms`);

    await page.close();

});