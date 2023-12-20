// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.


let numero1 = Number(prompt("Insira o primeiro número:"));
let numero2 = Number(prompt("Insira o segundo número:"));
let operacao = prompt("Insira a operação matemática (por exemplo, +, -, *, /):");

let resultado;

switch(operacao) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':
        if(numero2 != 0) {
            resultado = numero1 / numero2;
        } else {
            console.log("Erro: Divisão por zero não é permitida.");
            document.write("Erro: Divisão por zero não é permitida.");
            break;
        }
        break;
    default:
        console.log("Operação inválida. Por favor, insira uma das seguintes operações: +, -, *, /");
        document.write("Operação inválida. Por favor, insira uma das seguintes operações: +, -, *, /");
        break;
}

if(resultado !== undefined) {
    console.log("O resultado da operação é: " + resultado);
    document.write("O resultado da operação é: " + resultado);
}
