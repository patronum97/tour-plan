const hotelSwiper = new Swiper(".swiper-hotel", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-hotel__button--next",
    prevEl: ".swiper-hotel__button--prev",
  },
  // Управление слайдером стрелками с клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
const reviewsSwiper = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  // Управление слайдером стрелками с клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
