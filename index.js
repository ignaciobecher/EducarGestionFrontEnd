const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const btnLog = document.getElementById("btn-login");
const btnReg = document.getElementById("btn-register");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

btnLog.addEventListener("click", () => {
  window.location.href = "./html/pageInConstruction.html";
});

btnReg.addEventListener("click", () => {
  window.location.href = "./html/pageInConstruction.html";
});
