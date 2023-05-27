const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 50,
  slidesPerView: 1,

  initialSlide: 0,
});

const swiperaPagination = document.querySelector(".swiper-pagination");
const btnColor = document.querySelector(".js-btn-color");

const onSwiper = (event) => {
  const { target: bullet } = event;
  const ariaLabel = bullet.getAttribute("aria-label");
  let color = "";

  if (ariaLabel === "Go to slide 1") {
    color = "hsl(237, 42%, 35%)";
    btnColor.style.background = color;
  } else if (ariaLabel === "Go to slide 2") {
    color = "hsl(0, 92%, 20%)";
    btnColor.style.background = color;
  } else if (ariaLabel === "Go to slide 3") {
    color = "hsl(92, 36%, 37%)";
    btnColor.style.background = color;
  }
};

swiperaPagination.addEventListener("click", onSwiper);
