export let visible = false;
    
export function openMobileMenu(){
    document.body.classList.toggle("overflow-hidden");
    visible = true;
}

export function closeMobileMenu(){
    visible = false;
    document.body.classList.toggle("overflow-hidden");
}