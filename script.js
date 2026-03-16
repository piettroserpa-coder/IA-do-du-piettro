// Aguarda o HTML carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Captura o formulário pelo ID
    const formulario = document.getElementById('form-cadastro');

    // Quando o usuário clicar no botão de enviar...
    formulario.addEventListener('submit', function(evento) {
        
        // 1. Para o envio padrão (evita que a página pisque e perca o script)
        evento.preventDefault();

        // 2. Mostra o alerta na tela
        alert('Cadastro feito com sucesso!');

        // 3. Redireciona para o site da Adidas
        // Usamos window.location.assign para forçar a navegação
        window.location.assign("https://www.adidas.com.br");
        
    });
});
