document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    
    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numerical values.");
        return;
    }
    
    const bmi = calculateBMI(weight, height);
    
    sessionStorage.setItem("bmi", bmi);
    
    window.location.href = "result.html";
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}
const loginPage = document.querySelector(".login-page");

// Generate a random color in hexadecimal format
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Apply random background color to the login page
loginPage.style.backgroundColor = getRandomColor();