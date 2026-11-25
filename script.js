
const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navigationLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});
