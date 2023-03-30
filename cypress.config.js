const { defineConfig } = require("cypress");
const { cypressConfig } = require('@axe-core/watcher');
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig(
  cypressConfig({
    axe: {
      apiKey: process.env.AXE_API_KEY,
      serverURL: 'https://axe.dequelabs.com'
    }
  })
);


// {
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// }

// module.exports = defineConfig(
//   cypressConfig({
//     axe: {
//       apiKey: '42fb89f0-c78d-4ae5-b616-8b43ceaa8c4c'
//     }
//   })
// );