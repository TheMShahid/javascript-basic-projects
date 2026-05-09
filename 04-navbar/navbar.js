const navToggle = document.querySelector(".nav-toggle");
const navbarLinks = document.querySelector(".navbar-links");

navToggle.addEventListener("click", function () {
  // console.log(navbarLinks.classList);
  // const navClass = navbarLinks.classList.contains("show-navbar");
  // if (navClass) {
  //   navbarLinks.classList.remove("show-navbar");
  // } else {
  //   navbarLinks.classList.add("show-navbar");
  // }
  navbarLinks.classList.toggle("show-navbar");
});
