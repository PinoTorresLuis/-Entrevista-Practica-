import ChallengeModel4 from "../../support/pageModels/challengeModel4.js";
const challenge4 = new ChallengeModel4;


describe('CP004-Verificar que el formulario de compra esté completado en su totalidad para poder continuar con la compra',function(){
    before(function(){
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include','https://tiendaonline.movistar.com.ar');
        cy.viewport('samsung-s10');
    })
    it('Seleccionando equipo, chequeando que se haya agregado correctamente y el formulario deberia fallar',()=>{
        challenge4.findMobilePhone();
        challenge4.checkout_cart();
        challenge4.delet_cart();
        challenge4.checkout_cart_empty();
    })
})

