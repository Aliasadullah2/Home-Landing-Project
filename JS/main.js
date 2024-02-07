// // active navbar
// $(function(){
//     $(window).on('scroll',function(){
//         if($(window).scrollTop() > 10 ){
//             $('.navigation-wrap').addClass('scroll-on');
//         }else{
//             $('.navigation-wrap').removeClass('scroll-on');
//         }
//     })
// })

// $(function(){
//     $('navbar-toggler').on('click',function(){
//         $('.navigation-wrap').addClass('scroll-on');
//     })
// })

// //navbar hide 
// $('nav-link').on('click',function(){
//     $('.navbar-collapse').collapse('hide');
// })

// // active scroll indictor
// const sections =  document.querySelectorAll('section[id]');
// window.addEventListener('scroll',scrollActive);

// function scrollActive(){
//     const scrollY = window.pageXOffset;

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 91;
//         sectionId = current.getAttribute('id');

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('navbar-nav a[href*='+sectionId+']').classList.add('active');
//         }
//         else{
//             document.querySelector('navbar-nav a[href*='+sectionId+']').classList.remove('active');

//         }
//     })
// }
// Active navbar
$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navigation-wrap').addClass('scroll-on');
        } else {
            $('.navigation-wrap').removeClass('scroll-on');
        }
    });

    $('.navbar-toggler').on('click', function () {
        $('.navigation-wrap').addClass('scroll-on');
    });

    // Navbar hide
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});

// Active scroll indicator
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 91;
        const sectionId = current.getAttribute('id');

        const currentNavLink = document.querySelector('.navbar-nav a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (currentNavLink) {
                currentNavLink.classList.add('active');
            }
        } else {
            if (currentNavLink) {
                currentNavLink.classList.remove('active');
            }
        }
    });
}




//animation
AOS.init({
    // disable:'mobile'
});

//owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1366:{
            items:3
        }
    }
})

