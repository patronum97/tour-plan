$(document).ready(function () {
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
    autoHeight: true,
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
    // console.log("Клик по кнопке меню");
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
  var modalButton = $("[data-toggle=modal]");
  var closemodalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closemodalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    // когда откроется окно будут присвоены новые классы
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    // запрещаем прокрутку сайта при открытии модального окна
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "22px";
    // var $bodyWidth = $("body").width();
    // $("body").css({ "padding-right": $("body").width() - $bodyWidth });
  }
  function closeModal(event) {
    //функция чтобы при закрытии окна не перебрасывало на самое начало страницы (отменяет href=#)
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    // когда откроется окно будут удалены новые классы
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    // возвращаем прокрутку сайта при открытии модального окна
    document.body.style.overflow = "";
    document.body.style.paddingRight = "0";
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      //ваша функция закрытия окна
      closeModal(event);
    }
  });
  // Обработка форм для конкретно каждой формы
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be at least two letters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone is required",
          minlength: "Phone number must be 11 digits long",
        },
        input: {
          required: "The value must not be empty!",
        },
      },
    });
  });
  $(".phone").mask("+7(999) 999-99-99", { clearIncomplete: true });
  AOS.init();
});
