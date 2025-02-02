document.addEventListener("DOMContentLoaded", function () {
    const toggleMenu = document.getElementById("toggleMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menu = document.getElementById("menu");

    if (toggleMenu && closeMenu && menu) {
       
        toggleMenu.addEventListener("click", () => {
            menu.classList.add("active");
        });

        closeMenu.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    }
});
