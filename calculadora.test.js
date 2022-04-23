const Operaciones = require("./Operaciones");

describe("operaciones", ()=>{
    test("sumar", ()=>{
        expect(Operaciones.sumar(1, 2)).toBe(3);
    });
    test("restar", ()=>{
        expect(Operaciones.restar(2, 1)).toBe(1);
    });
    test("dividir", ()=>{
        expect(Operaciones.dividir(4, 2)).toBe(2);
    });
    test("multiplicar", ()=>{
        expect(Operaciones.multiplicar(3, 2)).toBe(6);
    });
});