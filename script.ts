const robo = document.querySelector('.robo-icone');
const balao = document.getElementById('mensagem-robo');
const inputs = document.querySelectorAll('input');

// Função para o robô falar e animar
function roboComenta(mensagem, estaLendo = false) {
    balao.innerText = mensagem;
    
    if (estaLendo) {
        robo.classList.add('robo-lendo');
    } else {
        robo.classList.remove('robo-lendo');
    }
}

// Eventos para cada campo do formulário
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        const campo = input.previousElementSibling.innerText;
        roboComenta(`Entendi! Digite seu ${campo}...`, true);
    });

    input.addEventListener('blur', () => {
        roboComenta("Tudo certo! Continue...", false);
    });
});

// Evento de envio (Submit)
document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Esconde o formulário e o robô
    this.style.display = 'none';
    document.querySelector('.robo-container').style.display = 'none';
    
    // Mostra a tela de surpresa
    document.getElementById('tela-surpresa').style.display = 'block';
});
