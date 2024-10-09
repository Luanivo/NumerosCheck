const verificarParOuImpar = () => {
    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero)) {
        document.getElementById('resultado').innerText = 'Por favor, digite um número válido.';
        return;
    }

    const resultado = numero % 2 === 0 ? `O número ${numero} é par.` : `O número ${numero} é ímpar.`;

    document.getElementById('resultado').innerText = resultado;
};

// Evento para pressionar Enter
document.getElementById('numero').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        verificarParOuImpar();
    }
});
