const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const event = isMobile ? 'touchmove' : 'scroll';

const divs = document.querySelectorAll('.Section_Q_movile div');

function showDivs() {
  divs.forEach(div => {
    const rect = div.getBoundingClientRect();
    const middle = (rect.top + rect.bottom) / 2;
    const visible = middle > 0 && middle < window.innerHeight;

    if (visible) {
      div.classList.remove('hidden');
      div.classList.add('visible');
    } else {
      div.classList.remove('visible');
      div.classList.add('hidden');
    }
  });
}

window.addEventListener(event, showDivs);