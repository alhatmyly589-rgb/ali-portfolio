
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const languageBtn = document.getElementById("languageBtn");
const topBtn = document.getElementById("topBtn");

let currentLanguage = "en";

// Mobile menu
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Close menu after selecting a section
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Switch between Arabic and English
languageBtn.addEventListener("click", () => {

  currentLanguage = currentLanguage === "en" ? "ar" : "en";

  document.documentElement.lang = currentLanguage;

  document.body.classList.toggle(
    "arabic",
    currentLanguage === "ar"
  );

  document.querySelectorAll("[data-en]").forEach(element => {
    element.textContent = element.dataset[currentLanguage];
  });

  languageBtn.textContent =
    currentLanguage === "en" ? "عربي" : "English";

  document.title = currentLanguage === "en"
    ? "Ali Mohammed Yahya | Cybersecurity Portfolio"
    : "علي محمد يحيى | الموقع الشخصي";
});

// Back to top button
window.addEventListener("scroll", () => {

  topBtn.style.display =
    window.scrollY > 400 ? "block" : "none";

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// Automatic current year
document.getElementById("year").textContent =
  new Date().getFullYear();
 