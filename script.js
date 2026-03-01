const envelope = document.getElementById('envelope');
const btnOpen = document.getElementById('open');
const btnReset = document.getElementById('reset');

// Tu carta personalizada
const lines = [
    { id: 'line1', text: "Hola buenos días, mi amor." },
    { id: 'line2', text: "Te escribo desde el fondo de mi corazón para recordarte lo mucho que te amo." },
    { id: 'line3', text: "Atesoro cada momento juntos; no hay un día en que no sonría al recordarte." },
    { id: 'line4', text: "Desde el primer día hasta hoy, mi mundo es mejor a tu lado." },
    { id: 'line5', text: "— Tu Mati ❤️" }
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
    lines.forEach(l => document.getElementById(l.id).innerHTML = "");
    typing = false;
});

function typeWriter(id, text, index, callback) {
    if (index < text.length) {
        document.getElementById(id).innerHTML += text.charAt(index);
        setTimeout(() => typeWriter(id, text, index + 1, callback), 50);
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