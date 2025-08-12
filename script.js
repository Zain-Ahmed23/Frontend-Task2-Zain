document.addEventListener("DOMContentLoaded", () => {
    const HamIcon = document.querySelector(".hamburger");

    HamIcon.addEventListener("click", () => {
        HamIcon.classList.toggle('open');
    })
})