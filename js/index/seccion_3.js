// Con jQuery (ya cargado globalmente)
$(function () {
  // Ejemplo de navegación. Reemplaza con tus URLs reales:
  $('.sp-card').on('click keypress', function (e) {
    if (e.type === 'click' || e.key === 'Enter' || e.keyCode === 13) {
      // window.location.href = this.href;
      console.log('Abrir:', $(this).find('.sp-card-title').text().trim());
      e.preventDefault();
    }
  });
});
