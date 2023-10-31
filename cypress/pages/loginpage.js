/// <reference types="cypress" />
export class LoginPage{
    UserName(){
        return cy.get("[name='username']")
    }
    UserPassword(){
        return cy.get("[name='password']")
    }
    ClickLogin(){
        return cy.get('button').click()
    }

}