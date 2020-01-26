"use strict";

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navContainer = document.querySelector('.color-container');
navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    navContainer.classList.toggle('black-nav');

});

//==============================================================================================
let navBar = document.querySelector('.navbar');
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        if (currentScrollPos > 60) {
            navBar.style.top = "0";
            navBar.classList.add("black-nav-scroll");
        } else {
            navBar.classList.remove("black-nav-scroll");
        }
        
    } else {
        navBar.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
    
//==============================================================================================
let modal = document.getElementById("myModal");
let videoBtn = document.querySelector(".video-btn");
videoBtn.addEventListener('click', function () {
    modal.style.display = "block";
});
let closeBtn = document.getElementsByClassName("close")[0];
closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
});
//==============================================================================================

const buttons = document.querySelectorAll('.prev-default');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => e.preventDefault());
}

//==============================================================================================
let faqToggle = document.getElementsByClassName('faq-more');
let hideParagraph = document.getElementsByClassName('faq-para-hide');
for (let i = 0; i < faqToggle.length; i++) {
    faqToggle[i].addEventListener('click', function () {
        hideParagraph[i].classList.toggle('hidden');
    });
}

//==============================================================================================

const listItems = document.querySelectorAll('.work li');
const allimages = document.querySelectorAll('.work-container-photo');

function toggleActiveClass(active){
    listItems.forEach(item => {
        item.classList.remove('btn-active');
    })
    active.classList.add('btn-active');
}

function toggleimages(dataClass){
    if(dataClass === 'all'){
        for(let i = 0; i<allimages.length; i++){
            allimages[i].style.display = 'block';
        }
    }else{
        for(let i = 0; i<allimages.length; i++)
            allimages[i].dataset.class === dataClass ? allimages[i].style.display = 'block' : allimages[i].style.display = 'none';
    }
}

for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', function(){
        toggleActiveClass(listItems[i]);
        toggleimages(listItems[i].dataset.class);
    });
}

//==============================================================================================

let nextTestimonial = document.getElementById('first');
let previousTestimonial = document.getElementById('second');
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides() {
  showSlides(slideIndex += 1);
}

function minusSlides() {
    showSlides(slideIndex -= 1);
  }

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        console.log(n);
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

nextTestimonial.addEventListener('click', plusSlides);
previousTestimonial.addEventListener('click', minusSlides);

//==============================================================================================
const toggleButtons = document.querySelectorAll('.toggle-button');
const allPricingPlans = document.querySelectorAll('.flip-box-inner');

function toggleActiveClass2(active){
    toggleButtons.forEach(item => {
        item.classList.remove('btn-active');
    })
    active.classList.add('btn-active');
}

function togglePlans(dataClass){
    if(dataClass === 'yearly'){
        for(let i = 0; i<allPricingPlans.length; i++){
            allPricingPlans[i].classList.add('flip-box-transform');
        }
    }else{
        for(let i = 0; i<allPricingPlans.length; i++){
            allPricingPlans[i].classList.remove('flip-box-transform');
        }
    }
}

for(let i = 0; i < toggleButtons.length; i++){
    toggleButtons[i].addEventListener('click', function(){
        toggleActiveClass2(toggleButtons[i]);
        togglePlans(toggleButtons[i].dataset.class);
    });
}