import { Locator, Page } from '@playwright/test';

export class BasePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async uploadFile(locator: Locator, filePath: string) {
        await locator.setInputFiles(filePath);
    }

    async scrollIntoView(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    async selectDropdown(locator: Locator, value: string) {
        await locator.selectOption(value);
    }
}