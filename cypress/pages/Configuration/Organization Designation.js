/// <reference types="cypress" />
export class OrganizationDesignationPage{

    OrganizationStandardDesignation(){
        return cy.get("[name='']")
    }
    OrganizationDesignationEN(){
        return cy.get("[name='name']")
    }
    OrganizationDesignationBN(){
        return cy.get("[name='nameBN']").click()
    }
    AddBtn(){
        return cy.get('button').click()
    }
    ClearAllBtn(){
        return cy.get('button').click()
    }


}