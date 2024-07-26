let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector("header .navbar");

window.onscroll = () =>{
    Navbar.classList.remove("active");
    MenuBtn.classList.remove("fa-times");
};

MenuBtn.onclick = () => {
    MenuBtn.classList.toggle("fa-times");
    Navbar.classList.toggle("active");
};
