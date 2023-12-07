//переключение языка
const langList = document.querySelector('.header__language-list');
const langBtn = document.querySelector('.header__language-btn');
const langSelect = document.querySelectorAll('.header__language-link');
const language = document.querySelector('.header__language-selected');

langBtn.addEventListener('click', () => {
    langList.classList.toggle('header__language-list--active');
})

langSelect.forEach((item) => {
    item.addEventListener('click', () =>{
        let currentLang = language.innerHTML;
        let selectedLang = item.innerHTML;
        language.innerHTML = selectedLang;
        item.innerHTML = currentLang; 
        langList.classList.remove('header__language-list--active');
    })
})


const accordionItem = document.querySelectorAll('.accordion__item');

accordionItem.forEach((item) => {
    item.addEventListener('click', (e) =>{
        item.classList.toggle('accordion__item--show');
    })
})


const swiper = new Swiper('.mySlider', {
    effect: "coverflow",   
    grabCursor: true,  
    centerSlides: true,
    slidesPerView: 1.5,
    coverflowEffect: {
        slideShadows: false,
        depth: 100,
        rotate:-2,
        modifier: -1,
        stretch: "-92%"
    },
      // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true, //включаем поддержку динамических буллетов, если не включить отобр все точки
        dynamicMainBullets: 2, //максимальное количество отображаемых буллетов
    },
    navigation: {
        nextEl: '.mySlider__button-next',
        prevEl: '.mySlider__button-prev',
      },


  
  });