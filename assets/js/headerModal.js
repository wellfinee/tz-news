window.addEventListener("load", function () {
    const searchIcon = document.querySelector(".header__search-icon");
    const searchWrapper = document.querySelector(".header__search");

    if (searchIcon && searchWrapper) {
        searchIcon.addEventListener("click", function () {
            searchWrapper.classList.toggle("active");
        });
    } else {
        console.error("Элемент .header__search-icon или .header__search не найден!");
    }
    const menuButton = document.querySelector(".header__menu");
    const menuIcon = document.querySelector(".menu__icon");
    const navMenu = document.querySelector(".header__nav");
    
    if (!menuButton || !menuIcon || !navMenu) return;
    
    menuButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Предотвращаем всплытие события
        const isActive = navMenu.classList.toggle("header__nav--active");
        menuButton.classList.toggle("open", isActive);
        menuIcon.classList.toggle("fa-bars", !isActive);
        menuIcon.classList.toggle("fa-times", isActive);
        menuButton.style.zIndex = "102"
    });
    
    document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && !menuButton.contains(event.target)) {
            navMenu.classList.remove("header__nav--active");
            menuButton.classList.remove("open");
            menuIcon.classList.add("fa-bars");
            menuIcon.classList.remove("fa-times");
        }
    });
});
