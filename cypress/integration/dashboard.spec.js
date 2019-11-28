
describe('Use Dashboard', () => {

  it('Using the dashboard', () => {
    cy.visit('http://localhost:8000/')
    cy.get('.pricing').should('have.exist')
    cy.get('.pricing').should('have.text', 'Product pricing')
    cy.get('select[name="supplier"]').should('have.exist')
    cy.get('select[name="supplier"]').select('New Co Ltd')
    cy.get('select[name="product"]').should('have.exist')
    cy.get('select[name="product"]').select('Small wongle')
    cy.get('.submitbtn').should('have.text','Submit').click()



    cy.get('select[name="supplier"]').should('have.exist')
    cy.get('select[name="supplier"]').select('New Co Ltd')
    cy.get('select[name="product"]').should('have.exist')
    cy.get('select[name="product"]').select('Mini wongle')
    cy.get('.submitbtn').should('have.text','Submit').click()
    cy.get('.Toastify__toast-container').should('have.exist')

    cy.get('.product').should('have.text', 'Product details')

    cy.get('.supplierentry').should('have.text', 'New Co Ltd')
    cy.get('.productentry').should('have.text', 'Small wongle')
    cy.get('.priceentry').should('have.text', '5')


  })
})
