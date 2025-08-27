import { defineConfig } from "cypress"
export default defineConfig({
  projectId: '8eezv8',
  e2e: {
    baseUrl: 'https://www.inmotionhosting.com/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
