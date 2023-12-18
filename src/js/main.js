document.addEventListener('DOMContentLoaded', function () {
    let navItems = document.querySelectorAll('.nav-item');

    // Function to remove 'active' class from all nav items
    function removeActiveClass() {
        navItems.forEach(function (item) {
            item.classList.remove('active');
        });
    }

    // Add click event listener to each nav item
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Remove 'active' class from all nav items
            removeActiveClass();

            // Add 'active' class to the clicked item
            item.classList.add('active');
        });
    });
});

// Parallex
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    overflow: true,
    orientation: 'right'
});

var image2 = document.getElementsByClassName('thumbnail-2');
new simpleParallax(image2, {
    overflow: true,
    orientation: 'left'
});

var image3 = document.getElementsByClassName('svg-1');
new simpleParallax(image3, {
    overflow: true,
    orientation: 'up'
});
var image4 = document.getElementsByClassName('svg-2');
new simpleParallax(image4, {
    overflow: true,
    orientation: 'down'
});

let galleryImages = document.querySelectorAll('.gallery-img');
let orientations = ['up', 'down', 'left', 'right'];
galleryImages.forEach((item, index) => {
    new simpleParallax(galleryImages[index], {
        overflow: true,
        orientation: index < 3 ? 'right' : 'left'
    });
})
function toggleMenu() {
    const xMenu = document.querySelector('.x-menu');
    xMenu.classList.toggle('active');
}

// Check screen size and add/remove 'active' class accordingly
function handleScreenSize() {
    const xMenu = document.querySelector('.x-menu');
    const isMobile = window.innerWidth < 768; // Adjust the threshold as needed

    if (isMobile) {
        xMenu.classList.add('is-mobile');
    } else {
        xMenu.classList.remove('active');
        xMenu.classList.remove('is-mobile');
    }
}
function handelMenuScroll() {
    const xNav = document.querySelector('.x-navbar');
    const isScrolled = window.scrollY > 300; // Adjust the threshold as needed

    if (isScrolled) {
        xNav.classList.add('x-nav-active');
    } else {
        xNav.classList.remove('x-nav-active');
    }
}

// Listen for window resize events to handle screen size changes
window.addEventListener('resize', handleScreenSize);
window.addEventListener('scroll', handelMenuScroll);

// Initial handling based on screen size
handleScreenSize();
handelMenuScroll();

// Header Slider
const swiper = new Swiper('.swiper', {
    speed: 400,
    rewind: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (i, className) {
            return `
               <button class="${className}">
                  <svg class="progress" width="41" height="41"><circle class="circle-origin" r="20" cx="20.5" cy="20.5"></circle></svg>
                  <span>${i + 1}</span>
                </button>
            `;
        }
    },
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
    },
    loop: true,
    watchSlidesProgress: true
});

function slideImage(index) {
    const images = document.querySelectorAll('.x-banner__img');
    images.forEach(img => img.classList.remove('active'));

    // Add 'active' class to the current slide's image
    const activeImage = images[index];
    console.log(index)
    if (activeImage) {
        activeImage.classList.add('active');
    }
}
swiper.on('slideChange', function (item) {
    slideImage(item.realIndex);
});

// Gallery Slider
if (document.getElementsByClassName('slider-gallery')) {
    const gallery_swiper = new Swiper('.slider-gallery', {
        direction: 'horizontal',
        loop: false,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        centerInsufficientSlides: true,
        centeredSlidesBounds: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Default parameters
        slidesPerView: 3,
        spaceBetween: 30,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            // when window width is >= 480px
            950: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // when window width is >= 640px
            1180: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // when window width is >= 640px
            1440: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        }
    });
}

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

if (document.querySelectorAll('#headerType').length) {
    var typed = new Typed('#headerType', {
        // strings: ['HELLO OLD FRIEND, <br> <span class="text-primary">WE\'VE MISSED YOU</span>'],
        stringsElement: '#typeContent',
        typeSpeed: 50,
        loop: true,
    });
}





// // Show SVG Animation
// const svgElement = document.querySelector('#pathSVG');
// const options = {
//     threshold: 0.5 // Adjust the threshold based on your requirement
// };
//
// const fadeInCallback = (entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             svgElement.classList.add('active');
//             observer.unobserve(svgElement);
//         }
//     });
// };
//
// const observer = new IntersectionObserver(fadeInCallback, options);
//
// // Observe the <svg> element
// observer.observe(svgElement);


