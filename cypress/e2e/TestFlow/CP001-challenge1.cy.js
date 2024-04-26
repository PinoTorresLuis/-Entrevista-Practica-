import TestValidations1 from "../pageObjets/validation1.js";
const test1 = new TestValidations1;

beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.clearCookies();
  });

describe('CP001- Validar cuotas en compra de equipo', function(){
    before(function(){
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include', 'https://tiendaonline.movistar.com.ar'); 
        cy.viewport(1280,800);
    })
    it('Encontrar equipo SA1 y verificar que se pueda pagar en 3 cuotas sin interés',()=>{
        test1.findMobile();
        test1.getFinancing();
    })

})

