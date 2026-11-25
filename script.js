
// Highlight the current navigation section

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.style.color =
            link.getAttribute("href") === "#" + currentSection
                ? "#2876a8"
                : "#526170";
    });

});
