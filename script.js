document.addEventListener('DOMContentLoaded', () => {
    const prompt = document.getElementById('fullscreen-prompt');
    const appContainer = document.querySelector('.app-container');
    const body = document.documentElement; // Usamos documentElement para compatibilidade

    // Adiciona o evento de clique na tela de boas-vindas
    prompt.addEventListener('click', () => {
        // Tenta entrar em modo de tela cheia
        if (body.requestFullscreen) {
            body.requestFullscreen();
        } else if (body.webkitRequestFullscreen) { /* Safari */
            body.webkitRequestFullscreen();
        } else if (body.msRequestFullscreen) { /* IE11 */
            body.msRequestFullscreen();
        }

        // Esconde a tela de boas-vindas e mostra o app
        prompt.style.display = 'none';
        appContainer.style.display = 'flex';
    });

    // --- Mantenha as interatividades antigas do seu app ---
    const certificateButton = document.querySelector('.certificate-btn');
    if (certificateButton) {
        certificateButton.addEventListener('click', (e) => {
            // Impede que o clique em botões dentro do app feche a tela cheia acidentalmente
            e.stopPropagation(); 
            alert('A validação do certificado seria exibida aqui.');
        });
    }

    const unlockButton = document.querySelector('.notification-action');
    if (unlockButton) {
        unlockButton.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('A tela para desbloquear o DNE físico seria aberta.');
        });
    }
});