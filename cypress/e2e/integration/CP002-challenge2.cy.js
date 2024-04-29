import ChallengeModel2 from "../../support/pageObjects/challengeModel2.js";//Importando la clase
const challenge2 = new ChallengeModel2(); //Iniciación de la clase

describe('CP002 -Aplicar filtro de equipos -Memoria Interna.128GB -Precio Entre 200Ky300K', function(){
    before(function(){
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include','https://tiendaonline.movistar.com.ar'); 
        cy.viewport(1280,800);
    })
    
    it('Obteniendo equipos con Memoria Interna de 128GB y precio entre $200.00 - $300.000',()=>{
        challenge2.getMemory128GB();//Función para filtrar los equipos por su Memoria Interna
        challenge2.getPrice20000_30000();//Función para filtrar los equipos por su precio
        challenge2.getTotalQuantity();//Función para obtener el total de celulares
    })
})

