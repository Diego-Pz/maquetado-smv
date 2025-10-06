// header_delegated.js — Delegated (jQuery) header menu for dynamically-loaded headers
// Requiere jQuery 3.x. Cárgalo una sola vez en la página (antes de este archivo).

(function($){
  'use strict';

  var MENU_CLASS = 'menu-open';
  var HEADER_SEL = '.header_container';
  var TOGGLE_SEL = '.header_toggle';
  var NAV_SEL    = '.header_contenedor_opciones';
  var LINK_SEL   = '.header_contenedor_opciones .opcion_navegacion, .header_contenedor_opciones .header_boton';

  function ensureAria($btn){
    var $header = $btn.closest(HEADER_SEL);
    var $nav = $header.find(NAV_SEL).first();
    if (!$nav.length) return;
    if (!$nav.attr('id')) $nav.attr('id', 'site-menu');
    $btn.attr('aria-controls', $nav.attr('id'));
    if (!$btn.attr('aria-expanded')) $btn.attr('aria-expanded', 'false');
  }

  function openMenu($btn){
    $('body').addClass(MENU_CLASS);
    $(TOGGLE_SEL).attr('aria-expanded', 'true'); // sync all toggles
    ensureAria($btn);
  }

  function closeMenu(){
    $('body').removeClass(MENU_CLASS);
    $(TOGGLE_SEL).attr('aria-expanded', 'false');
  }

  function toggleMenu($btn){
    if ($('body').hasClass(MENU_CLASS)) closeMenu();
    else openMenu($btn);
  }

  // 1) Toggle (delegated)
  $(document).on('click', TOGGLE_SEL, function(e){
    e.preventDefault();
    e.stopPropagation();
    toggleMenu($(this));
  });

  // 2) Cerrar al hacer click fuera
  $(document).on('click', function(e){
    // Si el click NO fue dentro del header, cerramos
    if ($(e.target).closest(HEADER_SEL).length === 0) {
      closeMenu();
    }
  });

  // 3) Cerrar con ESC
  $(document).on('keydown', function(e){
    if (e.key === 'Escape') closeMenu();
  });

  // 4) Cerrar al navegar dentro del menú
  $(document).on('click', LINK_SEL, function(){
    closeMenu();
  });

  // 5) Si el header se inserta por fetch, no hay que hacer nada extra.
  //    Con delegación ya funciona. Pero aseguramos ARIA al primer focus del toggle.
  $(document).on('focusin', TOGGLE_SEL, function(){ ensureAria($(this)); });

})(jQuery);
