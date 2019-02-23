// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu');
const menuNavUl = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menuNav.classList.add('show');
    menuNavUl.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuNav.classList.remove('show');
    menuNavUl.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

$(function () {
    /* owl-carousel*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{  // if screen size is less than 480 show one item..
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items: 6
            }
        }
    });

    /* easy pie*/
    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 122,
        onStep: function (from,to,percent) {    /*make number increase*/
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});