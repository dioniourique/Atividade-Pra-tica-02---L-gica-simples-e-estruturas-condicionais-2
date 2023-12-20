// O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.


let custoFabrica = prompt("Insira o custo de fábrica do carro:");
custoFabrica = Number(custoFabrica);

if (custoFabrica != custoFabrica) {
    console.log("Por favor, insira um número válido.");
} else {
    let percentualDistribuidor = 28/100;
    let impostos = 45/100;

    let custoFinal = custoFabrica + (custoFabrica * percentualDistribuidor) + (custoFabrica * impostos);
    custoFinal = custoFinal.toFixed(2);

    console.log("O custo final ao consumidor é: R$" + custoFinal);
    document.write("O custo final ao consumidor é; R$" + custoFinal);
}
