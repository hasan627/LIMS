///<reference types="cypress"/>
import { WorkNaturePage } from "../../pages/Configuration/Work Nature";
const worknaturepage = new WorkNaturePage()

describe('Work Nature CRUD', () => {
    
    //Create
    it('Work Nature Create', () => {
        cy.login('')
        worknaturepage.ConfigurationMenu().click()
        worknaturepage.WorkNatureMenu().click()
        worknaturepage.WorkNatureNameEN().type('Seasonal')
        worknaturepage.WorkNatureNameBN().type('মৌসুমী')
        worknaturepage.SubmitBtn().click()
        cy.contains('Seasonal').should('exist')

    })

    //ClearAll
    it('Verify Clear All button', () => {
        cy.login('')
        worknaturepage.ConfigurationMenu().click()
        worknaturepage.WorkNatureMenu().click()
        worknaturepage.WorkNatureNameEN().type('Seasonal')
        worknaturepage.WorkNatureNameBN().type('মৌসুমী')
        worknaturepage.ClearAllBtn().click()
        worknaturepage.WorkNatureNameEN().should('be.empty')
        worknaturepage.WorkNatureNameBN().should('be.empty')
    })

    //Update
    it.only('Update Testing', () => {
        cy.login('')
        worknaturepage.ConfigurationMenu().click()
        worknaturepage.WorkNatureMenu().click()
        worknaturepage.EditBtn().click()
        worknaturepage.SubmitBtn().click()
    
    })
})