const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    baseUrl: "http://192.168.30.71",
    //baseUrl: "http://192.168.30.61:8090",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //html report generation
    },
  },
});
