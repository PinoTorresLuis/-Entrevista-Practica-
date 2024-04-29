import ChallengeModel1 from "../../support/pageObjects/challengeModel1.js";//Importando la clase
const challenge1 = new ChallengeModel1();//Iniciación de la clase

describe('CP001- Validar cuotas en compra de equipo -Cuotas.3 -Equipo.A14', function(){
    before(function(){
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include', 'https://tiendaonline.movistar.com.ar'); 
        cy.viewport(1280,800);
    })
    it('Encontrar equipo SA1 y verificar que se pueda pagar en 6 cuotas sin interés',()=>{
        challenge1.findMobile();//Función para encontrar el equipo seleccionado 
        challenge1.getFinancing(); //Función para traer la cantidad de cuotas. Actualmente en la página todos los productos dicen 6 cuotas sin interés.
    })

})

