const swiperEl = document.querySelector('swiper-container')
const params = {
  injectStyles: [`
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background:gray;
  }

  .swiper-pagination-bullet-active {
    background: #EAEAEA;
    box-shadow: 0 0 30px  #EAEAEA;(255, 255, 255, 0.349);
  }
  `],

}
Object.assign(swiperEl, params)

swiperEl.initialize();