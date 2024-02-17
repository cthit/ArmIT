import { menuToggler } from "../store/menuStore"

export function openMobileMenu(){
    document.body.classList.toggle("overflow-hidden");
    menuToggler.set(true);
}

export function closeMobileMenu(){
    menuToggler.set(false);
    document.body.classList.toggle("overflow-hidden");
}