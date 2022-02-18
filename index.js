import PickyEaterPage from './PickyEaterPage.js';
import SpaceKIDetPage from './SpaceKIDetPage.js';
import DonutClickerPage from './DonutClickerPage.js';
import TrekkingPage from './TrekkingPage.js';
import VirtualPetShelterPage from './VirtualPetShelterPage.js';

const burgerButton = document.getElementsByClassName('burger-menu')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

burgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
pageSetup();

function pageSetup() {
    aboutMeModal();
    socialMediaModal();
    contactModal();
    navToPickyEaterPage();
    navToSpaceKIDetPage();
    navToDonutClickerPage();
    navToTrekkingPage();
    navToVirtualPetShelterPage();
    navHome();
}

function aboutMeModal() {
const aboutMeModal = document.getElementById("about-me-paragraph");
const aboutMeButton = document.getElementById("aboutMeBtn");
const closeButton = document.getElementsByClassName("close")[0];

aboutMeButton.addEventListener('click', () => {
    aboutMeModal.style.display = "block";
});
closeButton.addEventListener('click', () => {
    aboutMeModal.style.display = "none";
});
}

function socialMediaModal() {
    const socialMediaModal = document.getElementById("social-media-popup");
    const socialMediaButton = document.getElementById("socialMediaBtn");
    const closeButton2 = document.getElementsByClassName("close2")[0];
    socialMediaButton.addEventListener('click', () => {
        socialMediaModal.style.display = "block";
    });
    closeButton2.addEventListener('click', () => {
        socialMediaModal.style.display = "none";
    });
}

function contactModal() {
    const contactMeModal = document.getElementById("contact-popup");
    const contactMeButton = document.getElementById("contactBtn");
    const closeButton3 = document.getElementsByClassName("close3")[0];
    contactMeButton.addEventListener('click', () => {
        contactMeModal.style.display = "block";
    });
    closeButton3.addEventListener('click', () => {
        contactMeModal.style.display = "none";
    });
}

function navToPickyEaterPage() {
    const pickyEaterBtn = document.querySelector('.picky-eater-btn');
    pickyEaterBtn.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = PickyEaterPage();
        aboutMeModal();
        socialMediaModal();
        contactModal();
    });
}

function navToSpaceKIDetPage() {
    const spaceKidetBtn = document.querySelector('.space-kidet-btn');
    spaceKidetBtn.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = SpaceKIDetPage();
        aboutMeModal();
        socialMediaModal();
        contactModal();
    });
}

function navToDonutClickerPage() {
    const donutClickerBtn = document.querySelector('.donut-clicker-btn');
    donutClickerBtn.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = DonutClickerPage();
        pageSetup();
    });
}

function navToTrekkingPage() {
    const trekkingAppBtn = document.querySelector('.trekking-app-btn');
    trekkingAppBtn.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = TrekkingPage();
        pageSetup();
    });
}

function navToVirtualPetShelterPage() {
    const virtualPetShelterAppBtn = document.querySelector('.virtual-pet-shelter-btn');
    virtualPetShelterAppBtn.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = VirtualPetShelterPage();
        pageSetup();
    });
}

function navHome() {
    const homeButton = document.getElementById('homeBtn');
    homeButton.addEventListener('click', () => {
        location.href='index.html';
        pageSetup();
    });
}