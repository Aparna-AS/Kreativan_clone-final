document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const sideNav = document.querySelector('.side-nav');
    const dropdowns = document.querySelectorAll('.side-nav .dropdown > a');

    menuIcon.addEventListener('click', () => {
        sideNav.classList.toggle('active');
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.parentElement.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('search-icon');
    const searchBox = document.getElementById('search-box');
    const closeIcon = document.getElementById('close-icon');

    searchIcon.addEventListener('click', function () {
        searchBox.style.display = 'flex';
    });

    closeIcon.addEventListener('click', function () {
        searchBox.style.display = 'none';
    });
});
