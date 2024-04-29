import ChallengeModel3 from "../../support/pageModels/challengeModel3.js";
const challenge3 = new ChallengeModel3;

describe('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista - Banco.Credicoop -Tarjeta.Visa', function(){
    before (()=>{
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include', 'https://tiendaonline.movistar.com.ar'); 
        cy.viewport(1280,800);
    })

    it('Obtener 3er equipo de la lista y validando si tiene 60 cuotas con credicoop visa ', ()=>{
        challenge3.getThirdDevice();
        challenge3.openQuotaBtn();
        challenge3.selectBankAndCard();
        challenge3.calculateQuotas();
    })

})