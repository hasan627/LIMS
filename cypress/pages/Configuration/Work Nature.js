/// <reference types="cypress" />

export class WorkNaturePage{
    ConfigurationMenu(){
        return cy.contains('Configuration')
    }
    WorkNatureMenu(){
        return cy.contains('Work Nature')
    }

    WorkNatureNameEN(){
        return cy.get('input[placeholder*="Enter Work Nature Name (English)"]')
    }

    WorkNatureNameBN(){
        return cy.get('input[placeholder*="Enter Work Nature Name (Bangla)"]')
    }
    SubmitBtn(){
        return cy.xpath('//button[@type="submit"]')
    }

    ClearAllBtn(){
        return cy.get('.MuiButton-outlinedError')
    }
    EditBtn(){
        return cy.get(':nth-child(2) > .css-jky7cf > .css-vuyuzi')
    }
}