
function toggleAcordeon() {
  var acordeon = this.parentElement;
  if (acordeon.classList.contains('activo')) {
    acordeon.classList.remove('activo');
    this.querySelector('img').setAttribute('src','./img/Footer/Plegable.png');
  } else {
    acordeon.classList.add('activo');
    this.querySelector('img').setAttribute('src','./img/Footer/Desplegable.png');
  }
}

var labels = document.getElementsByTagName('label');
for (var i = 0; i < labels.length; i++) {
  labels[i].addEventListener('click', toggleAcordeon);
}