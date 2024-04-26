export default class TestValidations2{
     //Localizador
     filter = '.block-subtitle';
     memory128GB = '[data-value="802"] > a';
     price_20000_30000 = '[data-value="200000_300000"] > a';
     total_quantity = '.total-products > p';

     getFilter(){
        return cy.get(this.filter).should('be.visible').click();
     }
     getMemory128GB(){
        return cy.get(this.memory128GB).should('be.visible').click();
     }
     getPrice20000_30000(){
        return cy.get(this.price_20000_30000).should('be.visible').click();
     }
     getTotalQuantity(){
        return cy.get(this.total_quantity).invoke('text').then((text)=>{
         cy.log('La cantidad de celulares encontrados es:' + text);
     });
     }

}