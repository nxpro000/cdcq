document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");

    const searchLink = document.querySelector(".search-link");
    const searchContainer = document.querySelector(".search-container");
    const searchInput = document.querySelector(".search-input");

    const offsetTop = header.offsetTop; // Position initiale du header

    window.addEventListener("scroll", function() {
        if (window.scrollY > offsetTop) {
            header.classList.add("fixed-header");
            sidebar.classList.add("fixed-sidebar"); // Fixe le menu latéral uniquement si le header est fixé
            sidebar.style.top = header.offsetHeight + "px"; // Positionne le menu sous le header fixé
        } else {
            header.classList.remove("fixed-header");
            sidebar.classList.remove("fixed-sidebar"); // Annule la fixation si le header revient à sa position initiale
            sidebar.style.top = "auto";
        }
    });

    // ✅ Toggle du menu latéral en mode mobile
    menuToggle.addEventListener("click", function() {
        sidebar.classList.toggle("d-none");
        sidebar.classList.toggle("d-block");
    });

    // ✅ Activation dynamique des éléments du menu
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function() {
            document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // ✅ Ouvrir la barre de recherche au clic
    searchLink.addEventListener("click", function(event) {
        event.preventDefault();
        searchContainer.classList.add("active");
        searchLink.classList.add("hidden");
        searchInput.focus();
    });

    // ✅ Fermer la barre de recherche quand elle perd le focus
    searchInput.addEventListener("blur", function() {
        searchContainer.classList.remove("active");
        searchLink.classList.remove("hidden");
    });
});
