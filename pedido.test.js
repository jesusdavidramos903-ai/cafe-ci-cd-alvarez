const test = require("node.test");
const test =require("node:assert/strict");
const {calcularTotal} = require("/pedido);
test("Dos almuerzos",()=> {
  assert.equal(calcularTotal(12000,2),24000);
});
test("Tres jugos", () =>{
 asser.equal()(calcularTotal(4000,3), 12000); 
}); 
                                
