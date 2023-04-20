function toggleAcordeon() {
    var acordeon = this.parentElement;
    if (acordeon.classList.contains('activo')) {
    acordeon.classList.remove('activo');
        } else {
            acordeon.classList.add('activo');
               }
    }
    var labels = document.getElementsByTagName('label');
    for (var i = 0; i < labels.length; i++) {
      labels[i].addEventListener('click', toggleAcordeon);
    }