describe('template spec', () => {
  it('add-and-delete-dentist', () => {
    //visit main
    cy.visit('/main')
    
    cy.wait(4000)
    //login
    cy.get(`[data-test="email"]`).type("Admin@gmail.com")
    cy.get(`[data-test="password"]`).type("http1234")
    cy.get("[data-test='login-button']").click()
    //wait for login
    cy.wait(8000)
    
    //go to dentist page
    cy.get('[data-test="go-to-dentists"]').click()
    cy.location("pathname").should('equal','/dentistPage')
    cy.get('[data-test="add-dentist"]').click()
    cy.location("pathname").should('equal','/addDentistForm')
    //input form data
    cy.get(`[data-test="dentist-name"]`).type("หมอปลา")
    cy.get(`[data-test="dentist-hospital"]`).type("รางโบล ฮอสปิตัล")
    cy.get(`[data-test="dentist-address"]`).type("บ้าน")
    cy.get(`[data-test="dentist-expertist"]`).type("ปราบผี")
    cy.get(`[data-test="dentist-tel"]`).type("893725973")
    cy.get(`[data-test="dentist-picture"]`).type("http1234.com")
    cy.get(`[data-test="add-dentist-button"]`).click()
    cy.wait(8000)
    //go to all dentist page
    cy.get('[data-test="go-to-dentists"]').click()
    cy.location("pathname").should('equal','/dentistPage')
    cy.get('[data-test="dentist-item-หมอปลา"]').click()
    cy.get('[data-test="delete-dentist-button"]').click()
    //no doctor pla after delete
    cy.get('[data-test="dentist-item-หมอปลา"]').should('not.exist')
  })
})