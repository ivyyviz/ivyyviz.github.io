// Get current year
const year = new Date().getFullYear();

document.getElementById("year").textContent = year;
console.log("Portfolio loaded")
console.log("Current year:", year);

//Get project detail
const projectButtons = document.querySelectorAll('.project-button');

projectButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const projectDetails = button.nextElementSibling
        
        projectDetails.classList.toggle('show');
    });
});