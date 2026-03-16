// Seleciona o formulário pelo ID
const form = document.getElementById('form-cadastro');

// Adiciona um "ouvinte" para o evento de enviar (submit)
form.addEventListener('submit', function(event) {
    // Impede o envio padrão (que recarregaria a página)
    event.preventDefault();

    // Exibe a mensagem de sucesso
    alert('Cadastro feito com sucesso!');

    // Redireciona para o site da Adidas
    // Você pode trocar o '.br' por '.com' dependendo da região
    window.location.href = "https://www.adidas.com.br","_blank";
});
