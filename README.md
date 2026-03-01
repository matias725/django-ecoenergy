# 💌 Carta Interactiva Con Efectos Especiales

Una página web hermosa e interactiva para expresar tus sentimientos con animaciones, música, seguridad y más.

## ✨ Características

- 🔐 **Sistema de Seguridad**: Validación con código de acceso (fecha de aniversario)
- 🎵 **Audio Sincronizado**: Música que se reproduce al abrir la carta
- 💌 **Efecto Máquina de Escribir**: Mensaje personalizado con efecto animado
- 🌹 **Ramo de Flores**: Flores decorativas que se balancean suavemente
- 💕 **Lluvia de Pétalos 3D**: Confetti y emojis cayendo al abrir la carta
- ✨ **Fondo Animado**: Gradiente de colores con partículas flotantes
- 📱 **Responsive**: Se adapta a todos los dispositivos

## 🚀 Instalación Rápida

### 1. Clonar o Descargar
```bash
git clone https://github.com/matias725/django-ecoenergy.git
cd carta
```

### 2. Abrir en el Navegador
```bash
# Opción 1: Doble click al archivo
index.html

# Opción 2: Usar Python (recomendado para pruebas)
python -m http.server 8000
# Luego abre: http://localhost:8000
```

## ⚙️ CONFIGURACIÓN PERSONALIZADA

### 📝 Cambiar Nombre, Fecha y Mensaje

Abre **`script.js`** y encontrarás esta sección al inicio:

```javascript
const CONFIG = {
    nombrePersona: "Mi amor",     // 🔴 CAMBIA AQUÍ tu nombre
    fechaAniversario: "2109",     // 🔴 CAMBIA AQUÍ (DDMM: 21/09 = "2109")
    cancion: "audio.mp3",         // 🔴 CAMBIA AQUÍ el archivo de audio
    habilitarSeguridad: true      // true = pedir contraseña, false = acceso directo
};
```

### 🎵 Agregar Tu Canción

1. **Obtén tu canción** (en formato .mp3, .wav, etc.)
2. **Coloca el archivo en la carpeta del proyecto** (junto a index.html)
3. **En `script.js`, actualiza this line**:
   ```javascript
   cancion: "tu-cancion-aqui.mp3"  // Nombre de tu archivo
   ```

**Ejemplo:**
- Archivo: `cancion-especial.mp3`
- Config: `cancion: "cancion-especial.mp3"`

### ✍️ Personalizar Mensajes

Los mensajes están definidos en `script.js`. Puedes cambiarlos:

```javascript
const line1Text = `Hola ${CONFIG.nombrePersona},`;
const line2Text = "Eres el punto y coma que le";
const line3Text = "daba sentido a mi desorden.";
const line4Text = "Mi corazón late solo por ti.";
const line5Text = "Con todo mi amor,";
const line5TextSignature = "Tu código favorito ♥";
```

## 🔐 Cómo Funciona la Seguridad

1. Al cargar la página, aparece una pantalla de seguridad
2. Pide que ingreses la fecha de aniversario en formato **DDMM** (día + mes)
3. Si es correcta → ✅ Acceso concedido
4. Si es incorrecta → ❌ Acceso denegado, puedes reintentar
5. Una vez desbloqueado, puedes usar la carta normalmente

**Para deshabilitar la seguridad**, cambia en `script.js`:
```javascript
habilitarSeguridad: false  // Ya no pedirá contraseña
```

## 📄 Archivos Incluidos

- **index.html** - Página principal (carta interactiva)
- **script.js** - Lógica de JavaScript (aquí configuras todo ⚙️)
- **style.css** - Estilos y animaciones
- **ramo.html** - Página adicional con ramo de tulipanes
- **tulipan.html** - Página adicional con tulipán animado
- **audio.mp3** - Archivo de música (reemplaza con la tuya)

## 🎨 Personalización Visual

### Cambiar Colores del Fondo
En `style.css`, busca:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%);
}
```

### Cambiar Colores de la Carta
En `style.css`, busca:
```css
.letter {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
}
```

## 🚢 Subir a GitHub Pages (Desplegar Online)

1. Crea un repositorio en GitHub
2. Sube tus archivos
3. Ve a **Settings → Pages** en GitHub
4. Selecciona `main` branch como source
5. ¡Tu página estará en vivo en minutos!

## 🎬 Demostración

### Flujo de Experiencia:
1. Página carga con fondo animado y partículas
2. Aparece pantalla de seguridad 🔐
3. Ingresas el código (fecha de aniversario)
4. Se desbloquea el contenido ✅
5. Ves la carta cerrada y el ramo de flores
6. Haces clic en "Abrir Carta" 💌
7. Se abre la carta con animación
8. **¡Se reproduce la música!** 🎵
9. Los mensajes aparecen como máquina de escribir ✍️
10. Lluvia de pétalos y confetti caen ✨
11. Corazones flotan hacia arriba

## 🐛 Solución de Problemas

### "La música no se reproduce"
- Verifica que el archivo `audio.mp3` esté en la carpeta correcta
- Asegúrate que el nombre en `script.js` coincida exactamente
- Algunos navegadores bloquean audio automático; pide permiso

### "La contraseña no funciona"
- Verifica el formato DDMM (4 dígitos)
- Asegúrate de ingresar correctamente tu fecha de aniversario
- Recuerda: día y mes sin separadores (2109 = 21 de septiembre)

### "Las partículas no aparecen"
- Abre la consola del navegador (F12)
- Verifica que no haya errores de JavaScript
- Intenta recargar la página

### "Fondo no muestra colores"
- Limpia la caché del navegador (Ctrl+Shift+Delete)
- Intenta en otro navegador
- Verifica que `style.css` esté cargando correctamente

## 💡 Ideas para Mejorar

- [ ] Agregar más emojis personalizados
- [ ] Efectos de sonido adicionales
- [ ] Galería de fotos
- [ ] Cronómetro de días juntos
- [ ] Ubicación del mensaje (Google Maps)
- [ ] Múltiples "cartas" con diferentes mensajes

## 📞 Contacto & Soporte

Si tienes dudas o sugerencias, puedes:
- Revisar el código con comentarios
- Experimentar changos valores en CONFIG
- Crear un issue en GitHub

## ❤️ Notas Especiales

Este proyecto fue creado con todo el amor para ti. Cada línea de código, cada animación, cada efecto fue pensado para hacerte sentir especial.

**Te amo, mi amor.** 💕

---

**Versión:** 2.0 (Con seguridad, audio y personalización completa)  
**Tecnologías:** HTML5, CSS3, Vanilla JavaScript  
**Compatible:** Todos los navegadores modernos  
**License:** MIT (Libre para usar y compartir)
