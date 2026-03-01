const envelope = document.getElementById('envelope');
const btnOpen = document.getElementById('open');
const btnReset = document.getElementById('reset');
const particlesContainer = document.querySelector('.particles');

// Mensajes para la carta (puedes editarlos aquí)
const line1Text = "Eres el punto y coma que le";
const line2Text = "daba sentido a mi desorden.";
const line3Text = "Mi corazón late solo por ti.";
const line4Text = "Cada día contigo es un regalo.";
const line5Text = "Con todo mi amor,";
const line5TextSignature = "Tu código favorito ♥";

// Variables de estado
let isOpen = false;

// Crear partículas al cargar
function createParticles() {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.pointerEvents = 'none';
        particle.style.fontSize = Math.random() > 0.5 ? '14px' : '10px';
        particle.textContent = ['✨', '💕', '🌸', '💖', '⭐'][Math.floor(Math.random() * 5)];
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `drift ${Math.random() * 10 + 15}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Crear particulas de confeti cuando se abre
function createConfetti() {
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.pointerEvents = 'none';
        confetti.style.fontSize = '20px';
        confetti.textContent = ['💕', '✨', '🌹', '💖', '🎀'][Math.floor(Math.random() * 5)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '50%';
        confetti.style.zIndex = 15;
        particlesContainer.appendChild(confetti);
        
        // Animación de caída
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = Math.random() * 300 + 100;
        confetti.style.animation = `confettiFall ${Math.random() * 2 + 2}s ease-out forwards`;
        confetti.style.setProperty('--randomX', randomX + 'px');
        confetti.style.setProperty('--randomY', randomY + 'px');
    }
}

// Evento para abrir
btnOpen.addEventListener('click', () => {
    if (isOpen) return; // Evita reiniciar si ya está abierta
    isOpen = true;

    envelope.classList.add('open');
    envelope.classList.remove('close');
    
    // Crear confetti
    createConfetti();
    
    // Iniciar efecto de escritura después de que salga la carta (0.6s)
    setTimeout(() => {
        typeWriter('line1', line1Text, 0, () => {
            typeWriter('line2', line2Text, 0, () => {
                typeWriter('line3', line3Text, 0, () => {
                    typeWriter('line4', line4Text, 0, () => {
                        typeWriter('line5', line5Text, 0, () => {
                            typeWriter('line5', line5TextSignature, 0);
                        });
                    });
                });
            });
        });
    }, 800); // 800ms espera a que la carta suba
});

// Evento para cerrar
btnReset.addEventListener('click', () => {
    isOpen = false;
    envelope.classList.add('close');
    envelope.classList.remove('open');
    
    // Limpiar texto al cerrar para que se escriba de nuevo la próxima vez
    document.getElementById('line1').innerHTML = "";
    document.getElementById('line2').innerHTML = "";
    document.getElementById('line3').innerHTML = "";
    document.getElementById('line4').innerHTML = "";
    document.getElementById('line5').innerHTML = "";
    
    // Limpiar confetti
    const confettiPieces = particlesContainer.querySelectorAll('div');
    confettiPieces.forEach(piece => {
        if (piece.textContent !== '✨' && piece.textContent !== '💕' && piece.textContent !== '🌸' && piece.textContent !== '💖' && piece.textContent !== '⭐') {
            piece.remove();
        }
    });
});

// Función recursiva para efecto de máquina de escribir
function typeWriter(elementId, text, index, callback) {
    if (index < text.length) {
        document.getElementById(elementId).innerHTML = text.substring(0, index + 1) + '<span class="cursor"></span>';
        setTimeout(() => typeWriter(elementId, text, index + 1, callback), 50); // Velocidad de escritura
    } else {
        // Quitar cursor al terminar la línea
        document.getElementById(elementId).innerHTML = text;
        if (callback) callback();
    }
}

// Inicializar partículas al cargar la página
window.addEventListener('load', createParticles);