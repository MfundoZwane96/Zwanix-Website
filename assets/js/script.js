
// MOBILE NAVIGATION MENU
const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuButton && navMenu) {
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
}


// CONTACT FORM SUBMISSION
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        try {
            const formData = new FormData(contactForm);

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                window.location.href =
                    "https://www.zwanix.co.za/contactform.html";
            } else {
                alert(
                    result.message ||
                    "Your message could not be sent. Please try again."
                );

                submitButton.disabled = false;
                submitButton.innerHTML =
                    'Send Message <i class="fa-solid fa-paper-plane"></i>';
            }

        } catch (error) {
            alert("Something went wrong. Please check your internet connection and try again.");

            submitButton.disabled = false;
            submitButton.innerHTML =
                'Send Message <i class="fa-solid fa-paper-plane"></i>';
        }
    });
}
