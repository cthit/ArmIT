import { menuToggler } from "../store/menuStore"

export function openMobileMenu(){
    document.body.classList.add("overflow-hidden");
    menuToggler.set(true);
}

export function closeMobileMenu(){
    menuToggler.set(false);
    document.body.classList.remove("overflow-hidden");
}
