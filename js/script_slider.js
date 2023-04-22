   
const wrapper = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
let pressed = false;
let startX;
let scrollLeft;
let autoSlideInterval = null;

// Función para cambiar de slide automáticamente
function autoSlide() {
  let counter = 1;
  autoSlideInterval = setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 6) {
      counter = 1;
    }
  }, 3000);
}
// Iniciar la función para cambiar de slide automáticamente
autoSlide();
// Evento click del wrapper
wrapper.addEventListener('click', function() {
  // Detener el intervalo para cambiar de slide automáticamente
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;
  let counter = 1;
   restartInterva= setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
  }, 1);
});





wrapper.addEventListener('touchmove', function(e) {
  if (!pressed) {
    return;
  }
  // Detener el intervalo para cambiar de slide automáticamente si no se ha detenido
  if (autoSlideInterval !== null) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
  // Arrastrar el wrapper con el dedo
  e.preventDefault();
  scrollLeft = startX - e.touches[0].clientX;
  wrapper.scrollLeft = scrollLeft * -1;
});



// Evento mousemove del wrapper
wrapper.addEventListener('mousemove', function(e) {
  if (!pressed) {
    return;
  }
  // Detener el intervalo para cambiar de slide automáticamente si no se ha detenido
  if (autoSlideInterval !== null) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
  // Arrastrar el wrapper con el mouse
  e.preventDefault();
  scrollLeft = startX - e.clientX;
  wrapper.scrollLeft = scrollLeft * -1;
});
// Evento mousedown del wrapper
wrapper.addEventListener('mousedown', function(e) {
  pressed = true;
  startX = e.clientX;
  wrapper.style.cursor = 'grabbing';
});
// Evento mouseleave del wrapper
wrapper.addEventListener('mouseleave', function() {
  pressed = false;
});
// Evento mouseup del wrapper
window.addEventListener('mouseup', function() {
  pressed = false;
  wrapper.style.cursor = 'grab';
});