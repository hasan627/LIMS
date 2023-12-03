/// <reference types="cypress"/>
import { OrganizationDesignationPage } from "../../pages/Configuration/Organization Designation";
const organizationdesignationpage = new OrganizationDesignationPage();

describe("Organization Designation", function(){
    
    //Organization Add
    it('Organization Add', () => {
        cy.login("admin", "admin")
    organizationdesignationpage.ConfigurationMenu().click()
    organizationdesignationpage.OrganizationStandardDesignation().click()
    organizationdesignationpage.OrganizationDesignationEN().type('Business Analyst')
    organizationdesignationpage.OrganizationDesignationBN().type('বিজনেস এনালিস্ট')
    organizationdesignationpage.AddBtn().click()
    cy.contains('Business Analyst').should('exist')

    })
    
    //Duplicate check.
    it('Duplicate Organization Value check', function(){
        cy.login("admin", "admin")
    organizationdesignationpage.ConfigurationMenu().click()
    organizationdesignationpage.OrganizationStandardDesignation().click()
    organizationdesignationpage.OrganizationDesignationEN().type('Software Quality Assurance Engineer')
    organizationdesignationpage.OrganizationDesignationBN().type('সফটওয়্যার কোয়ালিটি অ্যাসুরেন্স ইন্জিঃ')
    organizationdesignationpage.AddBtn().click()
    cy.get('.MuiFormHelperText-root').should('exist')
    })

    //Organization Update
    it('Organization Update', function(){
        cy.login("admin", "admin")
    organizationdesignationpage.ConfigurationMenu().click()
    organizationdesignationpage.OrganizationStandardDesignation().click()
    organizationdesignationpage.EditBtn().click()
    organizationdesignationpage.OrganizationDesignationEN().clear().type('Quality Assurance Engineer')
    organizationdesignationpage.OrganizationDesignationBN().clear().type('কোয়ালিটি অ্যাসুরেন্স ইন্জিঃ')
    organizationdesignationpage.AddBtn().click()
    })
    

})
