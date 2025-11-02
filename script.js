document.addEventListener('DOMContentLoaded', () => {
    // Adiciona interatividade simulada ao botão de certificado
    const certificateButton = document.querySelector('.certificate-btn');
    
    if (certificateButton) {
        certificateButton.addEventListener('click', () => {
            alert('A validação do certificado seria exibida aqui.');
        });
    }

    // Adiciona interatividade simulada ao botão de desbloqueio
    const unlockButton = document.querySelector('.notification-action');
    if (unlockButton) {
        unlockButton.addEventListener('click', () => {
            alert('A tela para desbloquear o DNE físico seria aberta.');
        })
    }
});