function changeColor(colorValue) {
    document.body.style.background =     document.getElementById(colorValue).dataset.color;
}

const sliderLine = document.querySelector('.slider-line');
// console.log(sliderLine);
function backgroundImages() {
    sliderLine.style = 'background-image: url(./images/2.jpeg);';  
}
function backgroundImages2() {
    sliderLine.style = 'background-image: url(./images/3.jpeg);';   
}
//попозже вернусь и добью этот слайдер чтобы листалось пять картинок и он был бесконечный как вселенная))
//кмк можно потом усложнить и  сделать в пару строк как в первом смене цвета через дивы.