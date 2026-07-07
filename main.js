// Menu mobile: apre/chiude la lista dei link nella intestazione
document.addEventListener('DOMContentLoaded', function () {
  var bottone = document.querySelector('.nav-burger');
  var link = document.querySelector('.nav-link');
  if (!bottone || !link) return;

  bottone.addEventListener('click', function () {
    var aperto = link.classList.toggle('aperto');
    bottone.setAttribute('aria-expanded', aperto ? 'true' : 'false');
  });

  // Chiude il menu quando si sceglie una voce (utile su mobile)
  link.querySelectorAll('a').forEach(function (voce) {
    voce.addEventListener('click', function () {
      link.classList.remove('aperto');
      bottone.setAttribute('aria-expanded', 'false');
    });
  });
});
