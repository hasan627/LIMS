/// <reference types="cypress"/>
import { OrganizationDesignationPage } from "../../pages/Configuration/Organization Designation";
const organizationdesignationpage = new OrganizationDesignationPage();

describe("Organization Designation", function(){
    
    it('Organization Add', () => {
        cy.login("admin", "admin")
    organizationdesignationpage.ConfigurationMenu().click()
    organizationdesignationpage.OrganizationStandardDesignation().click()
    organizationdesignationpage.OrganizationDesignationEN().type('Software Quality Assurance Engineer')
    organizationdesignationpage.OrganizationDesignationBN().type('সফটওয়্যার কোয়ালিটি অ্যাসুরেন্স ইন্জিঃ')
    organizationdesignationpage.AddBtn().click()
    cy.contains('Software Quality Assurance Engineer').should('be.true')
    })    
    
})
