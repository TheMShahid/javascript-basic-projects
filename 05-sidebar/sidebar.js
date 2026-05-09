const sidebarToggle = document.querySelector(".sidebar-toggle");

const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", function () {
  // const checkClass = sidebar.classList.contains("show-sidebar");

  // if (checkClass) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }

  // shortcut way
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
