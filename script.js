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

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(list) {
    const randomIndex = getRandomNumber(0, list.length - 1);
    return list[randomIndex];
}

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

function getDayOfWeek(date) {
    const daysOfWeek = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    return daysOfWeek[date.getDay()];
}
function Date2Sentence(date) {
    const whoindex = (date * LuckyNumber) % wordLists[0].length;
    const whereindex = (date * LuckyNumber) % wordLists[1].length;
    const whatindex = (date * LuckyNumber) % wordLists[2].length;
    return `${wordLists[0][whoindex].word}${wordLists[1][whereindex].word}${wordLists[2][whatindex].word}`;
}

function ShowCanlder(date) {
    const yearSentence = document.getElementById('calendarUpLineContent_year');
    const MDSetnrence = document.getElementById('calendarDownLineContent');
    const DaySentence = document.getElementById('calendarday');
    const WeekSentence = document.getElementById('calendarweek');
    const popupSentence = document.getElementById('calendarSentence')
    const luarcontent = document.getElementById('lunarcontent');

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月份从 0 开始
    const day = date.getDate();
    const intdate = Number(`${year}${month}${day}`);
    const sentencecontent = Date2Sentence(intdate);
    const lunarmonth = calendar.solar2lunar(year, month, day).IMonthCn;
    const lunarday = calendar.solar2lunar(year, month, day).IDayCn;
    const gzyear = calendar.solar2lunar(year, month, day).gzYear;
    const gzmonth = calendar.solar2lunar(year, month, day).gzMonth;
    const gzday = calendar.solar2lunar(year, month, day).gzDay;

    yearSentence.textContent = year;
    MDSetnrence.textContent = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
    DaySentence.textContent = day.toString().padStart(2, '0');
    WeekSentence.textContent = getDayOfWeek(date);
    luarcontent.textContent = `${lunarmonth}${lunarday}${gzyear}年${gzmonth}月${gzday}日`;
    popupSentence.textContent = sentencecontent;
}

// Attach the click event to the calendar image
const calendarImage = document.getElementById('calendarImage');
calendarImage.addEventListener('click', () => {
    ShowCanlder(new Date());
    showPopup();
});

document.addEventListener("click", function (event) {
    const popupContainer = document.getElementById('popupContainer');
    if (!popupContainer.contains(event.target) && event.target !== calendarImage) {
        hidePopup();
    }
});

const datePickerTrigger = document.getElementById('datepickerTrigger');
const datePicker = new datepicker(datePickerTrigger, {
    autohide: true,
    maxDate: new Date(),
    dateSelected: new Date(),
    position: 'c',
    onSelect: (formattedDate, date) => {
        ShowCanlder(date);
    }
});
const datePickerTrigger1 = document.getElementById('calendarday');
const datePicker1 = new datepicker(datePickerTrigger1, {
    autohide: true,
    maxDate: new Date(),
    dateSelected: new Date(),
    position: 'c',
    onSelect: (formattedDate, date) => {
        ShowCanlder(date);
    }
});