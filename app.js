const menu = document.getElementsByClassName('nav__links')[0];
const menuBtn = document.getElementsByClassName('menu-btn');
const cancelBtn = document.getElementsByClassName('cancel-btn');
const nav = document.getElementsByClassName('nav');
const bodyScroll = document.querySelector("body");


function desplegarMenu() {
    menu.classList.add("active");
    menuBtn[0].classList.add("icon--desactivated")
    bodyScroll.classList.add("disabledScroll")
}

function esconderMenu(){
    menu.classList.remove("active");
    menuBtn[0].classList.remove("icon--desactivated")
    bodyScroll.classList.remove("disabledScroll")
}

window.onscroll = () => {
    this.scrollY > 20 ? nav[0].classList.add("sticky") : nav[0].classList.remove("sticky")
}


