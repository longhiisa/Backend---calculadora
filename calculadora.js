// const prompt = require('prompt-sync')();

const promptSync = require('prompt-sync');
const prompt = promptSync();

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        return "Erro: Divisão por zero";
    }}

function exponenciacao(a, b) {
    return a ** b;
}

function Raiz(a) {
    return Math.sqrt(a);
}

function seno(a){
    return Math.sin(a);
}

cos
tan


while (true) {
    let escolha = prompt("Escolha a operação: 1. Soma, 2. Subtração, 3. Multiplicação, 4. divisão, 5. exponenciacao, 6. Raiz, 7.Seno, 8. Cosseno, 9. Tangente, 10. Sair");

    if (escolha === "6") {
        break;
    }

    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));

    if (escolha === "1") {
        console.log("Resultado: ", soma(num1, num2));
    } else if (escolha === "2") {
        console.log("Resultado: ", subtracao(num1, num2));
    } else if (escolha === "3") {
        console.log("Resultado: ", multiplicacao(num1, num2));
    } else if (escolha === "4") {
        console.log("Resultado: ", divisao(num1, num2));
    } else if (escolha === "5") {
        console.log("o de Resultado de", num1, "Elevado á", num2 , "é:", exponenciacao(num1, num2));
    }else if (escolha === "6") {
            console.log("o de Resultado é:", seno(num1));
    }  else if (escolha === "7") {
                console.log("o de Resultado é:", Raiz(num1));
    } else {
        console.log("Escolha inválida");
}}