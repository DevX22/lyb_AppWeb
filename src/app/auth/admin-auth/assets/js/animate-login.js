var working = false;
$('.login').on('submit', function(e) {
  e.preventDefault();
  // if (working) return;
  // working = true;
  var $this = $(this),
    $state = $this.find('button > .state');
  $this.addClass('loading');
  $state.html('Autenticando...');
  // setTimeout(function() {
  //   $this.addClass('ok');
  //   //$state.html('¡Bienvenido de nuevo!');
  //   setTimeout(function() {
  //     $state.html('Iniciar sesión');
  //     $this.removeClass('ok loading');
  //     working = false;
  //   }, 1000);
  // }, 1000);
});