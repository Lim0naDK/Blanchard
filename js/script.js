const select = document.querySelector('.menu-select');

const choices = new Choices('.menu-select', {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: ''
});

const choicesSecond = new Choices('.menu-select-2', {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  classNames: {
    listDropdown: 'choices__list--dropdown-2'
  },
});

const choicesThird = new Choices('.menu-select-3', {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  classNames: {
    listDropdown: 'choices__list--dropdown-3'
  },
});

const choicesFourth = new Choices('.menu-select-4', {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  classNames: {
    listDropdown: 'choices__list--dropdown-4'
  },
});

const choicesFive = new Choices('.menu-select-5', {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  classNames: {
    listDropdown: 'choices__list--dropdown-5'
  },
});

const choicesAbout = new Choices('#select-style', {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  classNames: {
    containerOuter: 'custom-select',
    containerInner: 'custom-select__inner',
    input: 'custom-select__input',
    list: 'custom-select__list',
    listItems: 'custom-select__list--multiple',
    listSingle: 'custom-select__list--single',
    listDropdown: 'custom-select__list--dropdown',
    item: 'custom-select__item',
    itemSelectable: 'custom-select__item--selectable',
    itemChoice: 'custom-select__item--choice',
    placeholder: 'custom-select__item--placeholder',
    button: 'custom-select__button',
    highlightedState: 'custom-select__item--highlighted',
  }
});

select.addEventListener('showDropdown', function () {

  const dropdown = document.querySelector('.choices__list--dropdown');

  new SimpleBar(dropdown);
});

select.addEventListener('showDropdown', function () {

  const dropdown = document.querySelector('.choices__list--dropdown-2');

  new SimpleBar(dropdown);
});

select.addEventListener('showDropdown', function () {

  const dropdown = document.querySelector('.choices__list--dropdown-3');

  new SimpleBar(dropdown);
});

select.addEventListener('showDropdown', function () {

  const dropdown = document.querySelector('.choices__list--dropdown-4');

  new SimpleBar(dropdown);
});
select.addEventListener('showDropdown', function () {

  const dropdown = document.querySelector('.choices__list--dropdown-5');

  new SimpleBar(dropdown);
});

var firstSwiper = new Swiper('.first-swiper', {
  speed: 400,
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  slidesPerGroup: 3,
  breakpoints: {
    160: {
      slidesPerView: 1,
      slidesPerGroup: 1,

    },

    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,

    },
    580:{
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,

    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,

    },
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1400: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

     1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

  }

});

var secondSwiper = new Swiper('.second-swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.swiper-button-next-second',
    prevEl: '.swiper-button-prev-second',
  },
  breakpoints: {
    160: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination-second',
        clickable: true,
        type: 'bullets',
      },

    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination-second',
        clickable: true,
        type: 'bullets',
      },

    },
    580: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination-second',
        clickable: true,
        type: 'bullets',
      },

    },
    685: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: '.swiper-pagination-second',
        clickable: true,
        type: 'bullets',
      },

    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: '.swiper-pagination-second',
        clickable: true,
        type: 'bullets',
      },

    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween:25,
      pagination: {
        el: '.swiper-pagination-second',
        clickable: true,
        type: 'bullets',
      },
    },
    1030: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1060: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1080: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1100: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: '.swiper-pagination-second',
        clickable: true,
        type: 'bullets',
      },
    },

    1410: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

  }
});

var thirdSwiper = new Swiper('.third-swiper', {
  slidesPerView: 3,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.swiper-button-next-third',
    prevEl: '.swiper-button-prev-third',
  },
  spaceBetween: 40,
  breakpoints: {
    160: {
      slidesPerView: 1,
      slidesPerGroup: 1,

    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,

    },
    560: {
        slidesPerView: 1,
        slidesPerGroup: 1,

    },
    650: {
      slidesPerView: 1,
      slidesPerGroup: 1,


    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,

    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,

    },
    1250: {
      slidesPerView: 2,
      slidesPerGroup: 2,

    },
    1316: {
      slidesPerView: 2,
      slidesPerGroup: 2,

    },
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1490: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

  }
});

new Accordion('.accordion');

let tabsBtn = document.querySelectorAll('.tabs-nav-link');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav-link--active') });
    e.currentTarget.classList.add('tabs-nav-link--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

tippy('#myButton', {
  content: 'Пример современных тенденций — современная методология разработки',
  theme: 'light',

});

tippy('#myButton-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',

});

tippy('#myButton-3', {
  content: 'В стремлении повысить качество',

});

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('#form', {
    errorLabelStyle: {
      color: '#D11616'
    },
    errorFieldCssClass: ['invalid']
  });
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('#name', [{
      rule: 'minLength',
      value: 3,
      errorMessage: "Вы не ввели имя"
    },
    {
      rule: 'required',
      errorMessage: "Вы не ввели имя"
    },
    {
      rule: 'customRegexp',
      value: /[a-zA-Zа-яА-ЯёЁ]/gi,
      errorMessage: "Недопустимый формат"
    },

    {
      rule: 'maxLength',
      value: 10,
      errorMessage: "Вы ввели больше чем положено"
    }
    ])
    .addField('#tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Вы не ввели телефон',
    },

    ]);
});


ymaps.ready(init);
function init() {

  var myMap = new ymaps.Map("map", {
    center: [55.75925618749802, 37.611873391016786],
    zoom: 14
  });



  var myPlacemark = new ymaps.Placemark([55.759328783696205, 37.61178756032826], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');
  myMap.behaviors.disable(['scrollZoom']);
};

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav-link');
let button =document.querySelector('.header__btn')

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    button.classList.toggle('header__btn--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
});

const searchHide = document.querySelector('.search-img_2');
const searchItems = document.querySelectorAll('.search-content');
const searchClose = document.querySelector('.search-button-1');

searchHide.addEventListener('click', () => {

  searchItems.forEach(el => { el.classList.toggle('search-content--visible') });
})

searchClose.addEventListener('click', () => {

  searchItems.forEach(el => { el.classList.toggle('search-content--visible') });
})




