/// <reference types="cypress"/>
import { OrganizationDesignationPage } from "../../pages/Configuration/Organization Designation";
const organizationdesignationpage = new OrganizationDesignationPage();

describe("Organization Designation", function(){
    
    //This test case is for create.
    it("Create Organization Designation", function(){
        cy.login("admin", "admin")
        organizationdesignationpage.OrganizationStandardDesignation().click()

    })
})