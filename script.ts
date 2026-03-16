const robo = document.querySelector('.robo-icone');
const balao = document.getElementById('mensagem-robo');
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        robo.classList.add('robo-lendo');
        balao.innerText = "Estou lendo... digite aí!";
    });

    input.addEventListener('blur', () => {
        robo.classList.remove('robo-lendo');
        balao.innerText = "Tudo certo! Próximo passo...";
    });
});

document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    document.querySelector('.container').innerHTML = `
        <div id="tela-surpresa">
            <img src="https://i.ibb.co/LhyMv0Z/gato-perdeu.jpg" alt="Gato" style="width:100%">
            <h1 style="text-align:center; color:red;">VC PERDEU!</h1>
        </div>
    `;
});
