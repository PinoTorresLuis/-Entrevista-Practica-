import validacionPruebas3 from "../pageObjets/validation3.js";
const prueba3 = new validacionPruebas3;

beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.clearCookies();
  });

describe('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista - Banco.Credicoop -Tarjeta.Visa', function(){
    before (()=>{
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include', 'https://tiendaonline.movistar.com.ar'); 
        cy.viewport(1280,800);
    })

    it('Que el equipo seleccionado sea el tercero de la lista', ()=>{
        //Find
        prueba3.getTercerEquipo();
        prueba3.getBotonCuotas();
        prueba3.seleccionar_banco_y_tarjeta();
        prueba3.calcular_Cuotas();
    })

})