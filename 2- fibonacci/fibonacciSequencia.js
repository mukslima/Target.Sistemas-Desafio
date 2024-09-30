const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacci(num) {
    let a = 0, b = 1, next = 0;

    if (num === 0 || num === 1) {
        return true;
    }

    while (next < num) {
        next = a + b;
        a = b;
        b = next;
    }

    return next === num;
}

function perguntar() {
    rl.question('Digite o número para verificar se é Fibonacci (ou digite "sair" para encerrar): ', (input) => {
        if (input.toLowerCase() === 'sair') {
            console.log('Encerrando o programa.');
            rl.close();
            return;
        }

        const number = parseInt(input);

        if (isNaN(number)) {
            console.log('Por favor, insira um número válido.');
        } else if (isFibonacci(number)) {
            console.log(`${number} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`${number} não pertence à sequência de Fibonacci.`);
        }

        // Volta a perguntar
        perguntar();
    });
}

// Chama a função pela primeira vez
perguntar();
