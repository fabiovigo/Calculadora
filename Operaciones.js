/* module.exports = class Operaciones{*/
/*Si pones esta linea de codigo peta*/
class Operaciones{

    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }
    multiplicar(num1, num2) {
        return num1 * num2;
    }
    raiz_cuadrada(num1){
        return Math.sqrt(num1);
    }
    potencia(num1,num2){
        return Math.pow(num1,num2);
    }

}
module.exports = new Operaciones;

 

