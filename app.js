//Particles.js set up
particlesJS.load("particles-js", "particles.json", function() {
  console.log("callback - particles-js config loaded");
});

//Sticky header on scroll
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  const scroll = window.scrollY;

  if (scroll > 5) {
    header.classList.add("fixed");
    header.classList.remove("header");
  } else {
    header.classList.remove("fixed");
    header.classList.add("header");
  }
});
