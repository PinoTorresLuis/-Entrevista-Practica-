import validacionPruebas2 from "../pageObjets/prueba2.js";
const prueba2 = new validacionPruebas2;

beforeEach(() => {
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.clearCookies()
  });

describe('CP002 - Aplicar filtro de equipos', function(){
    it('Filtrar por Memoria Interna de 128GB y precio entre $200.00 - $300.000', function(){
        cy.viewport('samsung-s10')
        //Visitar la página de Movistar
        cy.visit('https://tiendaonline.movistar.com.ar')

        //Filtros
        prueba2.getFilter().should('be.visible').click();
        prueba2.getMemory128GB().should('be.visible').click();
        prueba2.getFilter().should('be.visible').click();
        prueba2.getPrice20000_30000().should('be.visible').click();
        prueba2.getTotalEquipos().invoke('text').then((text)=>{
            cy.log('La cantidad de celulares encontrados es:' + text);
        });

    })
})

