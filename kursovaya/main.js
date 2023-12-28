let btn = document.querySelector(".mobile-btn");

const burgerFunc = (menuClassName, showClassName) => {
  let menu = document.querySelector(`.${menuClassName}`);

  if (menu.className.includes(showClassName)) {
    menu.className = menuClassName;
  } else {
    menu.className += ` ${showClassName}`;
  }
};

btn.addEventListener("click", () => {
  burgerFunc("header__menu", "header__menu-show");
});

const swiper_thumbnail = new Swiper(".swiper_thumbnail", {
  slidesPerView: 3,
});
const swiper = new Swiper(".swiper_main", {
  loop: true,
  autoplay: {
    delay: 1500,
  },
  thumbs: {
    swiper: swiper_thumbnail,
  },
});

const modalTrrigger = document.querySelector("#modal");
modal = document.querySelector(".modal");
modalClose = document.querySelector("#closeModal");

modalTrrigger.addEventListener("click", () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
});

modalClose.addEventListener("click", () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
});
