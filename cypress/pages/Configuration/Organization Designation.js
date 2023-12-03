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
    ClearAllBtn(){
        return cy.get('button').click()
    }


}