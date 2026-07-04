// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    fullyParallel: false,

    workers: 1,

    retries: 0,

    reporter: [
        ['html'],
        ['list']
    ],

    use: {

        headless: true,

        viewport: {
            width: 1366,
            height: 768
        }

    }

});