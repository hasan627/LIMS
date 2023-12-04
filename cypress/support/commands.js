// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

//
// -- This is a parent command --
// import { LoginPage } from "../pages/loginpage";
// const loginpage = new LoginPage()
Cypress.Commands.add('login', () => { 
    cy.viewport(1800, 1200)
    cy.visit('')
    cy.get('.header-right > .MuiList-root > :nth-child(6) > a').click()
    cy.origin('http://192.168.30.61:8090/login', () => {
      cy.get("[name='username']").type('admin')
      cy.get("[name='password']").type('admin')
      cy.get('button').click()

    })

    cy.url().should('include', '/admin')  
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })