// Applica le immagini centralizzate (definite in js/immagini.js) agli
// elementi della pagina. Basta mettere data-img="chiave" su un <img>
// oppure data-img-bg="chiave" su un contenitore con sfondo.
document.addEventListener('DOMContentLoaded', function () {
  if (typeof IMMAGINI === 'undefined') return;

  document.querySelectorAll('[data-img]').forEach(function (el) {
    var chiave = el.getAttribute('data-img');
    if (IMMAGINI[chiave]) el.src = IMMAGINI[chiave];
  });

  document.querySelectorAll('[data-img-bg]').forEach(function (el) {
    var chiave = el.getAttribute('data-img-bg');
    if (IMMAGINI[chiave]) el.style.backgroundImage = 'url("' + IMMAGINI[chiave] + '")';
  });
});

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
