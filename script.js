
let navMenu = document.getElementById("nav-menu")
let toggleBtn = document.getElementById("nav-open");
let closeBtn = document.getElementById("nav-close")

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        navMenu.classList.add("show-menu")

    })
}
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}



// Swiper
let swiper = new Swiper('.home-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
   
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// var swiperBranch = new Swiper('.mySwiper', {
//     direction: 'horizontal',
//     loop: true,
//     watch-slides-progress:true,
//     slides-per-view:3
// });


let swiperBranch = new Swiper('.branch-swiper', {
    direction: 'horizontal',
    loop: true,
    watchSlidesProgress: true,
    // initialSlide: 1,
    // centeredSlides: true,
    // slidesPerView: 1,
    spaceBetween: 30,
});