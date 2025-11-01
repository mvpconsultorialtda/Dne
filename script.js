document.addEventListener('DOMContentLoaded', () => {
    // Adiciona interatividade ao botão da carteira (apenas um alerta para simulação)
    const walletButton = document.querySelector('.add-to-wallet-btn');
    
    if (walletButton) {
        walletButton.addEventListener('click', () => {
            alert('Funcionalidade "Adicionar à Carteira" seria implementada aqui.');
        });
    }
});