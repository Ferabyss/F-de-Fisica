// theme-toggle.js - Control de modo oscuro/claro

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
