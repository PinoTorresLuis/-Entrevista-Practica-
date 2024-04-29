import ChallengeModel5 from "../../support/pageModels/challengeModel5.js";
const challenge5 = new ChallengeModel5();

describe('CP005 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista - Banco.Credicoop -Tarjeta.Visa', function(){
    before (()=>{
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include', 'https://tiendaonline.movistar.com.ar'); 
        cy.viewport(1280,800);
    })

    it('Seleccionar Moto G13 128Gb 4G, comprobar que el equipo agregado sea el correcto y no permitir finalizar la compra sin completar todos los datos del formulario', ()=>{
        challenge5.findMobilePhone();
        challenge5.checkout_item();
        challenge5.complete_Form();
    })
    /*Configuración para evitar que el testeo falle al cargar el formulario después de dar click boton en comprar.Error que me aparecería:
    (uncaught exception)SyntaxError: Unexpected identifier 'jQuery'
    The following error originated from your application code, not from Cypress.
    > Unexpected identifier 'jQuery'
    When Cypress detects uncaught errors originating from your application it will automatically fail the current test.
    This behavior is configurable, and you can choose to turn this off by listening to the uncaught:exception even 
    */
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
})