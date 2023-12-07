/// <reference types="cypress"/>
import { BenefitFundPage } from "../../pages/Configuration/Benefit Fund";
const benefitfundpage = new BenefitFundPage()

describe('Benefit Functionality Testing', ()=>{
    it('Benefit Add', function(){
        cy.login('')
        benefitfundpage.ConfigurationMenu().click()
        benefitfundpage.BenefitFundMenu().click()
        benefitfundpage.SelectFundType().click()
        benefitfundpage.SelectFundTypeElement().click()
        benefitfundpage.BenefitFundNameEN().type('Test')
        benefitfundpage.BenefitFundNameBN().type('TestBN')
        benefitfundpage.AddBtn().click()
        cy.contains('TestBN').should('exist')
    })
})