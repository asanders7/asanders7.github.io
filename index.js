import PickyEaterPage from './PickyEaterPage.js';

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