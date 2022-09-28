window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;
    if (revealTop < windowheight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function darkM() {
  //this selects the section and switches it to dark-mode class css code.
  let darkMode = document.querySelector(".light-mode");
  darkMode.classList.toggle("dark-mode");
  let section1 = document.querySelector("section");
  section1.classList.toggle("dark-section");
  let divider = document.querySelector(".dividers");
  divider.classList.toggle("dark-divider");
  let divider2 = document.querySelector(".dividers1");
  divider2.classList.toggle("dark-divider");
  let divider3 = document.querySelector(".dividers2");
  divider3.classList.toggle("dark-divider");
}
