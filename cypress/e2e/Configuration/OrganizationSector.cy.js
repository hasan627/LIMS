/// <reference types="cypress"/>
import { OrganizationSectorPage } from "../../pages/Configuration/Organization Sector";
const organizationsectorpage = new OrganizationSectorPage();

describe ("Organization Sector CRUD", function(){
    it ("Organization Sector Add", () => {
        cy.login()
    organizationsectorpage.ConfigurationMenu().click()
    organizationsectorpage.OrganizationSectorMenu().click()
    organizationsectorpage.OrganizationSectorNameEN().type('test')
    organizationsectorpage.OrganizationSectorNameBN().type('testBN')
    })
})