// theme-toggle.js - Control de modo oscuro/claro
/* ============================================================
   theme-toggle.css - Estilos para el botón de modo oscuro/claro
   ============================================================ */

/* ----- Botón flotante ----- */
.theme-toggle {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: var(--bg-toggle, #ffffff);
  color: var(--text-toggle, #1a1a2e);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 9999;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px); /* Safari */
}

.theme-toggle:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
}

.theme-toggle:active {
  transform: scale(0.92);
}

/* ----- Iconos SVG dentro del botón ----- */
.theme-toggle svg {
  position: absolute;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  width: 24px;
  height: 24px;
  pointer-events: none; /* para que el click pase al botón */
}

/* Sol (visible en modo oscuro) */
.theme-toggle .sun-icon {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

/* Luna (visible en modo claro) */
.theme-toggle .moon-icon {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

/* ----- Modo oscuro (data-theme="dark") ----- */
[data-theme="dark"] .theme-toggle {
  background: rgba(30, 30, 50, 0.85);
  color: #f0e6d0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

[data-theme="dark"] .theme-toggle .sun-icon {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

[data-theme="dark"] .theme-toggle .moon-icon {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

/* ----- Variables CSS para el resto de la página ----- */
:root {
  --bg-primary: #f8f4f0;
  --bg-secondary: #ffffff;
  --text-primary: #1a1a2e;
  --text-secondary: #4a4a5a;
  --border-color: #e0d8d0;
  --shadow-color: rgba(0, 0, 0, 0.08);
  --bg-toggle: #ffffff;
  --text-toggle: #1a1a2e;
}

[data-theme="dark"] {
  --bg-primary: #12121e;
  --bg-secondary: #1e1e32;
  --text-primary: #f0e6d0;
  --text-secondary: #b0a8a0;
  --border-color: #3a3a4e;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --bg-toggle: rgba(30, 30, 50, 0.85);
  --text-toggle: #f0e6d0;
}

/* ----- Aplicación de variables a elementos comunes ----- */
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.4s ease, color 0.3s ease;
}

/* Ejemplo: si tienes tarjetas, contenedores o encabezados, 
   puedes agregarlos aquí para que también se adapten */
.card,
.container,
header,
footer,
nav,
section {
  background-color: var(--bg-secondary);
  border-color: var(--border-color);
  box-shadow: 0 2px 12px var(--shadow-color);
  transition: background-color 0.4s ease, 
              border-color 0.3s ease, 
              box-shadow 0.3s ease;
}

/* Si usas enlaces o texto secundario */
a {
  color: var(--text-primary);
}

.text-muted {
  color: var(--text-secondary);
}
(function() {
  'use strict';

  // 1. Detectar preferencia guardada o del sistema
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  // 2. Aplicar tema inicial
  document.documentElement.setAttribute('data-theme', defaultTheme);

  // 3. Obtener el botón (se busca después de que el DOM esté listo)
  const toggleBtn = document.getElementById('theme-toggle');

  if (toggleBtn) {
    // 4. Evento click para cambiar tema
    toggleBtn.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  } else {
    console.warn('Botón #theme-toggle no encontrado en el DOM.');
  }

  // 5. Escuchar cambios en la preferencia del sistema (solo si no hay preferencia guardada)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  });

})();
