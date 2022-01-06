/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = $('#nav-menu'),
      navToggle = $('#nav-toggle'),
      navClose = $('#nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.click( ()=>{
        navMenu.addClass('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.click(()=>{
        navMenu.removeClass('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = $('.nav__link')

function linkAction(){
    const navMenu = $('#nav-menu')
    navMenu.removeClass('show-menu')
}
navLink.click(linkAction)
/*==================== About me numbers ====================*/

var block_show = false;
 
function scrollTracking(){
	if (block_show) {
		return false;
	}
 
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.about__info').offset().top;
	var eh = $('.about__info').outerHeight();
	var dh = $(document).height();   
 
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
		
		// Код анимации
		$('.count').each(function(){
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration:4000,
                easing: "swing",
                step:function(now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
	}
}
 
$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}


modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {

    loop:true,
    grabCursor:true,
    spaceBetween:48,

    pagination: {
      el: ".swiper-pagination",
      clickable:true,
      dynamicBullets:true,
    },

    breakpoints:{
        568:{
            slidesPerView:2,
        }
    }
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = $('#header')

    if(this.scrollY >= 80){
        nav.addClass('scroll-header')
    }else{
        nav.removeClass('scroll-header')
    }
}

window.scroll(scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560){
        scrollUp.classList.add('show-scroll')
    }else{
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    if($('body').hasClass('') === true){
        $('.home__blob-img').attr({'xlink:href':"./img/perfil-dark.jpg","y":"-80"})
        $('.about__img').attr("src","./img/about-dark.jpg")
        $('.project__img').attr("src","./img/project-dark.png")
    }else{
        $('.home__blob-img').attr({'xlink:href':"./img/perfile-light.png","y":"-30"})
        $('.about__img').attr("src","./img/about-light.jpg")
        $('.project__img').attr("src","./img/project-light.png")
    }
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

if($('body').hasClass('dark-theme') === true){
    $('.home__blob-img').attr({'xlink:href':"./img/perfil-dark.jpg","y":"-80"})
    $('.about__img').attr("src","./img/about-dark.jpg")
    $('.project__img').attr("src","./img/project-dark.png")
}else{
    $('.home__blob-img').attr({'xlink:href':"./img/perfile-light.png","y":"-30"})
    $('.about__img').attr("src","./img/about-light.jpg")
    $('.project__img').attr("src","./img/project-light.png")
}
