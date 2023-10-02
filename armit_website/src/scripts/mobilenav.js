export function toggleMobileMenu(hamburgerButton, menuContainer, headerContainer){
    hamburgerButton.addEventListener('click', (event) => {
        menuContainer.classList.toggle("translate-x-full", false);
    });
}
