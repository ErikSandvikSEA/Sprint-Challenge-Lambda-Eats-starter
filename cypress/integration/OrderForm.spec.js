describe('Order Form', () => {
     it('can navigate to the site', () => {
          cy.visit(`http://localhost:3000/pizza`)
          cy.url().should(`include`, `localhost`)
     })
     it('can submit a friend (happy path)', () => {
          cy.get(`[data-cyName='cyName']`)
               .type('name here')
               .should(`have.value`, 'name here')


          cy.get(`input[name='pepperoni']`)
               .check()
               .should(`have.checked`)

          cy.get(`select[name='size']`)
               .select('small')
               .should(`have.value`, 'small')

          cy.contains(`Submit Order`)
               .click()     
     })
})