// Start Show navMenu - [Header]
let navBtn = document.querySelector(".header .menu-i");
let linkNav = document.querySelectorAll(".header .nav li a");

navBtn.onclick = function () {
  this.classList.toggle("menu-i-active");
};

linkNav.forEach((e) => {
  e.onclick = function () {
    navBtn.classList.remove("menu-i-active");
  };
});

// scroll to top [Global]{loc:fin}

let upBtn = document.querySelector(".up-btn");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    upBtn.style.display = "flex";
  } else {
    upBtn.style.display = "none";
  }
};

upBtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
