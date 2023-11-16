/// <reference types="cypress" />
import { LoginPage } from "../pages/loginpage";
const loginpage = new LoginPage();

describe('LoginTest', () => {
  it('login', () => {
    cy.viewport(1400, 750)
    cy.visit('')
    cy.get('.header-right > .MuiList-root > :nth-child(6) > a').click()
    //cy.visit('http://192.168.30.61:8090/login')
    loginpage.UserName().type('admin')
    loginpage.UserPassword().type('admin')
    loginpage.ClickLogin() 
    cy.url().should('include', '/admin')
    
  })

})

