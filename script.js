function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(list) {
    const randomIndex = getRandomNumber(0, list.length - 1);
    return list[randomIndex];
}

function displayResult(results) {
    const resultContainer = document.getElementById("result");
    let resultHtml = "<p>Random Words:</p><ul>";
    for (const result of results) {
        resultHtml += `<li>${result.number} - ${result.word}</li>`;
    }
    resultHtml += "</ul>";
    resultContainer.innerHTML = resultHtml;
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", () => {
    const wordLists = [
        [
            { number: 1, word: "一" },
            { number: 2, word: "二" },
            { number: 3, word: "三" }
        ],
        [
            { number: 4, word: "四" },
            { number: 5, word: "五" },
            { number: 6, word: "六" }
        ],
        [
            { number: 7, word: "七" },
            { number: 8, word: "八" },
            { number: 9, word: "九" }
        ]
    ];

    const randomResults = wordLists.map(list => getRandomItem(list));
    displayResult(randomResults);
});
    
