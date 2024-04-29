import ChallengeModel4 from "../../support/pageObjects/challengeModel4.js";//Importando la clase
const challenge4 = new ChallengeModel4();//Iniciación de la clase

describe('CP004-Validar que el carrito esté vacio al eliminar el producto del mismo, Equipo Moto G13, ViewPort :Samsung-s10 ',function(){
    before(function(){
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include','https://tiendaonline.movistar.com.ar');
        cy.viewport('samsung-s10'); 
    })
    it('Seleccionando equipo Moto G13 128Gb 4G, chequeando que se haya agregado correctamente y el formulario deberia fallar',()=>{
        challenge4.findMobilePhone(); //Función para encontrar el equipo Moto G13 128Gb 4G.
        challenge4.checkout_cart(); //Función para verificar que el producto agregado sea el correcto.
        challenge4.delet_cart(); //Función para borrar el producto agregado del carrito.
        challenge4.checkout_cart_empty(); //Comprobando que el carrito borró el contador.
    })
})

