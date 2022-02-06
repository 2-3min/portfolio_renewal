'use strict'

//slide
const project = document.querySelector(".project");
const projectSlider = document.querySelector(".project__slider");
const projectItems = document.querySelectorAll(".project__item");

//button
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let counter = 0;
let widthSize = projectItems[0].clientWidth;

if(counter === 0) prevButton.style.display = "none";

prevButton.addEventListener("click", () => {
  counter--;
  projectSlider.style.transform = `translateX(${-widthSize * counter}px)`;
  projectSlider.style.transition = 'transform 0.4s ease-in-out';
  prevButton.style.display = (counter === 0 ? 'none' : 'inline');
  nextButton.style.display = (counter === (projectItems.length - 1) ? 'none' : 'inline');
});


nextButton.addEventListener("click", () => {
  counter++;
  projectSlider.style.transform = `translateX(${-widthSize * counter}px)`;
  projectSlider.style.transition = 'transform 0.4s ease-in-out';
  prevButton.style.display = (counter === 0 ? 'none' : 'inline');
  nextButton.style.display = (counter === (projectItems.length - 1) ? 'none' : 'inline');
});

window.addEventListener("resize", () => {
  widthSize = (window.innerWidth) < 1000 ? window.innerWidth : 1000; 
});