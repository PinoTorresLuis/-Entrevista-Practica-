import validacionPruebas3 from "../pageObjets/validation3.js";
const test3 = new validacionPruebas3;

describe('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista - Banco.Credicoop -Tarjeta.Visa', function(){
    before (()=>{
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include', 'https://tiendaonline.movistar.com.ar'); 
        cy.viewport(1280,800);
    })

    it('Que el equipo seleccionado sea el tercero de la lista', ()=>{
        test3.getThirdDevice();
        test3.openInstallmentBtn();
        test3.selectBankAndCard();
        test3.calculateInstallments();
    })

})