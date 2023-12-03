/// <reference types="cypress" />
export class OrganizationDesignationPage{

    ConfigurationMenu(){
        return cy.contains('Configuration')
    }
    
    OrganizationStandardDesignation(){
        return cy.contains('Organization Standard Designation')
    }
    OrganizationDesignationEN(){
        return cy.get('input[placeholder*="Enter Organization Standard Designations Name (English)"]')
    }
    OrganizationDesignationBN(){
        return cy.get('input[placeholder*="Enter Organization Standard Designations Name (Bangla)"]')
    }
    AddBtn(){
        return cy.xpath("//button[@type='submit']")
    }
    EditBtn(){
        return cy.get(':nth-child(2) > .css-jky7cf')
    }
    ClearAllBtn(){
        return cy.get('button').click()
    }
    UpdateBtn(){
        cy.get('.submitBtnBox > .MuiButton-outlinedPrimary')
    }


}