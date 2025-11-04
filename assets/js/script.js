'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}



/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// 🎥 Video Play / Pause Button Script

document.addEventListener("DOMContentLoaded", () => {
  const watchBtn = document.querySelector(".watch-btn");
  const video = document.querySelector(".video-player");

  if (watchBtn && video) {
    watchBtn.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        this.innerHTML = '<ion-icon name="pause-circle-outline"></ion-icon> Pause';
      } else {
        video.pause();
        this.innerHTML = '<ion-icon name="play-circle-outline"></ion-icon> Watch Now';
      }
    });
  }
});
