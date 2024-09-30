// JSON de faturamento diário
const faturamentoMensal = [
    {
        "dia": 1,
        "valor": 22174.1664
    },
    {
        "dia": 2,
        "valor": 24537.6698
    },
    {
        "dia": 3,
        "valor": 26139.6134
    },
    {
        "dia": 4,
        "valor": 0.0
    },
    {
        "dia": 5,
        "valor": 0.0
    },
    {
        "dia": 6,
        "valor": 26742.6612
    },
    {
        "dia": 7,
        "valor": 0.0
    },
    {
        "dia": 8,
        "valor": 42889.2258
    },
    {
        "dia": 9,
        "valor": 46251.174
    },
    {
        "dia": 10,
        "valor": 11191.4722
    },
    {
        "dia": 11,
        "valor": 0.0
    },
    {
        "dia": 12,
        "valor": 0.0
    },
    {
        "dia": 13,
        "valor": 3847.4823
    },
    {
        "dia": 14,
        "valor": 373.7838
    },
    {
        "dia": 15,
        "valor": 2659.7563
    },
    {
        "dia": 16,
        "valor": 48924.2448
    },
    {
        "dia": 17,
        "valor": 18419.2614
    },
    {
        "dia": 18,
        "valor": 0.0
    },
    {
        "dia": 19,
        "valor": 0.0
    },
    {
        "dia": 20,
        "valor": 35240.1826
    },
    {
        "dia": 21,
        "valor": 43829.1667
    },
    {
        "dia": 22,
        "valor": 18235.6852
    },
    {
        "dia": 23,
        "valor": 4355.0662
    },
    {
        "dia": 24,
        "valor": 13327.1025
    },
    {
        "dia": 25,
        "valor": 0.0
    },
    {
        "dia": 26,
        "valor": 0.0
    },
    {
        "dia": 27,
        "valor": 25681.8318
    },
    {
        "dia": 28,
        "valor": 1718.1221
    },
    {
        "dia": 29,
        "valor": 13220.495
    },
    {
        "dia": 30,
        "valor": 8414.61
    }
];

// Variáveis para armazenar o menor e maior faturamento
let menorValor = Number.MAX_VALUE;
let maiorValor = Number.MIN_VALUE;

// Variáveis para cálculo da média
let somaFaturamento = 0;
let diasComFaturamento = 0;

// Processando o faturamento diário
faturamentoMensal.forEach(dia => {
    const valor = dia.valor;

    // Ignorar dias sem faturamento
    if (valor > 0) {
        // Verificando menor e maior valor de faturamento
        if (valor < menorValor) {
            menorValor = valor;
        }
        if (valor > maiorValor) {
            maiorValor = valor;
        }

        // Somando para calcular a média
        somaFaturamento += valor;
        diasComFaturamento++;
    }
});

// Calculando a média
const mediaFaturamento = somaFaturamento / diasComFaturamento;

// Variável para contar os dias com faturamento acima da média
let diasAcimaDaMedia = 0;

// Verificando os dias em que o faturamento foi superior à média
faturamentoMensal.forEach(dia => {
    const valor = dia.valor;

    if (valor > mediaFaturamento) {
        diasAcimaDaMedia++;
    }
});

// Exibindo os resultados
console.log("Menor valor de faturamento: " + menorValor.toFixed(2));
console.log("Maior valor de faturamento: " + maiorValor.toFixed(2));
console.log("Número de dias com faturamento superior à média mensal: " + diasAcimaDaMedia);
