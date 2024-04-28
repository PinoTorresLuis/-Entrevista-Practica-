import TestValidations2 from "../pageObjets/validation2.js";
const test2 = new TestValidations2;

describe('CP002 - Aplicar filtro de equipos', function(){
    before(function(){
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include','https://tiendaonline.movistar.com.ar'); 
        cy.viewport(1280,800);
    })
    
    it('Filtrar por Memoria Interna de 128GB y precio entre $200.00 - $300.000',()=>{
        test2.getMemory128GB();
        test2.getPrice20000_30000();
        test2.getTotalQuantity();
    })
})

