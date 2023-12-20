// Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.


let numero = prompt("Insira um número de 1 a 7:");

switch(numero) {
    case '1':
        console.log("Domingo");
        document.write("Domingo");
        break;
    case '2':
        console.log("Segunda-feira");
        document.write("Segunda-feira");
        break;
    case '3':
        console.log("Terça-feira");
        document.write("Terça-feira");
        break;
    case '4':
        console.log("Quarta-feira");
        document.write("Quarta-feira");
        break;
    case '5':
        console.log("Quinta-feira");
        document.write("quinta-feira");
        break;
    case '6':
        console.log("Sexta-feira");
        document.write("Sexta-feira");
        break;
    case '7':
        console.log("Sábado");
        document.write("Sábado");
        break;
    default:
        console.log("Número inválido. Por favor, insira um número de 1 a 7.");
        document.write("Número inválido. Por favor, insira um número de 1 a 7.");
}
