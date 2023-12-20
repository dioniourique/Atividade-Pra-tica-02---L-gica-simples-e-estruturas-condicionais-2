// Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.



let saldoInicial = +prompt("Digite o saldo inicial:");
let taxaSaque = 4.50;
let valorSaque = +prompt("Digite o valor que deseja sacar:");

let valorTotal = valorSaque + taxaSaque;

if (valorSaque <= 0 || valorSaque % 5 !== 0) {
    console.log("O valor do saque deve ser um número positivo e múltiplo de 5.");
    document.write("O valor do saque deve ser um número positivo e múltiplo de 5.");
} else if (valorTotal > saldoInicial) {
    console.log("Saldo insuficiente para realizar o saque.");
    document.write("Saldo insuficiente para realizar o saque.");
} else {
    saldoInicial -= valorTotal;
    console.log(`Saque realizado com sucesso. Seu saldo atual é R$${saldoInicial.toFixed(2)}.`);
    document.write(`Saque realizado com sucesso. Seu saldo atual é R$${saldoInicial.toFixed(2)}.`);
}
