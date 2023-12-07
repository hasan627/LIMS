/// <reference types="cypress"/>

export class BenefitFundPage{

    ConfigurationMenu(){
        return cy.contains('Configuration')
    }
    
    BenefitFundMenu(){
        return cy.contains('Benefit Fund')
    }

    SelectFundType(){
        return cy.get('.css-r85p5r > .MuiFormControl-root > .MuiBox-root > .MuiInputBase-root > #mui-component-select-fundTypeId')
    }
    SelectFundTypeElement(){
        return cy.xpath('//li[@tabindex="0"]')
    }
    BenefitFundNameEN(){
        return cy.get('input[placeholder*="Enter Benefit Fund Name (English)"]')
    }
    BenefitFundNameBN(){
        return cy.get('input[placeholder*="Enter Benefit Fund Name (Bangla)"]')
    }
    AddBtn(){
        return cy.xpath("//button[@type='submit']")
    }

}