export default class ChallengeModel2{
     memory128GB = '[data-value="802"] > a';
     price_20000_30000 = '[data-value="200000_300000"] > a';
     total_quantity = '.total-products > p';

     getMemory128GB(){
      cy.get(this.memory128GB).scrollIntoView().should('be.visible').click();
     }
     getPrice20000_30000(){
     cy.get(this.price_20000_30000).scrollIntoView().should('be.visible').click();
     }
     getTotalQuantity(){
     cy.get(this.total_quantity).invoke('text').then((text)=>{
         cy.log(`La cantidad de celulares encontrados es: ${text}`);
     });
     }

}
