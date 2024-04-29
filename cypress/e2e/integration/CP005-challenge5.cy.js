import ChallengeModel5 from "../../support/pageObjects/challengeModel5.js";//Importando la clase
const challenge5 = new ChallengeModel5();//Iniciación de la clase

describe('CP005 - Verificar que no se pueda finalizar la compra sin que el formulario esté completo y aparezca el mensaje de alerta', function(){
    before (()=>{
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include', 'https://tiendaonline.movistar.com.ar'); 
        cy.viewport(1280,800);
    })

    it('Seleccionar Moto G13 128Gb 4G, comprobar que el equipo agregado sea el correcto y verificar formulario', ()=>{
        challenge5.findMobilePhone(); //Función para encontrar el equipo especificado.
        challenge5.checkout_item(); //Función para chequear que el producto agregado sea el correcto
        challenge5.complete_Form();//Función para verificar el formulario
    })
    /*Configuración para evitar que el testeo falle al cargar el formulario después de dar click boton en comprar.
    Error que me aparecería al intentar cargar el formulario:
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