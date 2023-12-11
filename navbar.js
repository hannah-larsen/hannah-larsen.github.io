document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.querySelector(".nav-list");

  menuIcon.addEventListener("click", function () {
    navList.classList.toggle("show");
    
    if (!navList.classList.contains("show")) {
      navList.classList.add("hide");
    } else {
      navList.classList.remove("hide");
    }
  });
});

/*function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.querySelector(".nav-list");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("show");
}*/
