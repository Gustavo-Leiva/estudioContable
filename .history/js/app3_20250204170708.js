<script>
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, /* Muestra 1 testimonio en pantallas pequeñas */
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: { /* Responsive */
            768: { slidesPerView: 2 }, /* 2 cards en tablet */
            1024: { slidesPerView: 3 } /* 3 cards en pantallas grandes */
        }
    });
</script>
