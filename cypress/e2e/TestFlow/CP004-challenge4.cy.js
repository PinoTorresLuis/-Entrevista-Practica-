import TestValidations4 from "../pageObjets/validations4.js";
const test4 = new TestValidations4;


describe('CP004-Verificar que el formulario de compra esté completado en su totalidad para poder continuar con la compra',function(){
    before(function(){
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include','https://tiendaonline.movistar.com.ar');
        cy.viewport('samsung-s10');
    })
    it('Seleccionar un equipo celular y completar formulario',()=>{
        test4.findMobilePhone();
        test4.checkout_cart();
        test4.delet_cart();
        test4.checkout_cart_empty();
    })
})

