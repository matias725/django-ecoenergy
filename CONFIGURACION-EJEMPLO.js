// ============================================
// EJEMPLOS DE CONFIGURACIÓN
// ============================================
// Este archivo muestra diferentes formas de personalizar tu carta

// ============================================
// EJEMPLO 1: Configuración Básica (2 de Marzo)
// ============================================
/*
const CONFIG = {
    nombrePersona: "Mi amor",
    fechaAniversario: "0203",    // 2 de marzo
    cancion: "audio.mp3",
    habilitarSeguridad: true
};
*/

// ============================================
// EJEMPLO 2: Configuración para San Valentín
// ============================================
/*
const CONFIG = {
    nombrePersona: "Mi Valentina",
    fechaAniversario: "1402",    // 14 de febrero
    cancion: "love-song.mp3",
    habilitarSeguridad: true
};
*/

// ============================================
// EJEMPLO 3: Configuración sin Seguridad (Acceso Directo)
// ============================================
/*
const CONFIG = {
    nombrePersona: "Amor Mío",
    fechaAniversario: "0101",    // Irrelevante si security está OFF
    cancion: "mi-cancion.mp3",
    habilitarSeguridad: false    // ← Sin contraseña
};
*/

// ============================================
// EJEMPLO 4: Aniversario Custom (21 de Septiembre)
// ============================================
const CONFIG = {
    nombrePersona: "Mi amor",     // Cambia por su nombre
    fechaAniversario: "2109",     // 21 de septiembre
    cancion: "audio.mp3",         // Coloca tu canción aquí
    habilitarSeguridad: true      // Solicitar código de acceso
};

// ============================================
// REFERENCIA RÁPIDA DE FECHAS (FORMATO DDMM)
// ============================================

/*
01/01  → "0101"
02/02  → "0202"
05/03  → "0503"
14/02  → "1402"    ❤️  San Valentín
24/12  → "2412"    🎄  Navidad
31/10  → "3110"    👻  Halloween
21/09  → "2109"    ✨  Ejemplo
07/05  → "0705"    💐  Día de la Madre
*/

// ============================================
// NOTAS IMPORTANTES
// ============================================

/*
🔴 PASOS PARA PERSONALIZAR:

1. Descomenta el EJEMPLO que quieras usar
   (Elimina los /* y */ )

2. Comenta los otros ejemplos
   (Añade /* y */ al inicio y final)

3. Reemplaza los valores:
   - nombrePersona: Nombre de tu persona especial
   - fechaAniversario: Tu fecha importante (formato DDMM)
   - cancion: Nombre de tu archivo de música

4. Guarda el archivo

5. En tu index.html, asegúrate que está incluido:
   <script src="script.js"></script>
   
   (Ya viene incluido por defecto)

✨ FORMATOS VÁLIDOS DE FECHAS:

✅ CORRECTO:
- "2109"  (21 de septiembre)
- "0101"  (1 de enero)
- "1402"  (14 de febrero)

❌ INCORRECTO:
- "21/09" (incluye caracteres)
- "21-09" (incluye caracteres)
- "21 09" (incluye espacios)
- "219"   (menos de 4 dígitos)

🎵 FORMATOS DE MÚSICA SOPORTADOS:

✅ .mp3  (recomendado - máxima compatibilidad)
✅ .wav
✅ .ogg
✅ .m4a

❌ .flac (no soportado)
❌ .wma  (no soportado en navegadores)

📍 UBICACIÓN DE LA MÚSICA:

La canción DEBE estar en la misma carpeta que está index.html

carta/
├── index.html
├── script.js
├── style.css
├── tu-cancion.mp3  ← Aquí
└── ...

*/

// ============================================
// PERSONALIZACIÓN AVANZADA (Mensajes Adicionales)
// ============================================

/*
Si quieres cambiar los mensajes de la carta,
edita directamente en script.js:

const line1Text = `Hola ${CONFIG.nombrePersona},`;
const line2Text = "Mensaje línea 2";
const line3Text = "Mensaje línea 3";
const line4Text = "Mensaje línea 4";
const line5Text = "Mensaje línea 5";
const line5TextSignature = "Tu firma";

*/

// ============================================
// CONSEJOS FINALES
// ============================================

/*
💡 Para la canción:
   - Usa algo romántico y significativo
   - Prueba con volumen normal (50%)
   - Durá suficiente para leer el mensaje

💡 Para la fecha:
   - Usa un aniversario importante
   - Sea tu primer encuentro
   - Sea la fecha que se conocieron
   - Sea su aniversario de novios

💡 Para el nombre:
   - Usa su nombre real o un apodo especial
   - Algo que use para llamarla/lo

💡 Para la seguridad:
   - Si es una sorpresa → habilitarSeguridad: true
   - Si quieres acceso rápido → habilitarSeguridad: false

*/
