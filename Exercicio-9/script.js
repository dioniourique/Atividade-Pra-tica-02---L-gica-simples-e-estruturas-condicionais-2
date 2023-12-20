// Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.


let velocidade = +prompt("Digite a velocidade do carro:");

if (velocidade > 80) {
    let kmAcima = velocidade - 80;
    let multa = kmAcima * 5;
    console.log(`Você foi multado. O valor da multa é R$${multa.toFixed(2)}.`);
    document.write(`Você foi multado. O valor da multa é R$${multa.toFixed(2)}.`);
} else {
    console.log("Você não foi multado.");
    document.write("Você não foi multado.");
}
