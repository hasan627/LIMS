/// <reference types="cypress" />
import { LoginPage } from "../pages/loginpage";
const loginpage = new LoginPage();

describe('LoginTest', () => {
  
  it('login', () => {
    cy.viewport(1400, 750)
    cy.visit('')
    cy.get('.header-right > .MuiList-root > :nth-child(6) > a').click()
    cy.origin('http://192.168.30.61:8090/login', () => {
      cy.get("[name='username']").type('admin')
      cy.get("[name='password']").type('admin')
      cy.get('button').click()

})
    
})

})

