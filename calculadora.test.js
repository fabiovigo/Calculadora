const Operaciones = require ("./Operaciones")
var op = new Operaciones;

describe("operaciones", ()=>{
    test("sumar", ()=>{
        expect(op.sumar(1, 2)).toBe(3);
    });
    test("restar", ()=>{
        expect(op.restar(2, 1)).toBe(1);
    });
    test("dividir", ()=>{
        expect(op.dividir(4, 2)).toBe(2);
    });
    test("multiplicar", ()=>{
        expect(op.multiplicar(3, 2)).toBe(6);
    });
});