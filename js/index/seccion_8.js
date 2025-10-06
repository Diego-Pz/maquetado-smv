// jQuery ya está cargado globalmente; aquí solo demo opcional de click
$(function () {
  $('.co-card').on('click', function (e) {
    // Reemplaza con las URLs reales o abre un modal Bootstrap
    console.log('Abrir:', $(this).find('.co-card-title').text().trim());
    e.preventDefault();
  });
});
