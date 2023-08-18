const issueURL = "https://api.github.com/repos/zhen9xia0yu/viewbridge/issues/4/comments";
var theRandomSentence = "";
// const accessToken = process.env.MY_ACCESS_TOKEN;
var accessToken = "";
console.log(accessToken); // 这里将打印出您的 Token

window.addEventListener('load', async () =>{
    try {
        const response = await fetch('https://server-less-api-seven.vercel.app/api/token');
        const data = await response.json();
        
        if (data && data.msg) {
            console.log(`${data.msg}`);
            accessToken = data.msg;
        } else {
            console.log('No data or msg found in the response');
        }
    } catch (error) {
        console.log('Error fetching data from the API');
    }
    
});



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
    const recordbtnContainer = document.getElementById("recordbtnContainer");
    const successMessage = document.getElementById("successMessage");
    let resultHtml = "<ul>";
    let finalSentence = `<img src="src/group99764@2x.png" alt="sentence bg"><div class="rlt-sentce-text">`;
    theRandomSentence = "";
    for (const result of results) {
        if (result.who === 0)
            resultHtml += `<div class="chat-cat1"><p>${result.word}。</p><img src="src/cat1@2x.png" style="width:48px;height:48px;"></div>`;
        else
            resultHtml += `<div class="chat-cat2"><img src="src/cat2@2x.png" style="width:24px;height:29px24px;height:29px;"><p> ${result.word}</p></div>`;
        finalSentence += `${result.word}`;
        theRandomSentence += `${result.word}`;
    }
    resultHtml += "</ul>";
    finalSentence += "</div>";
    resultContainer.innerHTML = resultHtml;
    sentenceContainer.innerHTML = finalSentence;
    recordbtnContainer.style.display = "flex";
    successMessage.style.display = "none";


    

}

const recordbtn = document.getElementById("record_btn");
recordbtn.addEventListener("click", function () {
    // const commentContent = commentInput.value;
    if (theRandomSentence) {
        console.log(theRandomSentence);
        const commentData = {
            body: theRandomSentence
        };
        console.log("push"+commentData);
        console.log("token is"+accessToken);
        fetch(issueURL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentData)
        })
        .then(response => {
            if (response.status === 201) {
                // inputContainer.style.display = "none";
                successMessage.style.display = "flex";
                successMessage.style.justifyContent = "center";
            }
        })
        .catch(error => console.error(error));
    }
});



const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", async() => {
    const randomResults = wordLists.map(list => getRandomItem(list));
    // displayResult(randomResults);
    displayResultWithCats(randomResults);
    console.log("test"+ theRandomSentence);

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
    const MDSetnrence = document.getElementById('calendarDownLineContent_md');
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
// 获取需要滚动和隐藏的 div 元素
const scrollingText = document.getElementById('scrollText');

// 设置一个定时器，在10秒后隐藏 div 元素
setTimeout(() => {
  scrollingText.style.display = 'none';
}, 24000); // 10000 毫秒 = 10 秒


