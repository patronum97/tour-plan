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

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
  document
    .querySelector(".navbar-button")
    /* при нажатии на кнопку меняется класс */
    .classList.toggle("navbar-button--visible");
});

// /* $(".newsletter").parallax({
//   imageSrc: "../img/newsletter-bg.jpg",

//   /* imageSrc: "img/newsletter-bg.jpg", */
//   speed: 0.4,
// });
