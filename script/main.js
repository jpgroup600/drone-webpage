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
    const teamWrappers = document.querySelectorAll('.team-wrapper');
    let isMobile = false;
    let styleChange = '-90%'


    if (window.innerWidth < 768) {
        isMobile = true;
        styleChange = '-85%'
    }


    teamWrappers.forEach((wrapper, index) => {
    
    const content = [
        `• Air Force Academy graduate <br>
• F-15K IWSO, Fighter Weapons Instructor Course <br>
• Commercial Pilot, CE-525 Type Rating <br>
• Curator, National Aviation Museum`,

`• Ph.D. & M.S. in Computer Engineering, Stanford University <br>
• CEO, SD Plex Co., Ltd. <br>
• Former Director, AI & IoT Technology, Nongshim NSTech <br>
• Research Engineer, Sun Microsystems & Intel <br>
• Industry Advisory Committee Member, Government 3.0 Cloud Division<br>`,

`• ESG Consultant <br>
• Drone Safety Manager <br>
• AIRON CMO <br>`,

`• Ph.D. & M.S. in Fine Arts, Ewha Womans University <br>
• TESOL Certification, Seattle University <br>
• Interpreter for Donald Trump, SBS Documentary Culture Map for Changing Asia <br>
• Samsung Gallery Music Hall <br>
• Curator at Seonjae Art Center, Fashion Show Model at the Louvre <br>
• Writer for TOP CLASS and Chosun Ilbo <br>
• Animal Rescue Advocate <br>
• CTREE Project Creator, Honorary Chair of Elite Orchestra<br>`,




    ]
    const labelContainer = wrapper.querySelector('.team-label-container');
    const popup = document.querySelector('.team-cont-popup');
    const popupClose = document.querySelector('.team-cont-popup-close');

    popup.style.opacity = '0';
    popup.style.scale = '0';

    wrapper.addEventListener('mouseenter', () => {
        labelContainer.style.bottom = '0';
    });

    wrapper.addEventListener('mouseleave', () => {
        labelContainer.style.bottom = styleChange;
    });

    wrapper.addEventListener('click', () => {
        popup.style.opacity = '1';
        popup.style.scale = '1';

        popup.querySelector('.team-cont-popup-text').innerHTML = content[index];
    });

    popupClose.addEventListener('click', () => {
        popup.style.opacity = '0';
        popup.style.scale = '0';
    });
});

});
