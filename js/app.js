let currentIndex = 0;
const reviewItems = document.querySelectorAll('.reviewItem');
const totalReviews = reviewItems.length;
let slidesToShow = 3; // По умолчанию 3 слайда

// Функция, чтобы обновить количество отображаемых слайдов в зависимости от размера экрана
function updateSlidesToShow() {
    if (window.innerWidth < 1500) {
        slidesToShow = 2; // Если ширина меньше 1500px, показываем 2 слайда
    } else {
        slidesToShow = 3;
    }
}

function updateSlides() {
    reviewItems.forEach((item, index) => {
        item.classList.remove('active');
        item.style.display = 'none'; // Скрываем все

        if (index >= currentIndex && index < currentIndex + slidesToShow) {
            item.classList.add('active');
            item.style.display = 'flex'; // Показываем активные
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + slidesToShow) % totalReviews; // Циклическое переключение
    updateSlides();
}

updateSlidesToShow();
updateSlides();

setInterval(nextSlide, 5000);

window.addEventListener('resize', () => {
    updateSlidesToShow();
    updateSlides(); 
});

let butt0 = document.getElementById('butt0');
let buttWin0 = document.getElementById('buttWin0');
let buttWin1 = document.getElementById('buttWin1');
let tel = document.getElementById('tel');

butt0.addEventListener('click', function() {
    buttWin0.classList.remove('showButt');
    buttWin1.classList.add('showButt');
    tel.style.left = 'auto';
});
// 
function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }
  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#tel");//#id инпута
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  })
// 
function scrollToRef() {
    const target = document.getElementById('ref');
    target.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('order-button').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToRef();
});
// 
let politica = document.getElementById('politica')
let clsPolitic = document.getElementById('clsPolitic')
let politicButton = document.getElementById('politicButton')

politicButton.addEventListener('click', function(){
    politica.classList.add('showP')
})
clsPolitic.addEventListener('click', function(){
    politica.classList.remove('showP')
})