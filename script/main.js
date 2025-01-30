// function scrollToSection(sectionId) {
//     const section = document.getElementById(sectionId);
//     section.scrollIntoView({ behavior: 'smooth' });
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const links = document.querySelectorAll('a[href^="#"]');
//     links.forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault();
//             scrollToSection(link.getAttribute('href').slice(1));
//         });
//     });
// });

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
    const teamWrappers = document.querySelectorAll('.team-wrapper');
    
    teamWrappers.forEach(wrapper => {
        const labelContainer = wrapper.querySelector('.team-label-container');
        
        wrapper.addEventListener('mouseenter', () => {
            labelContainer.style.bottom = '0';
        });
        
        wrapper.addEventListener('mouseleave', () => {
            labelContainer.style.bottom = '-90%';
        });
    });
});
