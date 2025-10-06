// Requiere jQuery (y Bootstrap si luego usas modal)
$(function () {
  $('.pemv__play').on('click', function (e) {
    e.preventDefault();
    // Aquí puedes abrir un modal de Bootstrap con un iframe de YouTube/Vimeo.
    // Por ahora, demo simple:
    alert('Reproducir video del PEMV 🎥');
  });
});
