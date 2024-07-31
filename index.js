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

// Swiper.js
var swiper = new Swiper(".ReviewSlider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
});

// Theme Toggle
let themeToggle = document.querySelector(".themeToggle")
let toggleBtn = document.querySelector(".toggleBtn")

// function to toggle the theme
function toggleTheme() {
    document.querySelector('.themeToggle').classList.toggle('active');
}

toggleBtn.onclick = () => {
    themeToggle.classList.toggle("active");
};

//Main Logic
document.querySelectorAll(".themeToggle .theme-btn").forEach((btn)=> {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(":root").style.setProperty("--main", color);
    }
});
const countdown = () => {
    const countDate = new Date("Dec 31, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
};

setInterval(countdown, 1000);
