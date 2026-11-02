const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");
const menuIcon = menuButton.querySelector("i");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

});