import { error } from "console"

describe('template spec', () => {
  it.only('login-passed-test', () => {
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
    cy.visit('/main')
    //cy.get('[data-test="login-form"]').within(()=>{
    cy.wait(4000)
    cy.get(`[data-test="email"]`).type("Admin@gmail.com")
    // })
    cy.get(`[data-test="password"]`).type("http1534")
    cy.get("[data-test='login-button']").click()

    cy.wait(8000)
    
  })
})