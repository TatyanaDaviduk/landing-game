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