import ChallengeModel3 from "../../support/pageObjects/challengeModel3.js";//Importando la clase
const challenge3 = new ChallengeModel3();//Iniciación de la clase

describe('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista - Banco.Credicoop -Tarjeta.Visa', function(){
    before (()=>{
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include', 'https://tiendaonline.movistar.com.ar'); 
        cy.viewport(1280,800);
    })

    it('Obtener 3er equipo de la lista y validando si tiene 60 cuotas con credicoop visa ', ()=>{
        challenge3.getThirdDevice();//Función para obtener el tercer equipo de la lista
        challenge3.openQuotaBtn(); //Función para abrir el botón de cuotas 
        challenge3.selectBankAndCard();//Función para seleccionar el banco y la tarjeta especificadas
        challenge3.calculateQuotas();//Función para calcular cuotas y verificar que cumpla la condición
    })

})