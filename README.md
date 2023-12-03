# LIMS
Labor Information Management System

Step:
-----------------------------------
1. npm init –y (to initial node in the project)
2. npm install cypress --save-dev (to install cypress in the project)
3. npx cypress open (to open cypress web view)
4. npx cypress -v (to check version)
5. npm install typescript (to install typescript)
6. npm install -D cypress-xpath (Then include in your project “support-> e2e.js” file: require('cypress-xpath'))


Install mochawesome library
---------------------------------
npm install mochawesome
npm install mochawesome-report-generator
npm install mochawesome-merge --save-dev
(this line add to “support-> e2e.js” file: import 'cypress-mochawesome-reporter/register';)


For Single run:how to run single test case and generate a mochawesome reports
---------------------------------------------------------------------------------
npx cypress run –spec cypress\e2e\login.cy.js – browser chrome

For a single run with headed
-------------------------------------------------------------------
npx cypress run –headed  –spec cypress\e2e\login.cy.js – browser chrome

