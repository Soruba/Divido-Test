describe('Form',()=>{

    it('Filling test form',()=>{

     
        cy.visit('/#/token/e381cfede80d2154fc007da2724e2a63/')
        cy.url().should('include','e381cfede80d2154fc007da2724e2a63')
        cy.location('protocol').should('eq','https:')       
       

        //Firstname
        cy.get('[name=firstName]').should('be.visible')
        .should('be.enabled').clear().type("Soruba")

        //Middlename
        cy.get('[name=middleNames]').should('be.visible')
        .should('be.enabled').clear().type("Marcel")

        //LastName
        cy.get('[name=lastName]').should('be.visible')
        .should('be.enabled').clear().type("John")

        //DateOfBirth
        cy.get('[name=dateOfBirth]').should('be.visible')
        .should('be.enabled').clear().type("01/01/2000")

        //Years at address
        cy.get('[name=monthsAtAddress]')
        .select('3 year')
        .should('have.value','36')

        //MaritalStatus
        cy.get('[name=maritalStatus]')
        .select('Married')
        .should('have.value','married')

        //Residential Status
        cy.get('[name=occupancyStatus]')
        .select('Tenant')
        .should('have.value','tenant')

        //Employment status
        cy.get('[name=employmentStatus]')
        .select('Student')
        .should('have.value','student')

        //Gross annual income
        cy.get('[name=grossIncome]')
        .select('£ 5,000+')
        .should('have.value','5000')

        //Sort code
        cy.get('[name=sortCode]')
        .type('40-02-45')

        //Account Number
        cy.get('[name=accountNumber]')
        .clear().type('30165549')

        //Confirmation
        cy.get('[data-testid=acceptDirectDebit]').click()
        cy.get('[data-testid=disclaimer]').click()


        //Complete purchase
        cy.get('[data-testid=button-next]').click()

        //Validation
        cy.url().should('include','e381cfede80d2154fc007da2724e2a63')
    })
})