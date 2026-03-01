const envelope = document.getElementById('envelope');
const btnOpen = document.getElementById('open');
const btnReset = document.getElementById('reset');
const passwordOverlay = document.getElementById('passwordOverlay');
const passwordInput = document.getElementById('passwordInput');
const passwordBtn = document.getElementById('passwordBtn');
const passwordMessage = document.getElementById('passwordMessage');

// contraseña requerida para ver la carta
const CORRECT_PASSWORD = '0417';

// impedir abrir hasta validar
btnOpen.disabled = true;

passwordBtn.addEventListener('click', () => {
    const val = passwordInput.value.trim().toLowerCase();
    if (val === CORRECT_PASSWORD) {
        passwordOverlay.style.display = 'none';
        btnOpen.disabled = false;
    } else {
        passwordMessage.textContent = 'Contraseña incorrecta. Intenta de nuevo.';
        passwordInput.value = '';
        passwordInput.focus();
    }
});

passwordInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') passwordBtn.click();
});

// al cargar, enfocar campo
window.addEventListener('load', () => passwordInput.focus());

// Tu carta personalizada
const lines = [
    { id: 'line1', text: "Hola, buenos días, mi amor:" },
    { id: 'line2', text: "Te escribo estas palabras desde lo más profundo de mi alma, simplemente porque quería detenerme un momento para recordarte lo mucho que te aprecio y todo lo que significas para mí. A veces el día pasa rápido, pero mi amor por ti siempre es lo que me mantiene feliz." },
    { id: 'line3', text: "Me pongo a pensar en todo lo que hemos vivido y no puedo evitar sonreír. Guardo cada recuerdo en mi corazón: desde el primer día que nos vimos, con todos esos nervios y la emoción de empezar algo nuevo, hasta el día de hoy, donde cada momento a tu lado se siente como el lugar donde pertenezco." },
    { id: 'line4', text: "Gracias por ser mi compañera, por las risas compartidas y por estar conmigo en cada paso. No solo te amo por quien eres, sino por cómo me haces sentir cuando estoy contigo. Estoy emocionado por todo lo que nos falta vivir y por seguir construyendo esta historia juntos." },
    { id: 'line5', text: "Te amo con todo mi corazón. ❤️" }
];

let typing = false;

btnOpen.addEventListener('click', () => {
    if (typing) return;
    envelope.classList.add('open');
    typing = true;
    
    setTimeout(() => {
        startTyping(0);
    }, 1000);
});

btnReset.addEventListener('click', () => {
    envelope.classList.remove('open');
    // Limpiar texto inmediatamente al cerrar
    lines.forEach(l => {
        const el = document.getElementById(l.id);
        if(el) el.innerHTML = "";
    });
    typing = false;
});

function typeWriter(id, text, index, callback) {
    if (index < text.length) {
        document.getElementById(id).innerHTML += text.charAt(index);
        setTimeout(() => typeWriter(id, text, index + 1, callback), 20); // Más rápido para textos largos
    } else if (callback) {
        callback();
    }
}

function startTyping(lineIndex) {
    if (lineIndex < lines.length) {
        typeWriter(lines[lineIndex].id, lines[lineIndex].text, 0, () => {
            startTyping(lineIndex + 1);
        });
    }
}