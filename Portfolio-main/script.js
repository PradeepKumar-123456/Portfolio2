document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.querySelector(".navbtn");
  const navMenu = document.querySelector(".navmenu");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navlink");

  navBtn.addEventListener("click", function () {
    navMenu.classList.toggle("navmenu-visible");
  });

  var typedtext = new Typed(".typedtext", {
    strings: ["Coder", "Programmer", "Student"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("act");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("act");
      }
    });
  });
});
