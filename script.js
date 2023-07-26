function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(list) {
    const randomIndex = getRandomNumber(0, list.length - 1);
    return list[randomIndex];
}

function displayResult(result) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `<p>Random Number: ${result.number}</p><p>Random Word: ${result.word}</p>`;
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", () => {
    const wordLists = [
        [
            { number: 1, word: "你" },
            { number: 2, word: "我" },
            { number: 3, word: "他" },
            // Add more items for the first list
        ],
        [
            { number: 1, word: "你" },
            { number: 2, word: "我" },
            { number: 3, word: "他" },
            // Second list items
        ],
        [
            { number: 1, word: "你" },
            { number: 2, word: "我" },
            { number: 3, word: "他" },            
            // Third list items
        ]
    ];

    const randomNumbers = wordLists.map(list => getRandomItem(list));
    displayResult(randomNumbers);
});

