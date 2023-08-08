const LuckyNumber = 102;
// Global array to store the combined data from three files
// Function to fetch the data from a file

const wordLists = [];
async function fetchData(file) {
    const response = await fetch(file);
    return await response.text();
}

// Function to process the fetched data and create an array of objects
async function processFile(file) {
    const data = await fetchData(file);
    const lines = data.split('\n');
    const dataArray = lines.map((line) => {
        if (line.trim() === '') return null;

        const [who, word] = line.split(',');
        return { who: Number(who), word };
    });

    return dataArray.filter(Boolean);
}

async function processFiles() {
    const files = ['words/who.txt', 'words/where.txt', 'words/what.txt'];

    for (const file of files) {
        const dataArray = await processFile(file);
        wordLists.push(dataArray);
    }

    // Now, wordLists contains three separate subarrays, each from a different file
    console.log(wordLists);
    // Get the div elements where we will display the lists
    const div1 = document.getElementById('wordList1');
    const div2 = document.getElementById('wordList2');
    const div3 = document.getElementById('wordList3');

    // Function to create an ordered list for the given data array and append it to the specified div
    function createOrderedList(dataArray, targetDiv) {
        const ol = document.createElement('ol');
        // ol.start = 0;

        for (const item of dataArray) {
            const li = document.createElement('li');
            li.textContent = item.word;
            ol.appendChild(li);
        }

        targetDiv.appendChild(ol);
    }

    // Create ordered lists for each subarray and append them to the corresponding divs
    createOrderedList(wordLists[0], div1);
    createOrderedList(wordLists[1], div2);
    createOrderedList(wordLists[2], div3);
}

processFiles();


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

function displayResultWithCats(results) {
    const resultContainer = document.getElementById("resultchat");
    const sentenceContainer = document.getElementById("resultsentence");
    let resultHtml = "<ul>";
    let finalSentence = `<img src="src/group99764@2x.png" alt="sentence bg"><div class="rlt-sentce-text">`;
    for (const result of results) {
        if (result.who === 0)
            resultHtml += `<div class="chat-cat1"><p>${result.word}。</p><img src="src/cat1@2x.png" style="width:48px;height:48px;"></div>`;
        else
            resultHtml += `<div class="chat-cat2"><img src="src/cat2@2x.png" style="width:24px;height:29px24px;height:29px;"><p> ${result.word}</p></div>`;
        finalSentence += `${result.word}`;
    }
    resultHtml += "</ul>";
    finalSentence += "</div>";
    resultContainer.innerHTML = resultHtml;
    sentenceContainer.innerHTML = finalSentence;
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", () => {
    const randomResults = wordLists.map(list => getRandomItem(list));
    // displayResult(randomResults);
    displayResultWithCats(randomResults);
});

// function displayCalendar() {
//     const now = new Date();
//     const currentYear = now.getFullYear();
//     const currentMonth = now.toLocaleString("default", { month: "long" });
//     const currentDay = now.getDate();

//     const monthYearElement = document.getElementById("monthYear");
//     monthYearElement.textContent = `${currentMonth} ${currentYear}`;

//     const dayNumberElement = document.getElementById("dayNumber");
//     dayNumberElement.textContent = currentDay;
// }

// displayCalendar(); // Call the function to display the calendar when the page loads

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(list) {
    const randomIndex = getRandomNumber(0, list.length - 1);
    return list[randomIndex];
}
function displayWords() {
    const wordLists = [
        document.getElementById("wordList1").querySelectorAll("li"),
        document.getElementById("wordList2").querySelectorAll("li"),
        document.getElementById("wordList3").querySelectorAll("li")
    ];

    let selectedIndices = JSON.parse(localStorage.getItem("selectedIndices"));
    if (!selectedIndices) {
        selectedIndices = [getRandomNumber(0, wordLists[0].length - 1), getRandomNumber(0, wordLists[1].length - 1), getRandomNumber(0, wordLists[2].length - 1)];
        localStorage.setItem("selectedIndices", JSON.stringify(selectedIndices));
    }

    const dayNumberElement = document.getElementById("dayNumber");
    const today = new Date().getDate();
    if (today !== parseInt(dayNumberElement.textContent)) {
        selectedIndices = [getRandomNumber(0, wordLists[0].length - 1), getRandomNumber(0, wordLists[1].length - 1), getRandomNumber(0, wordLists[2].length - 1)];
        localStorage.setItem("selectedIndices", JSON.stringify(selectedIndices));
    }

    const wordListsContainer = document.getElementById("wordListsContainer");
    // wordListsContainer.innerHTML = "";
    // for (let i = 0; i < wordLists.length; i++) {
    //     const selectedWord = wordLists[i][selectedIndices[i]].textContent;
    //     const wordListElement = document.createElement("div");
    //     wordListElement.classList.add("wordList");
    //     wordListElement.innerHTML = `<p>Word List ${i + 1}: ${selectedWord}</p>`;
    //     wordListsContainer.appendChild(wordListElement);
    // }

    const sentenceElement = document.getElementById("sentence");
    const sentence = `${wordLists[0][selectedIndices[0]].textContent} ${wordLists[1][selectedIndices[1]].textContent} ${wordLists[2][selectedIndices[2]].textContent}`;
    sentenceElement.textContent = sentence;
}

function displayCalendar() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.toLocaleString("default", { month: "long" });
    const currentDay = now.getDate();

    const monthYearElement = document.getElementById("monthYear");
    monthYearElement.textContent = `${currentMonth} ${currentYear}`;

    const dayNumberElement = document.getElementById("dayNumber");
    dayNumberElement.textContent = currentDay;
}

// displayCalendar(); // Call the function to display the calendar when the page loads
// displayWords(); // Call the function to display the selected words when the page load

// Function to show the popup
function showPopup() {
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display = 'none';
}

// Function to get today's date in numeric format
function getTodayDate(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return Number(`${year}${month}${day}`);
}
function Date2Sentence(date){
    const whoindex = (date * LuckyNumber) % wordLists[0].length;
    const whereindex = (date * LuckyNumber) % wordLists[1].length;
    const whatindex = (date * LuckyNumber) % wordLists[2].length;
    return `${wordLists[0][whoindex].word}${wordLists[1][whereindex].word}${wordLists[2][whatindex].word}`;
}
// Attach the click event to the calendar image
const calendarImage = document.getElementById('calendarImage');
calendarImage.addEventListener('click', () => {
    const sentencecontent = Date2Sentence(getTodayDate());
    const popupSentence = document.getElementById('calendarSentence')
    popupSentence.textContent = sentencecontent;
    const yearSentence = document.getElementById('calendarUpLineContent');
    const MDSetnrence = document.getElementById('calendarDownLineContent');
    // const datePicker = document.getElementById("datePicker");
    const today = new Date(); // Get the current date and time
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Months are zero-based
    const day = today.getDate();
    yearSentence.textContent = year;
    MDSetnrence.textContent = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
    // const formattedToday = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    // datePicker.value = formattedToday; // Set the default date value
    // // Show the popup
    showPopup();
});

// Attach the click event to the close button
// const closeBtn = document.getElementById('popupCloseBtn');
// closeBtn.addEventListener('click', hidePopup);

// const datePicker = document.getElementById("datePicker");
// datePicker.addEventListener("change", () => {
//     const selectedDate = new Date(datePicker.value);
//     const year = selectedDate.getFullYear();
//     const month = selectedDate.getMonth() + 1; // Month is 0-based, so we add 1
//     const day = selectedDate.getDate();
//     const intdate = Number(`${year}${month}${day}`);
//     const sentencecontent = Date2Sentence(intdate);
//     const popupSentence = document.getElementById('calendarSentence')
//     popupSentence.textContent = sentencecontent;
// });

document.addEventListener("click", function (event) {
    const popupContainer = document.getElementById('popupContainer');
    if (!popupContainer.contains(event.target) && event.target !== calendarImage) {
        hidePopup();
    }
});

// script.js
// const calendarImage1 = document.getElementById('calendarImage1');
// const selectedDate = document.getElementById('selectedDate');

// 初始化 Flatpickr 时间选择器
// flatpickr(calendarImage1, {
//     maxDate: 'today',
//     dateFormat: 'Y-m-d', // 日期格式
//     defaultDate: 'today', // 默认显示今天的日期
//     // noCalendar: true,
//     onChange: function(selectedDates, dateStr, instance) {
//         // 将选定的日期显示在页面上
//         const selectedDate = selectedDates[0];
//         const year = selectedDate.getFullYear();
//         const month = selectedDate.getMonth() + 1; // 月份从 0 开始
//         const day = selectedDate.getDate();
//         const intdate = Number(`${year}${month}${day}`);
//         console.log(intdate);
//         const sentencecontent = Date2Sentence(intdate);
//         console.log(sentencecontent);
//         const popupSentence = document.getElementById('calendarSentence')
//         popupSentence.textContent = sentencecontent;
//         // selectedDate.textContent = 'Selected Date: ' + sentencecontent;
//     }
// });
const datePickerTrigger = document.getElementById('datepickerTrigger');

const datePicker = new datepicker(datePickerTrigger, {
    autohide: true,
    maxDate: new Date(),
    dateSelected: new Date(),
    position: 'c',
    // maxDate: 'today',
    // defaultDate: 'today',
    // todayButton: true,
    // dateFormat:'yyyy-mm-dd',
    onSelect: (formattedDate, date) => {
        const popupSentence = document.getElementById('calendarSentence');
        const yearSentence = document.getElementById('calendarUpLineContent');
        const MDSetnrence = document.getElementById('calendarDownLineContent');
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 月份从 0 开始
        const day = date.getDate();
        yearSentence.textContent = year;
        MDSetnrence.textContent = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
        const intdate = Number(`${year}${month}${day}`);
        const sentencecontent = Date2Sentence(intdate)
        popupSentence.textContent = sentencecontent;
    }
});