const bmi = sessionStorage.getItem("bmi");
const interpretation = getInterpretation(bmi);
const interpretationElement = document.getElementById("interpretation");
interpretationElement.textContent = interpretation;

const detailsElement = document.querySelector(".result-details");

if (interpretation === "Underweight") {
    detailsElement.innerHTML = `
        <h3>Exercises to do:</h3>
        <p>Focus on strength training to build muscle mass.</p>
        <h3>Foods to eat:</h3>
        <p>Include nutrient-dense foods like lean proteins, whole grains, and healthy fats.</p>
        <h3>Hours to sleep:</h3>
        <p>Aim for 7-9 hours of sleep per night.</p>
    `;
} else if (interpretation === "Normal weight") {
    detailsElement.innerHTML = `
        <h3>Exercises to maintain:</h3>
        <p>Stay active with a mix of cardiovascular and strength training exercises.</p>
        <h3>Foods to maintain:</h3>
        <p>Continue with a balanced diet that includes a variety of nutrients.</p>
        <h3>Hours to sleep:</h3>
        <p>Aim for 7-9 hours of sleep per night.</p>
    `;
} else if (interpretation === "Overweight") {
    detailsElement.innerHTML = `
        <h3>Exercises to do:</h3>
        <p>Incorporate regular aerobic exercises like walking, jogging, or swimming.</p>
        <h3>Foods to eat:</h3>
        <p>Emphasize whole foods and reduce processed foods and sugary snacks.</p>
        <h3>Hours to sleep:</h3>
        <p>Aim for 7-9 hours of sleep per night.</p>
    `;
} else if (interpretation === "Obese") {
    detailsElement.innerHTML = `
        <h3>Exercises to do:</h3>
        <p>Start with low-impact activities like walking and gradually increase intensity.</p>
        <h3>Foods to eat:</h3>
        <p>Focus on a balanced diet and consider portion control.</p>
        <h3>Hours to sleep:</h3>
        <p>Aim for 7-9 hours of sleep per night.</p>
    `;
}

function getInterpretation(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 24.9) {
        return "Normal weight";
    } else if (bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
