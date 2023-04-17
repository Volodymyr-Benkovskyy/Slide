const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  /*  loop: true, */

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  spaceBetween: 50,
  /*  slidesPerView: 1,
   */
  initialSlide: 0,
});
console.log(Swiper);
