// Initialize Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
},
spaceBetween: 0, 
slidesPerView: 1,
centeredSlides: false,
grabCursor: true,
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
});
