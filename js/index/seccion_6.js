// Con jQuery + Bootstrap 3 ya cargados en tu layout
$(function () {
  // Iniciar el carrusel (si usas data-attrs no es necesario, pero lo dejamos explícito)
  $('#giwCarousel').carousel({
    interval: 6000,
    pause: 'hover'
  });

  // (Opcional) detener cuando la pestaña pierde foco para ahorrar CPU
  var $c = $('#giwCarousel');
  $(document).on('visibilitychange', function(){
    if (document.hidden) $c.carousel('pause');
    else $c.carousel('cycle');
  });
});
