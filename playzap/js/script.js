// ========== Navbar Toggle (Mobile) ==========
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

// ========== Search Filter for Games ==========
const searchInput = document.getElementById("searchInput");
const gameCards = document.querySelectorAll(".game-card");

if (searchInput && gameCards.length > 0) {
    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();

        gameCards.forEach(card => {
            const title = card.getAttribute("data-title").toLowerCase();
            card.style.display = title.includes(query) ? "flex" : "none";
        });
    });
}

// ========== Category Filter ==========
const categoryButtons = document.querySelectorAll(".category-btn");

if (categoryButtons.length > 0 && gameCards.length > 0) {
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const category = btn.getAttribute("data-category");

            // UI active state
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Filter cards
            gameCards.forEach(card => {
                const cardCat = card.getAttribute("data-category");
                if (category === "all" || category === cardCat) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });

            // Clear search when category clicked
            if (searchInput) searchInput.value = "";
        });
    });
}

// ========== Scroll to Top Button ==========
const scrollTopBtn = document.getElementById("scrollTop");

if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 250) {
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ========== Contact Form (Simple Alert) ==========
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // stop page refresh
        alert("Thank you! This is a demo form. In a real site, your message would be sent to the server.");
        contactForm.reset();
    });
}

// ========== Set Current Year in Footer ==========
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
