export default class TestValidations1{
    mobile_SA14 ='[data-id="14908"]';
    financing = '.financing';

    findMobile(){
        cy.get(this.mobile_SA14).should('be.visible').then(()=>{
        cy.contains('A14').click();
        })
    }

    getFinancing(){
        cy.get(this.financing).invoke('text').then((text) => {
            cy.log('Texto encontrado: ' + text);
          });
    }
}