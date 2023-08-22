const issueURL = "https://api.github.com/repos/zhen9xia0yu/viewbridge/issues/4/comments";
const successMessageCalendar = document.getElementById("successMessage_calander");
var theRandomSentence = "";
var theCalenderSentence = "";
// const accessToken = process.env.MY_ACCESS_TOKEN;
var accessToken = "";
console.log(accessToken); // 这里将打印出您的 Token
var BackwordSentence = "";
var CurrentSentence = "";
var ForwardSentence = "";
let WordsLenHis = null;
var WordsLenHisLines = "";

window.addEventListener('load', async () => {
    try {
        const response = await fetch('https://api.viewbridge.top/api/token');
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
    const fileContent = await loadFileData('words/WordsLenHistory.txt');
    console.log(fileContent);
    WordsLenHisLines = fileContent.trim().split('\n');    
    console.log(WordsLenHisLines);

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

async function readFile(fileUrl) {
    try {
        const response = await fetch(fileUrl);
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Error reading file:', error);
        return '';
    }
}

async function loadFileData(fileUrl) {
    if (!WordsLenHis) {
        WordsLenHis = await readFile(fileUrl);
    }
    return WordsLenHis;
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}${month}${day}`;
}

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
    let finalSentence = `<img src="src/group99764@2x_cut.png" alt="sentence bg"><div class="rlt-sentce-text">`;
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

const recordbtn = document.getElementById("resultsentence");
recordbtn.addEventListener("click", function () {
    // const commentContent = commentInput.value;
    if (theRandomSentence) {
        console.log(theRandomSentence);
        const commentData = {
            body: theRandomSentence
        };
        console.log("push" + commentData);
        console.log("token is" + accessToken);
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


const StceBackBtn = document.getElementById("SentenceBackBtn")
const StceForwardBtn = document.getElementById("SentenceForwardBtn")
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", async () => {
    const randomResults = wordLists.map(list => getRandomItem(list));
    BackwordSentence = CurrentSentence;
    CurrentSentence = randomResults;
    // console.log("forward:"+ForwardSentence[0].word);
    // console.log("Current:"+CurrentSentence[0].word);
    // displayResult(randomResults);
    displayResultWithCats(CurrentSentence);
    if (BackwordSentence !== "") {
        StceBackBtn.style.display = "block";
    }
    else StceBackBtn.style.display = "none";
    StceForwardBtn.style.display = "none";
    // console.log("test" + theRandomSentence);

});
StceBackBtn.addEventListener("click", async () => {
    ForwardSentence = CurrentSentence;
    CurrentSentence = BackwordSentence;
    BackwordSentence = "";
    displayResultWithCats(CurrentSentence);
    StceBackBtn.style.display = "none";
    StceForwardBtn.style.display = "block";
});
StceForwardBtn.addEventListener("click", async () => {
    BackwordSentence = CurrentSentence;
    CurrentSentence = ForwardSentence;
    displayResultWithCats(CurrentSentence);
    StceBackBtn.style.display = "block";
    StceForwardBtn.style.display = "none";
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
    const bg_popupContainer = document.getElementById('popupContainer_bg');
    popupContainer.style.display = 'block';
    bg_popupContainer.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
}

// Function to hide the popup
function hidePopup() {
    const popupContainer = document.getElementById('popupContainer');
    const bg_popupContainer = document.getElementById('popupContainer_bg');
    popupContainer.style.display = 'none';
    bg_popupContainer.style.display = 'none';
    document.body.style.overflowY = 'auto';
}

// Function to show the popup-Favorite
function showPopup_Favorite() {
    const popupContainer = document.getElementById('FavoriteContainer');
    popupContainer.style.display = 'block';
}

// Function to hide the popup-favorite
function hidePopup_Favorite() {
    const popupContainer = document.getElementById('FavoriteContainer');
    popupContainer.style.display = 'none';
}


function getCalderStceCalLenth(date){
    let found = false;
    for (const line of WordsLenHisLines) {
      const [dateStr, numA, numB, numC] = line.split(',');
    //   const selectedDateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${selectedDate.getDate().toString().padStart(2, '0')}`;
        const selectedDateStr = formatDate(date);

      console.log(selectedDateStr);
      console.log(dateStr);

      if (selectedDateStr <= dateStr) 
        return [numA,numB,numC];
    }

    if (!found) 
        return [0,0,0];

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

function Date2SentenceWithCalLenth(date,lengthWho,lengthWhere,lengthWhat) {
    const whoindex = (date * LuckyNumber) % lengthWho;
    const whereindex = (date * LuckyNumber) % lengthWhere;
    const whatindex = (date * LuckyNumber) % lengthWhat;
    return `${wordLists[0][whoindex].word}${wordLists[1][whereindex].word}${wordLists[2][whatindex].word}`;
}

function ShowCanlder(date) {
    const yearSentence = document.getElementById('calendarUpLineContent_year');
    const MDSetnrence = document.getElementById('calendarDownLineContent_md');
    const DaySentence = document.getElementById('calendarday');
    const WeekSentence = document.getElementById('calendarweek');
    const popupSentence = document.getElementById('calendarSentence')
    const luarcontent = document.getElementById('lunarcontent');
    
    var [lengthWho, lengthWhere, lengthWhat] = getCalderStceCalLenth(date);
    console.log(lengthWho);
    console.log(lengthWhere);
    console.log(lengthWhat);
    if(!lengthWho) lengthWho = wordLists[0].length;
    if(!lengthWhere) lengthWhere = wordLists[1].length;
    if(!lengthWhat) lengthWhat = wordLists[2].length;
    console.log(lengthWho);
    console.log(lengthWhere);
    console.log(lengthWhat);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月份从 0 开始
    const day = date.getDate();
    const intdate = Number(`${year}${month}${day}`);
    // const sentencecontent = Date2Sentence(intdate);
    console.log(intdate);
    const sentencecontent = Date2SentenceWithCalLenth(intdate,lengthWho,lengthWhere,lengthWhat);

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
    theCalenderSentence = sentencecontent;
    successMessageCalendar.style.display = 'none';
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

//hide favorite
document.addEventListener("click", function (event) {
    const popupContainer = document.getElementById('FavoriteContainer');
    if (!popupContainer.contains(event.target) && event.target !== calendarImage) {
        hidePopup_Favorite();
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
}, 16000); // 10000 毫秒 = 10 秒

const recordbtncalender = document.getElementById("record_btn_calander");
recordbtncalender.addEventListener("click", function () {
    // const commentContent = commentInput.value;
    if (theCalenderSentence) {
        console.log(theCalenderSentence);
        const commentData = {
            body: theCalenderSentence
        };
        console.log("push" + commentData);
        console.log("token is" + accessToken);
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
                    successMessageCalendar.style.display = "flex";
                    successMessageCalendar.style.justifyContent = "center";
                }
            })
            .catch(error => console.error(error));
    }
});

const showCommentsBtn = document.getElementById('showFavorite');
const commentsContainer = document.getElementById('FavoriteContainer');
showCommentsBtn.addEventListener('click', async () => {
    try {
        const comments = await getAllComments();
        renderComments(comments);
    } catch (error) {
        console.error(error);
    }
});

async function getAllComments() {
    let allComments = [];
    let page = 1;

    while (true) {
        const comments = await getComments(page);
        if (comments.length === 0) {
            break; // 没有更多评论了，退出循环
        }
        allComments = allComments.concat(comments);
        page++;
    }

    return allComments;
}

async function getComments(page) {
    const response = await fetch(`${issueURL}?page=${page}`);
    const comments = await response.json();
    return comments;
}

// async function getComments() {
//     const response = await fetch(issueURL);
//     const comments = await response.json();
//     return comments;
// }
function renderComments(comments) {
    console.log(comments);
    commentsContainer.innerHTML = ''; // 清空之前的内容
    comments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // 按时间倒序排列

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
          <p>${new Date(comment.created_at).toLocaleString()}</p>
          <p>${comment.body}</p>
          <div class="deleteBtn">❌</div>
        `;

        const deleteBtn = commentDiv.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', () => {
            const confirmDelete = confirm(`确定要删除这个句子吗? \n"${comment.body}"`);
            if (confirmDelete) {
                deleteComment(comment.id)
                    .then(() => {
                        commentsContainer.removeChild(commentDiv);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });

        commentsContainer.appendChild(commentDiv);
    });
    showPopup_Favorite();
}

async function deleteComment(commentId) {
    const response = await fetch(`https://api.github.com/repos/zhen9xia0yu/viewbridge/issues/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to delete comment');
    }
}
