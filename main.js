'use strict'

//slide
const projectSlider = document.querySelector(".project__slider");
const projectItems = document.querySelectorAll(".project__item");

//button
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let counter = 0;
const widthSize = projectItems[0].clientWidth;



prevButton.addEventListener("click", () => {
  counter--;
  projectSlider.style.transform = `translateX(${-widthSize * counter}px)`;
  projectSlider.style.transition = 'transform 0.4s ease-in-out';
});

nextButton.addEventListener("click", () => {
  counter++;
  projectSlider.style.transform = `translateX(${-widthSize * counter}px)`;
  projectSlider.style.transition = 'transform 0.4s ease-in-out';
});