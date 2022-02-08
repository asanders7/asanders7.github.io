import PickyEaterPage from './PickyEaterPage.js';
import SpaceKIDetPage from './SpaceKIDetPage.js';

// responsiveFunction();

// function responsiveFunction() {
//     var x = document.getElementById("myNav");
//     if (x.className === "nav-bar") {
//         x.className += "responsive";
//     }
//     else {
//         x.className = "nav-bar";
//     }
// }

const aboutMeModal = document.getElementById("about-me-paragraph");
const aboutMeButton = document.getElementById("aboutMeBtn");
const closeButton = document.getElementsByClassName("close")[0];

aboutMeButton.addEventListener('click', () => {
    aboutMeModal.style.display = "block";
});
closeButton.addEventListener('click', () => {
    aboutMeModal.style.display = "none";
});

navToPickyEaterPage();

function navToPickyEaterPage() {
    const pickyEaterBtn = document.querySelector('.picky-eater-btn');
    pickyEaterBtn.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = PickyEaterPage();
    });
}

navToSpaceKIDetPage();

function navToSpaceKIDetPage() {
    const spaceKidetBtn = document.querySelector('.space-kidet-btn');
    spaceKidetBtn.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = SpaceKIDetPage();
    });
}