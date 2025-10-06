// Requiere jQuery (ya lo tienes cargado en tu layout)
$(function () {
  // Botón play: aquí podrías abrir un modal de Bootstrap con un iframe de YouTube/Vimeo
  $('.hero-smv__play').on('click', function () {
    // Demo simple:
    alert('Aquí se reproducirá el video de bienvenida 🎥');
    // Ejemplo para integrar un modal:
    // $('#videoModal').modal('show');
  });
});
