export default class validacionPruebas2{
     //Localizador
     filter = '.block-subtitle';
     memory128GB = '[data-value="802"] > a';
     price_20000_30000 = '[data-value="200000_300000"] > a';
    total_equipos = '.total-products > p';

     getFilter(){
        return cy.get(this.filter);
     }
     getMemory128GB(){
        return cy.get(this.memory128GB);
     }
     getPrice20000_30000(){
        return cy.get(this.price_20000_30000);
     }
     getTotalEquipos(){
        return cy.get(this.total_equipos);
     }

}