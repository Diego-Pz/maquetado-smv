// Requiere jQuery + Bootstrap 3 (ya los tienes en tu layout)
$(function () {
  // Cambia + por – al abrir/cerrar
  $('#iiAccordion')
    .on('show.bs.collapse', function (e) {
      var $trigger = $('a[href="#' + e.target.id + '"] .ii-toggle .glyphicon');
      $trigger.removeClass('glyphicon-plus').addClass('glyphicon-minus');
    })
    .on('hide.bs.collapse', function (e) {
      var $trigger = $('a[href="#' + e.target.id + '"] .ii-toggle .glyphicon');
      $trigger.removeClass('glyphicon-minus').addClass('glyphicon-plus');
    });

  // Cerrar otros al abrir uno (modo acordeón)
  $('#iiAccordion .panel-collapse').on('show.bs.collapse', function () {
    $('#iiAccordion .panel-collapse.in').collapse('hide');
  });
});
