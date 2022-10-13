
const slider = document.querySelector('.section__main');

let mySwiper;

function mobileSlider(){
    if (window.screen.width < 768 && slider.dataset.mobile == 'false'){
        mySwiper = new Swiper(slider, {
        
        pagination: {
            el: '.swiper-pagination',
            clickable:true,     
        },
        slideClass:'section__brand',
        slidesPerView: "auto",
        observer: true,
        observeParents: true,
        spaceBetween: 20,
        watchOverflow:true,
}); 
    slider.dataset.mobile = 'true';
}

if (window.screen.width >= 768){
    slider.dataset.mobile = 'false';
    
        if(slider.classList.contains('swiper-initialized')){
            mySwiper.destroy();
        }
    }
}

mobileSlider();

window.addEventListener('resize', () =>{
    mobileSlider();
});



let brand = document.querySelector('.section__brands');
let button = document.querySelector('.section__btn');

button.addEventListener('click', function(){

    span = document.querySelector('.more-btn__text');
    let click = button.classList.contains('more-btn--clicked');
    if(click){
        span.textContent ='Показать все';
    }
    else{
        span.textContent ='Скрыть';   
    }

    brand.classList.toggle('section__brands--show');
    button.classList.toggle('more-btn--clicked')

}) 
