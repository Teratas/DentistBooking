describe('template spec', () => {
  it('add-and-delete-dentist', () => {
    //skip all aapi bug/error that does not effect
    // Cypress.on('uncaught:exception', (err, runnable) => {
    //   // we expect a 3rd party library error with message 'list not defined'
    //   // and don't want to fail the test so we return false
    //   if (err.message.includes('Failed to fetch Users')) {
    //     return false
    //   }
    //   // we still want to ensure there are no other unexpected
    //   // errors, so we let them fail the test
    // })
    //visit main
    cy.visit('/main')
    
    cy.wait(2000)
    //login
    cy.get(`[data-test="email"]`).type("Admin@gmail.com")
    cy.get(`[data-test="password"]`).type("http1234")
    cy.get("[data-test='login-button']").click()
    //wait for login
    cy.wait(4000)
    
    //go to dentist page
    cy.get('[data-test="go-to-dentists"]').click()
    cy.location("pathname").should('equal','/dentistPage')
    cy.get('[data-test="add-dentist"]').click()
    cy.location("pathname").should('equal','/addDentistForm')
    //input form data
    cy.get(`[data-test="dentist-name"]`).type("dr.pla")
    cy.get(`[data-test="dentist-hospital"]`).type("รางโบล ฮอสปิตัล")
    cy.get(`[data-test="dentist-address"]`).type("บ้าน")
    cy.get(`[data-test="dentist-expertist"]`).type("ปราบผี")
    cy.get(`[data-test="dentist-tel"]`).type("893725973")
    cy.get(`[data-test="dentist-picture"]`).type("http1234.com")
    cy.get(`[data-test="add-dentist-button"]`).click()
    // cy.wait(8000)
    //go to all dentist page
    cy.get('[data-test="go-to-dentists"]').click()
    cy.location("pathname").should('equal','/dentistPage')
    cy.get('[data-test="dentist-item-dr.pla"]').click()
    cy.get('[data-test="delete-dentist-button"]').click().then(()=>{
      //cy.get('[data-test="dentist-item-หมอปลา"]').should('not.exist')
    })
    
    // cy.wait(3000)
    // cy.location("pathname").should('equal','/dentistPage')
    // //no doctor pla after delete
    // cy.get('[data-test="dentist-item-หมอปลา"]').should('not.exist')
  })
})