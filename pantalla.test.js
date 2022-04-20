const Operaciones = require("./Operaciones")
const Pantalla = require("./Pantalla")

var pantalla = new Pantalla(2,2);

describe("pantalla", ()=>{
    test("Agregar un número", ()=>{
        
        expect(pantalla.agregarNumero(2)).toBe(232);
    });
  
});