/// <reference types="cypress"/>

import { OrganizationDesignationPage } from '../../pages/Configuration/Organization Designation';
const organizationdesignationpage = new OrganizationDesignationPage();
const csv = require ('neat-csv');

describe('Read CSV', function(){
    var table;

    before(()=>{
        cy.fixture('designation.csv')
        .then(csv) // Convert csv file into an object
        .then(data =>{
            table = data;
        })
        // .then(console.table)
    });

    for(let i=0; i<2; i++){
    it('Fill input field using csv data', ()=>{
        cy.login('')
        organizationdesignationpage.ConfigurationMenu().click()
        organizationdesignationpage.OrganizationStandardDesignation().click()
        organizationdesignationpage.OrganizationDesignationEN().type(table[i] ['NameEN'])
        organizationdesignationpage.OrganizationDesignationBN().type(table[i] ['NameBN'])
        organizationdesignationpage.AddBtn().click()
   
    });
} 
});