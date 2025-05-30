document.getElementById('currency-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // obter valor de entrada
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    // Verifique se o valor inserido é válido
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido para conversão.");
        return;
    }

    // definir taxas de câmbio
    const exchangeRates = {
        USD: { BRL: 5.73, EUR: 0.88 },
        BRL: { USD: 0.17, EUR: 0.15 },
        EUR: { USD: 1.13, BRL: 6.50 }
    };

    let valorConvertido;

    // Verifique se a moeda de origem e destino são iguais
    if (daMoeda === paraMoeda) {
        valorConvertido = valor; // Se as moedas forem iguais, o valor permanece o mesmo
    } else {
        // Faça a conversão
        valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
    }

    // Exibir resultado
    const conversao = document.getElementById('conversao');
    conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda}`;
});
