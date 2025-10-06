// Con jQuery (ya presente en tu layout)

/*
ESTE SCRIPT PERMITE LA NAVEGACIÓN POR TECLADO EN LAS TARJETAS
DE LA SECCIÓN 2 (SECCIÓN DE SERVICIOS O PRODUCTOS)
*/

$(function () {
  // Demo: foco con teclado en tarjetas
  $('.kb-card').attr('tabindex', '0');

  // (Opcional) Click: redirecciona o abre modal/galería
  $('.kb-card').on('click keypress', function (e) {
    if (e.type === 'click' || e.key === 'Enter' || e.keyCode === 13) {
      // Reemplaza con tu navegación real
      // window.location.href = this.href;
      e.preventDefault();
    }
  });
});
