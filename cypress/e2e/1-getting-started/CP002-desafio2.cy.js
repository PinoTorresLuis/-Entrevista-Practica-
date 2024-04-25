describe('CP002 - Aplicar filtro de equipos', function(){
    it('Filtrar por Memoria Interna de 128GB y precio entre $200.00 - $300.000', function(){
        //Visitar la página de Movistar
        cy.visit('https://tiendaonline.movistar.com.ar')

        //Filtros
        cy.get('filter-item').type('128GB')
        cy.get('filter-item').type('$200.000 - $300.000{enter}')
    
        // Verifica que se obtengan equipos luego del filtrado validando la cantidad mostrada
        cy.get('.product-list').children().should('have.length', '1')

    })
})

