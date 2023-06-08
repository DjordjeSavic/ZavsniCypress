

describe('login case', () => {
cy.visit('https://cypress.vivifyscrum-stage.com/login')

})

it('check all elements for login', () => {
    cy.get('[type="email"]').type('savcidjordje96+new001@gmail.com'),
    cy.get('[type="password"]').type(123456789),
    cy.get('[type="submit"]').click

})