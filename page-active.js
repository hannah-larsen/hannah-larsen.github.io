document.addEventListener("DOMContentLoaded", function () {
    var currentLocation = window.location.href;
    var navLinks = document.querySelectorAll(".nav-list a");

    navLinks.forEach(function (link) {
      // Check if the link's href matches the current location
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });
});