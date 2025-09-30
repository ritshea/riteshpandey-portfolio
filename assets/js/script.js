// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav-links");
    const toggle = document.createElement("div");

    toggle.classList.add("menu-toggle");
    toggle.innerHTML = "☰";
    document.querySelector("nav").appendChild(toggle);

    toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
});
