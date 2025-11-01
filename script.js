document.addEventListener('DOMContentLoaded', () => {
        // Adiciona interatividade simulada ao botão da carteira
            const walletButton = document.querySelector('.add-to-wallet-btn');
                
                    if (walletButton) {
                            walletButton.addEventListener('click', () => {
                                        alert('A funcionalidade "Adicionar à Carteira" seria ativada aqui.');
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
})