console.log('Content script injetado.');

document.addEventListener('DOMContentLoaded', function() {
  // Localizar e clicar no botão desejado
  var botaoUnimed = document.querySelector('div#meus-seguros-unicos button');
  if (botaoUnimed) {
    botaoUnimed.click();
  }
});
