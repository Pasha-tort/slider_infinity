"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const viewport = document.querySelector('#viewport').offsetWidth,
          btnNext = document.querySelector('#next'),
          btnPrev = document.querySelector('#prev');
    let slides = document.querySelectorAll(".slide"),
        sliders = [];

    for (let i = 0; i < slides.length; ++i) {
        // Добавляем изображение из слайда 
        sliders[i] = slides[i].querySelector('img');
        // Удаляем слайд
        slides[i].remove();
        
    }
    console.log(slides.length);
    // Номер слайда
    let step = 0;
    // Позиция сайда
    let offset = 0;
    let stepPrev =  slides.length - 1;
    
    // Функция для отрисовки сайда
    function drow() {
        // Создаём элемент слайда
        let slide = document.createElement("div");
        // Добавляем касс slide новому элементу
        slide.classList.add("slide");
        // Добавляем дочерний элемент контент слайда
        slide.appendChild(sliders[step]);
        // Даём позицию для слайда
        slide.style.left = offset * viewport + "px";
        // Добавляем слайд в контейнер слайдеров
        document.querySelector(".slider").appendChild(slide);
        console.log(slides.length);
        // Если следующий слайд равен числу слайдеров, то
        if (step + 1 == slides.length) {
            // Включаем первый слайд
            step = 0;
        } 
        else { // Иначе
            // Увеличиваем номер слайда на один
            step++;
        }
        // Назначаем позицию слайда
        offset = 1;
    }

    function drowPrev() {
        // Создаём элемент слайда
        let slide = document.createElement("div");
        // Добавляем касс slide новому элементу
        slide.classList.add("slide");
        // Добавляем дочерний элемент контент слайда
        slide.appendChild(sliders[stepPrev]);
        // Даём позицию для слайда
        slide.style.left = -viewport + "px";
        // Добавляем слайд в контейнер слайдеров
        document.querySelector(".slider").prepend(slide);
        console.log(slides.length);
        // Если следующий слайд равен числу слайдеров, то
        if (stepPrev - 1 < 0) {
            // Включаем первый слайд
            stepPrev = slides.length - 1;
        } 
        else { // Иначе
            // Увеличиваем номер слайда на один
            stepPrev--;
        }
        // Назначаем позицию слайда
    }
    drowPrev();
    drow(); 
    drow();

    function left() {
        // Запрещаем событие кнопки вперёд на клик
        btnNext.removeEventListener('click', left);
        // Берём слайды
        let slides2 = document.querySelectorAll(".slide");
        // Позиция
        let offset2 = -1;
        // Цикл для перемещения слайда
        for (let i = 0; i < slides2.length; i++) {
            // Меняем позицию слайда
            slides2[i].style.left = offset2 * viewport - viewport + "px";
            // Увеличиваем позицию
            offset2++;
        } 
        // Ставим таймер
        setTimeout(function () {
            // Удаляем прошлый слайд
            slides2[0].remove();
            // Рисуем следующий слайд
            drow();
            // Назначаем событие на кнопку вперёд
            btnNext.addEventListener("click", left);
        }, 500);
    }

    function right() {
        // Запрещаем событие кнопки вперёд на клик
        btnPrev.removeEventListener('click', right);
        // Берём слайды
        let slides2 = document.querySelectorAll(".slide");
        // Позиция
        let offset2 = -1;
        // Цикл для перемещения слайда
        for (let i = 0; i < slides2.length; i++) {
            // Меняем позицию слайда
            slides2[i].style.left = offset2 * viewport + viewport + "px";
            // Увеличиваем позицию
            offset2++;
        } 
        // Ставим таймер
        setTimeout(function () {
            // Удаляем прошлый слайд
            slides2[2].remove();
            // Рисуем следующий слайд
            drowPrev();
            // Назначаем событие на кнопку вперёд
            btnPrev.addEventListener("click", right);
        }, 500);
    }

btnNext.addEventListener("click", left);
btnPrev.addEventListener("click", right);
    





});