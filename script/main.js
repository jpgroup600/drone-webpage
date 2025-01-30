document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links (excluding the whitepaper link)
    const navLinks = document.querySelectorAll('.navbar_link-el[data-href^="#"]');
    
    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            const headerOffset = 100; // Adjust this value based on your header height
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            const menuBtn = document.querySelector('#menu-btn');
            menuBtn.click();


        }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const sectionId = link.getAttribute('data-href');
            scrollToSection(sectionId);
            
            // Optional: Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });

    });
});

$(document).ready(() => {
    $('.download-whitepaper').click(() => {
        if (confirm('Open whitepaper?')) {
            window.open('whitepaper.pdf', '_blank');
        }
    });
});


const swiper = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

document.addEventListener('DOMContentLoaded', () => {
    // const teamWrappers = document.querySelectorAll('.team-wrapper');
    // let isMobile = false;
    // let styleChange = '-90%'

    // if (window.innerWidth < 768) {
    //     isMobile = true;
    //     styleChange = '-85%'
    // }


    // teamWrappers.forEach(wrapper => {
    //     const labelContainer = wrapper.querySelector('.team-label-container');
        
    //         wrapper.addEventListener('mouseenter', () => {
    //             labelContainer.style.bottom = '0';
    //         });

    //         wrapper.addEventListener('mouseleave', () => {
    //             labelContainer.style.bottom = styleChange;
    //         });
    // });

});