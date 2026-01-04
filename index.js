// SECTION FOR TOGGLE BUTTON LOGIC

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".for-item");

    // Show only the first item initially
    items.forEach((item, index) => {
        if (index === 0) {
            item.classList.add("active");
            const img = item.querySelector(".toggle-btn img");
            if (img) img.src = "assets/images/open-button.svg";
        } else {
            item.classList.remove("active");
        }
    });

    items.forEach(item => {
        const button = item.querySelector(".toggle-btn");

        button.addEventListener("click", () => {
            // Close all items
            items.forEach(i => {
                i.classList.remove("active");
                const img = i.querySelector(".toggle-btn img");
                if (img) img.src = "assets/images/close-button.svg";
            });

            // Open clicked item
            item.classList.add("active");
            const img = item.querySelector(".toggle-btn img");
            if (img) img.src = "assets/images/open-button.svg";
        });
    });
});

//SECTION PROGRAM TOGGLE BUTTON LOGIC

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('section.program .toggle-btn');
    const isMobile = () => window.innerWidth < 830;

    buttons.forEach((button, index) => {
        const moduleWrapper = button.closest('.module-wrapper');
        const details = moduleWrapper.querySelector('.details');
        const desktopImg = button.querySelector('img:not(.mobile)');
        const mobileImg = button.querySelector('img.mobile');

        // Set correct image on load
        const updateImages = (opened) => {
            if (opened) {
                desktopImg.src = 'assets/images/close-button.svg';
                mobileImg.src = 'assets/images/close-button-mobile.png';
                if (isMobile()) button.style.backgroundColor = '#F25B92';
            } else {
                desktopImg.src = 'assets/images/open-button.svg';
                mobileImg.src = 'assets/images/open-button-mobile.png';
                if (isMobile()) button.style.backgroundColor = '#1D1D1D';
            }
        };

        // Open first module by default
        if (index === 0) {
            details.classList.add('open');
            updateImages(true);
        }

        button.addEventListener('click', () => {
            const isOpen = details.classList.toggle('open');
            updateImages(isOpen);
        });
    });
});

//SWIPER

const swiper = new Swiper('.modules-swiper', {
    slidesPerView: 4.2,
    spaceBetween: 20,
    loop: true,
    freeMode: {
        enabled: true,
        momentum: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1240: {
            slidesPerView: 4.2,
            spaceBetween: 20,
        },
        830: {
            slidesPerView: 3.2,
            spaceBetween: 16,
        },
        600: {
            slidesPerView: 2.2,
            spaceBetween: 12,
        },
        400: {
            slidesPerView: 1.75,
            spaceBetween: 8,
        },
        320: {
            slidesPerView: 1.2,
            spaceBetween: 8,
        }
    },
});
const swiper1 = new Swiper('.feedback-swiper', {
    slidesPerView: 4.2,
    spaceBetween: 20,
    loop: true,
    freeMode: {
        enabled: true,
        momentum: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1440: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1240: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        830: {
            slidesPerView: 2.5,
            spaceBetween: 16,
        },
        600: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        },
        400: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 8,
        }
    },
});



