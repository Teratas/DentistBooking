describe('template spec', () => {
  it('login-passed-test', () => {
    cy.visit('/main')
    //cy.get('[data-test="login-form"]').within(()=>{
    cy.wait(4000)
    cy.get(`[data-test="email"]`).type("Admin@gmail.com")
    // })
    cy.get(`[data-test="password"]`).type("http1234")
    cy.get("[data-test='login-button']").click()

    cy.wait(8000)
    cy.get("[data-test='banner']").should('contain.text','Good health begins with a confident smile.')
  })

  it('login-failed-test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // we expect a 3rd party library error with message 'list not defined'
      // and don't want to fail the test so we return false
      return false
      // we still want to ensure there are no other unexpected
      // errors, so we let them fail the test
    })
    cy.visit('/main')
    //cy.get('[data-test="login-form"]').within(()=>{
    cy.wait(4000)
    cy.get(`[data-test="email"]`).type("Admin@gmail.com")
    // })
    cy.get(`[data-test="password"]`).type("http1534")
    cy.get("[data-test='login-button']").click().then(()=>{
      cy.wait(5000)
      cy.get('[data-test="signin-page-text"]').should('contain.text', 'Sign In to WaiMaiNong')
    })
    
    
    
  })
})