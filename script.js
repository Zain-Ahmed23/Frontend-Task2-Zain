document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".links");
    const navItems = document.querySelectorAll(".links a");

    // Toggle menu on hamburger click
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navLinks.classList.toggle("active");
    });

    // Close menu when any nav link is clicked
    navItems.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
            hamburger.classList.remove("open");
            navLinks.classList.remove("active");
        });
    });
});
