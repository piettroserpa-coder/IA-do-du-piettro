document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('form-cadastro');

    form.addEventListener('submit', function(event) {
        // Impede o formulário de limpar a página antes de mostrar o alerta
        event.preventDefault();

        // Mensagem de sucesso
        alert('Cadastro feito com sucesso! Redirecionando para a loja virtual...');

        // Link direto para a loja virtual oficial da Adidas Brasil
        window.location.href = "https://www.adidas.com.br/homem"; 
        
        /* Nota: Se quiser a loja geral, use "https://www.adidas.com.br"
           Se quiser a loja de outlet, use "https://www.adidas.com.br/outlet"
        */
    });
});
