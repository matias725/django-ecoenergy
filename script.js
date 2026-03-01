// ============================================
// CONFIGURACIÓN PERSONALIZADA
// ============================================
const CONFIG = {
    nombrePersona: "Mi amor",  // 🔴 CAMBIA AQUÍ: Nombre de tu persona especial
    fechaAniversario: "2109",  // 🔴 CAMBIA AQUÍ: Fecha en formato DDMM (ej: 21/09 = "2109")
    cancion: "audio.mp3",      // 🔴 CAMBIA AQUÍ: Nombre del archivo de audio (debe estar en la carpeta)
    habilitarSeguridad: true   // Cambiar a false para deshabilitar la validación
};

// ============================================
// INICIALIZACIÓN
// ============================================
const envelope = document.getElementById('envelope');
const btnOpen = document.getElementById('open');
const btnReset = document.getElementById('reset');
const particlesContainer = document.querySelector('.particles');

// Mensajes personalizados para la carta
const line1Text = `Hola ${CONFIG.nombrePersona},`;
const line2Text = "Eres el punto y coma que le";
const line3Text = "daba sentido a mi desorden.";
const line4Text = "Mi corazón late solo por ti.";
const line5Text = "Con todo mi amor,";
const line5TextSignature = "Tu código favorito ♥";

// Variables de estado
let isOpen = false;
let audioActivo = false;
let audio = null;

// ============================================
// SISTEMA DE SEGURIDAD - Validación de Acceso
// ============================================
function iniciarValidacionSeguridad() {
    if (!CONFIG.habilitarSeguridad) {
        inicializarContenedor();
        return;
    }

    const containerPrincipal = document.querySelector('.container');
    const contenedorOriginal = containerPrincipal.innerHTML;
    
    // Crear overlay de seguridad
    containerPrincipal.innerHTML = `
        <div class="security-overlay" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            padding: 40px;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            z-index: 100;
            max-width: 400px;
        ">
            <h2 style="color: #667eea; font-size: 24px; text-align: center;">🔐 Acceso Seguro</h2>
            <p style="color: #666; text-align: center; font-size: 14px;">
                Ingresa la fecha de nuestro aniversario (DDMM) para desbloquear tu regalo
            </p>
            <input 
                type="password" 
                id="accessCode" 
                placeholder="Ej: 2109" 
                maxlength="4"
                style="
                    padding: 12px 20px;
                    font-size: 18px;
                    border: 2px solid #667eea;
                    border-radius: 8px;
                    text-align: center;
                    letter-spacing: 3px;
                    font-weight: bold;
                "
            />
            <div style="display: flex; gap: 10px; width: 100%;">
                <button id="btn-acceso" style="
                    flex: 1;
                    padding: 12px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 16px;
                    transition: all 0.3s;
                ">Verificar</button>
                <button id="btn-reintentar" style="
                    flex: 1;
                    padding: 12px;
                    background: #e0e0e0;
                    color: #333;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 16px;
                    transition: all 0.3s;
                ">Limpiar</button>
            </div>
            <p id="mensajeSeguridad" style="color: #e33e8c; font-size: 12px; text-align: center; min-height: 20px;"></p>
        </div>
    `;

    const inputAcceso = document.getElementById('accessCode');
    const btnAcceso = document.getElementById('btn-acceso');
    const btnReintentar = document.getElementById('btn-reintentar');
    const mensajeSeguridad = document.getElementById('mensajeSeguridad');

    const verificarAcceso = () => {
        const codigo = inputAcceso.value;
        if (codigo === CONFIG.fechaAniversario) {
            mensajeSeguridad.textContent = "✅ Acceso concedido. Cargando amor...";
            mensajeSeguridad.style.color = "#4caf50";
            setTimeout(() => {
                containerPrincipal.innerHTML = contenedorOriginal;
                // Reinicializar eventos después de restaurar el HTML
                inicializarContenedor();
            }, 1500);
        } else {
            mensajeSeguridad.textContent = "❌ Código incorrecto. Inténtalo de nuevo, amor.";
            mensajeSeguridad.style.color = "#e33e8c";
            inputAcceso.value = "";
            inputAcceso.focus();
        }
    };

    btnAcceso.addEventListener('click', verificarAcceso);
    btnReintentar.addEventListener('click', () => {
        inputAcceso.value = "";
        mensajeSeguridad.textContent = "";
        inputAcceso.focus();
    });

    inputAcceso.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verificarAcceso();
    });

    inputAcceso.focus();
}

// ============================================
// INICIALIZAR CONTENEDOR PRINCIPAL
// ============================================
function inicializarContenedor() {
    // Reinicializar referencias del DOM
    const envelopeActual = document.getElementById('envelope');
    const btnOpenActual = document.getElementById('open');
    const btnResetActual = document.getElementById('reset');

    if (btnOpenActual) {
        btnOpenActual.addEventListener('click', abrirCarta);
    }
    if (btnResetActual) {
        btnResetActual.addEventListener('click', cerrarCarta);
    }

    createParticles();
    inicializarAudio();
}

// ============================================
// SISTEMA DE AUDIO
// ============================================
function inicializarAudio() {
    try {
        audio = new Audio(CONFIG.cancion);
        audio.volume = 0.5;
        // Precargar sin reproducir
        audio.preload = 'auto';
    } catch (e) {
        console.warn("⚠️ No se pudo cargar el audio. Asegúrate de que 'audio.mp3' esté en la carpeta.");
    }
}

function reproducirAudio() {
    if (audio && !audioActivo) {
        audioActivo = true;
        audio.currentTime = 0;
        audio.play().catch(err => {
            console.warn("El navegador bloqueó la reproducción automática:", err);
        });
    }
}

function detenerAudio() {
    if (audio && audioActivo) {
        audioActivo = false;
        audio.pause();
        audio.currentTime = 0;
    }
}

// ============================================
// CREAR PARTÍCULAS DE FONDO
// ============================================
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
        particle.style.filter = 'drop-shadow(0 0 5px rgba(255,182,193,0.5))';
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// CREAR LLUVIA DE PÉTALOS AL ABRIR
// ============================================
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
        confetti.style.filter = 'drop-shadow(0 0 8px rgba(255,105,180,0.6))';
        particlesContainer.appendChild(confetti);
        
        // Animación de caída 3D
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = Math.random() * 300 + 100;
        confetti.style.animation = `confettiFall ${Math.random() * 2 + 2}s ease-out forwards`;
        confetti.style.setProperty('--randomX', randomX + 'px');
        confetti.style.setProperty('--randomY', randomY + 'px');
    }
}

// ============================================
// EVENTOS PRINCIPALES
// ============================================
function abrirCarta() {
    const envelopeActual = document.getElementById('envelope');
    const btnOpenActual = document.getElementById('open');
    
    if (isOpen || !envelopeActual) return;
    isOpen = true;

    // Reproducir música
    reproducirAudio();

    envelopeActual.classList.add('open');
    envelopeActual.classList.remove('close');
    
    // Crear confetti
    createConfetti();
    
    // Iniciar efecto de escritura después de que salga la carta
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
    }, 800);
}

function cerrarCarta() {
    const envelopeActual = document.getElementById('envelope');
    const btnOpenActual = document.getElementById('open');
    
    isOpen = false;
    detenerAudio();
    
    if (!envelopeActual) return;
    envelopeActual.classList.add('close');
    envelopeActual.classList.remove('open');
    
    // Limpiar texto
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
}

// ============================================
// EFECTO MÁQUINA DE ESCRIBIR
// ============================================
function typeWriter(elementId, text, index, callback) {
    const element = document.getElementById(elementId);
    if (!element) return;

    if (index < text.length) {
        element.innerHTML = text.substring(0, index + 1) + '<span class="cursor"></span>';
        setTimeout(() => typeWriter(elementId, text, index + 1, callback), 50);
    } else {
        element.innerHTML = text;
        if (callback) callback();
    }
}

// ============================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ============================================
window.addEventListener('load', () => {
    iniciarValidacionSeguridad();
});