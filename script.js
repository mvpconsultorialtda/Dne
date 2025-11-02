document.addEventListener('DOMContentLoaded', () => {
    const prompt = document.getElementById('fullscreen-prompt');
    const appContainer = document.querySelector('.app-container');
    const body = document.documentElement;

    // Adiciona o evento de clique na tela de boas-vindas
    prompt.addEventListener('click', () => {
        if (body.requestFullscreen) {
            body.requestFullscreen();
        } else if (body.webkitRequestFullscreen) { /* Safari */
            body.webkitRequestFullscreen();
        } else if (body.msRequestFullscreen) { /* IE11 */
            body.msRequestFullscreen();
        }

        prompt.style.display = 'none';
        appContainer.style.display = 'flex';
    });

    // --- Mantenha as interatividades antigas do seu app ---

    // O BLOCO DE CÓDIGO DO BOTÃO "CERTIFICADO" FOI REMOVIDO DAQUI

    const unlockButton = document.querySelector('.notification-action');
    if (unlockButton) {
        unlockButton.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('A tela para desbloquear o DNE físico seria aberta.');
        });
    }
});