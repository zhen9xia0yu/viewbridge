function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumbers(min, max) {
    const numbers = [];
    while (numbers.length < 3) {
        const randomNumber = getRandomNumber(min, max);
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function displayResult(numbers) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `<p>Random Numbers: ${numbers.join(", ")}</p>`;
}

const generateBtn1 = document.getElementById("generateBtn1");
generateBtn1.addEventListener("click", () => {
    const randomNumbers = generateRandomNumbers(1, 10);
    displayResult(randomNumbers);
});

const generateBtn2 = document.getElementById("generateBtn2");
generateBtn2.addEventListener("click", () => {
    const randomNumbers = generateRandomNumbers(1, 100);
    displayResult(randomNumbers);
});

const generateBtn3 = document.getElementById("generateBtn3");
generateBtn3.addEventListener("click", () => {
    const randomNumbers = generateRandomNumbers(1, 1000);
    displayResult(randomNumbers);
});

