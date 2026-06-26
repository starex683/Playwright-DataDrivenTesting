import { Locator, Page } from '@playwright/test';

export class WaitUtils {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    async waitForElement(locator: Locator) {
        await locator.waitFor({
            state: 'visible'
        });
    }

    async scrollToElement(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    async waitAndClick(locator: Locator) {

        await locator.waitFor({
            state: 'visible'
        });

        await locator.click();

    }

    async waitAndFill(locator: Locator, value: string) {

        await locator.waitFor({
            state: 'visible'
        });

        await locator.fill(value);

    }

}