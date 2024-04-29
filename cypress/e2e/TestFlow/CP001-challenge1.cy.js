import ChallengeModel1 from "../../support/pageModels/challengeModel1.js";
const challenge1 = new ChallengeModel1;

describe('CP001- Validar cuotas en compra de equipo -Cuotas.3 -Equipo.A14', function(){
    before(function(){
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include', 'https://tiendaonline.movistar.com.ar'); 
        cy.viewport(1280,800);
    })
    it('Encontrar equipo SA1 y verificar que se pueda pagar en 3 cuotas sin interés',()=>{
        challenge1.findMobile();
        challenge1.getFinancing();
    })

})

