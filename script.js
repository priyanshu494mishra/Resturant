document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".filter-btn.active").classList.remove("active");
            this.classList.add("active");
            const category = this.getAttribute("data-category");

            menuItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const socialButtons = document.querySelectorAll(".social-btn");

    socialButtons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.boxShadow = "0px 4px 15px rgba(255, 255, 255, 0.2)";
        });

        button.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".nav-menu");

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

