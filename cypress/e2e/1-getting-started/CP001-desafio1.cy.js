describe('CP001- Validar cuotas en compra de equipo', function(){
    it('Verificar que se pueda pagar en 3 cuotas sin interés', function(){
        cy.visit('https://tiendaonline.movistar.com.ar')

        cy.get('[data-ga-product-comercial_name="Samsung Galaxy A14 4G"]').should('be.visible')

        cy.contains('A14').click()

        cy.get('.financing').invoke('text').then((text) => {
            cy.log('Texto encontrado: ' + text);
          });
    })
})

