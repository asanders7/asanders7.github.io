import PickyEaterPage from './PickyEaterPage.js';
import SpaceKIDetPage from './SpaceKIDetPage.js';
import DonutClickerPage from './DonutClickerPage.js';
import TrekkingPage from './TrekkingPage.js';
import VirtualPetShelterPage from './VirtualPetShelterPage.js';

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

const socialMediaModal = document.getElementById("social-media-popup");
const socialMediaButton = document.getElementById("socialMediaBtn");
const closeButton2 = document.getElementsByClassName("close2")[0];
socialMediaButton.addEventListener('click', () => {
    socialMediaModal.style.display = "block";
});
closeButton2.addEventListener('click', () => {
    socialMediaModal.style.display = "none";
});

const contactMeModal = document.getElementById("contact-popup");
const contactMeButton = document.getElementById("contactBtn");
const closeButton3 = document.getElementsByClassName("close3")[0];
contactMeButton.addEventListener('click', () => {
    contactMeModal.style.display = "block";
});
closeButton3.addEventListener('click', () => {
    contactMeModal.style.display = "none";
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

navToDonutClickerPage();

function navToDonutClickerPage() {
    const donutClickerBtn = document.querySelector('.donut-clicker-btn');
    donutClickerBtn.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = DonutClickerPage();
    });
}

navToTrekkingPage();

function navToTrekkingPage() {
    const trekkingAppBtn = document.querySelector('.trekking-app-btn');
    trekkingAppBtn.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = TrekkingPage();
    });
}

navToVirtualPetShelterPage();

function navToVirtualPetShelterPage() {
    const virtualPetShelterAppBtn = document.querySelector('.virtual-pet-shelter-btn');
    virtualPetShelterAppBtn.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = VirtualPetShelterPage();
    });
}