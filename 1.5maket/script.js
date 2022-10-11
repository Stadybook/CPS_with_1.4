
const slider = document.querySelector('.section__main');

let mySwiper;

function mobileSlider(){
    if (window.innerWidth <= 320 && slider.dataset.mobile == 'false'){
        mySwiper = new Swiper(slider, {

        watchOverflow:true,
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
            
        },
    slideClass:'section__brand',
    slidesPerView: 'auto',
}); 
    slider.dataset.mobile = 'true';
}

if (window.innerWidth > 320){
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
let button = document.querySelector('.section__show');

button.onclick = function() {
    brand.classList.toggle('section-size');

    p = document.querySelector('.name-btn');
    if( p.textContent==='Показать все'){
        p.textContent ='Скрыть';
    }
    else{
        p.textContent ='Показать все';   
    }

    button.classList.toggle('more-btn--clicked')
  };

