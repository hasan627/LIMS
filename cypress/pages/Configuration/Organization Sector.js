/// <reference types="cypress"/>

export class OrganizationSectorPage{
    ConfigurationMenu(){
        return cy.contains('Configuration')
    }
    OrganizationSectorMenu(){
        return cy.contains('Organization Sector')
    }

    OrganizationSectorNameEN(){
        return cy.get('input[placeholder*="Enter Organization Sector Name (English)"]')
    }

    OrganizationSectorNameBN(){
        return cy.get('input[placeholder*="Enter Organization Sector Name (Bangla)"]')
    }
    SubmitBtn(){
        return cy.xpath('//button[@type="submit"]')
    }

}