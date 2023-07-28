const wordLists = [
    [
        { who:0, number: 1, word: "喜鹊" },
        { who:0, number: 2, word: "大巴车" },
        { who:0, number: 3, word: "蒸馏水" }, 
        { who:0, number: 4, word: "巧克力" }, 
        { who:0, number: 5, word: "诗歌" },    
        { who:0, number: 6, word: "诗人" }, 
        { who:0, number: 7, word: "时间" }, 
        { who:0, number: 8, word: "春天" }, 
        { who:0, number: 9, word: "清晨" }, 
        { who:0, number: 10, word: "植物学家" },
        { who:0, number: 11, word: "雨季的水盆" },
        { who:0, number: 12, word: "雪花" },
        { who:0, number: 13, word: "电视机" },
        { who:0, number: 14, word: "那边的远山" },
        { who:0, number: 15, word: "谁的公司" },
        { who:0, number: 16, word: "心脏" },
        { who:0, number: 17, word: "我们的玫瑰" },
        { who:0, number: 18, word: "墙壁" },
        { who:0, number: 19, word: "冰淇淋" }, 
        { who:0, number: 20, word: "风扇" },  
        { who:0, number: 21, word: "记忆的教室" }, 
        { who:0, number: 22, word: "面前的礁石" }, 
        { who:0, number: 23, word: "脚下的土坑" },
        { who:0, number: 24, word: "外星人的手臂" },
        { who:0, number: 25, word: "神灵" },
        { who:0, number: 26, word: "葬礼的花圈" },
        { who:0, number: 27, word: "那条牛仔裤" },
        { who:0, number: 28, word: "梦中的摄像机" },
        { who:0, number: 29, word: "我最爱的词语" },
        { who:0, number: 30, word: "蓝色水滴" }, 
        { who:0, number: 31, word: "腿边的猫" }, 
        { who:0, number: 32, word: "被窝上面" }, 
        { who:0, number: 33, word: "你" },  
        { who:0, number: 34, word: "思想" }, 
        { who:0, number: 35, word: "我的未来" },
        { who:0, number: 36, word: "这里的岔路" },
        { who:0, number: 37, word: "桌面上的茶" },
        { who:1, number: 38, word: "尾巴" },
        { who:1, number: 39, word: "月亮" }, 
        { who:1, number: 40, word: "礁石" }, 
        { who:1, number: 41, word: "鸟鸟" }, 
        { who:1, number: 42, word: "芭比" }, 
        { who:1, number: 43, word: "AI" }, 
        { who:1, number: 44, word: "兜兜" }, 
        { who:1, number: 45, word: "眼睛" }, 
        { who:1, number: 46, word: "麦子" }, 
        { who:1, number: 47, word: "狐狸" }, 
        { who:1, number: 48, word: "叶文洁" },  
        { who:1, number: 49, word: "摇滚乐" },  
        { who:1, number: 50, word: "孟子义" },  
        { who:1, number: 51, word: "空气" }, 
        { who:1, number: 52, word: "白色" }, 
        { who:1, number: 53, word: "黑色" }, 
        { who:1, number: 54, word: "玻璃" }, 
        { who:1, number: 55, word: "烟花" }, 
        { who:1, number: 56, word: "面包屑" }, 
    ],
    [
        { who:0, number: 1, word: "将花瓶" },
        { who:0, number: 2, word: "在卧室" },
        { who:0, number: 3, word: "顺着火光" },
        { who:0, number: 4, word: "被蜗牛" },
        { who:0, number: 5, word: "通过比赛" },
        { who:0, number: 6, word: "在火车道" },
        { who:0, number: 7, word: "随风" },
        { who:0, number: 8, word: "跟着" },
        { who:0, number: 9, word: "按照风向" },
        { who:0, number: 10, word: "沿着冥王星" },
        { who:0, number: 11, word: "圈个范围" },
        { who:0, number: 12, word: "凭借黑色" },
        { who:0, number: 13, word: "借着手办" },
        { who:0, number: 14, word: "带着耳机" },
        { who:0, number: 15, word: "靠着" },
        { who:0, number: 16, word: "拿着钢笔" },
        { who:0, number: 17, word: "朝白色" },
        { who:0, number: 18, word: "当无脸怪" },
        { who:0, number: 19, word: "从手腕" },
        { who:0, number: 20, word: "在剧场" },
        { who:0, number: 21, word: "在房顶" },
        { who:0, number: 22, word: "坐在花上" },
        { who:0, number: 23, word: "在你肩膀" },
        { who:0, number: 24, word: "在潜水艇" },
        { who:0, number: 25, word: "在太阳镜" },
        { who:0, number: 26, word: "在猫咪肉垫" },
        { who:0, number: 27, word: "在小狗耳朵" },
        { who:0, number: 28, word: "从过去" },
        { who:0, number: 29, word: "漫漫长夜里" },
        { who:0, number: 30, word: "在此刻" },
        { who:0, number: 31, word: "周而复始" },
        { who:0, number: 32, word: "从子宫里" },
        { who:0, number: 33, word: "在郊外" },
        { who:0, number: 34, word: "在遥远的街角" },
        { who:0, number: 35, word: "在破败的小路" },
        { who:0, number: 36, word: "在凝重的黄昏" },
        { who:0, number: 37, word: "从灰烬中" },
        { who:0, number: 38, word: "在梦幻的镜子里" },
        { who:0, number: 39, word: "在不知名的河流附近" },
        { who:0, number: 40, word: "在沼泽地" },
        { who:0, number: 41, word: "凭借风势" },
        { who:0, number: 42, word: "倚靠着白墙" },
        { who:0, number: 43, word: "在混乱的梦中" },
        { who:1, number: 44, word: "在脑海中" },
        { who:1, number: 45, word: "从山野里" },
        { who:1, number: 46, word: "拿着月亮" },
        { who:1, number: 47, word: "在云朵中间" },
        { who:1, number: 48, word: "上炕" },
        { who:1, number: 49, word: "在石头上" },
        { who:1, number: 50, word: "在1999" },
        { who:1, number: 51, word: "在星期三" },
        { who:1, number: 52, word: "在早上五点" },
        { who:1, number: 53, word: "连着Wi-Fi" },
        { who:1, number: 54, word: "说着句子" },
        { who:1, number: 55, word: "从洞穴中" },
        { who:1, number: 56, word: "指着天空" },
        { who:1, number: 57, word: "坐着热气球" },
        { who:1, number: 58, word: "潜入人群" },
        { who:1, number: 59, word: "打开田字格" },
        { who:1, number: 60, word: "穿越空气" },
        { who:1, number: 61, word: "在眼睛里" },
        { who:1, number: 62, word: "在雨季" },
        { who:1, number: 63, word: "眨着眼睛" },
        { who:1, number: 64, word: "借着风" },
        { who:1, number: 65, word: "进入真空" },
    ],
    [
        { who:0, number: 1, word: "爆炸" },
        { who:0, number: 2, word: "拍照" },
        { who:0, number: 3, word: "考研" },
        { who:0, number: 4, word: "播放" },
        { who:0, number: 5, word: "钻进大地" },
        { who:0, number: 6, word: "飞到天空" },
        { who:0, number: 7, word: "觅食" },
        { who:0, number: 8, word: "睁开双眼" },
        { who:0, number: 9, word: "生长细纹" },
        { who:0, number: 10, word: "担心起舞" },
        { who:0, number: 11, word: "惦念" },
        { who:0, number: 12, word: "滴水" },
        { who:0, number: 13, word: "复习" },
        { who:0, number: 14, word: "穿上盔甲" },
        { who:0, number: 15, word: "吃零食" },
        { who:0, number: 16, word: "发呆" },
        { who:0, number: 17, word: "流向云朵" },
        { who:0, number: 18, word: "飞出来" },
        { who:0, number: 19, word: "死去" },
        { who:0, number: 20, word: "撒一杯酒" },
        { who:0, number: 21, word: "流淌" },
        { who:0, number: 22, word: "汇到海里" },
        { who:0, number: 23, word: "敲到墙上" },
        { who:0, number: 24, word: "穿个耳洞" },
        { who:0, number: 25, word: "从头到尾" },
        { who:0, number: 26, word: "接听电话" },
        { who:0, number: 27, word: "屏息对视" },
        { who:0, number: 28, word: "大口呼吸" },
        { who:0, number: 29, word: "回答目光" },
        { who:0, number: 30, word: "暂别春雪" },
        { who:0, number: 31, word: "诀别爱人" },
        { who:0, number: 32, word: "虚拟自己" },
        { who:0, number: 33, word: "介绍沙漠" },
        { who:0, number: 34, word: "出卖天空" },
        { who:0, number: 35, word: "交换" },
        { who:0, number: 36, word: "沐浴" },
        { who:0, number: 37, word: "背弃" },
        { who:0, number: 38, word: "揉碎" },
        { who:0, number: 39, word: "凋零" },
        { who:0, number: 40, word: "审视着深处" },
        { who:0, number: 41, word: "陶醉" },
        { who:0, number: 42, word: "消失" },
        { who:0, number: 43, word: "驰骋" },
        { who:0, number: 44, word: "升上夜空" },
        { who:0, number: 45, word: "织成梦的迷宫" },
        { who:0, number: 46, word: "纵火" },
        { who:0, number: 47, word: "捕捉白天" },
        { who:0, number: 48, word: "按下归零的按钮" },
        { who:0, number: 49, word: "漫游" },
        { who:0, number: 50, word: "遵从又摒弃" },
        { who:0, number: 51, word: "翻阅破碎的书籍" },
        { who:1, number: 52, word: "沸腾" },
        { who:1, number: 53, word: "吃蟹黄堡" },
        { who:1, number: 54, word: "下班打卡" },
        { who:1, number: 55, word: "探了个头" },
        { who:1, number: 56, word: "说悄悄话" },
        { who:1, number: 57, word: "比耶" },
        { who:1, number: 58, word: "打了个响指" },
        { who:1, number: 59, word: "呼吸" },
        { who:1, number: 60, word: "翘起了二郎腿" },
        { who:1, number: 61, word: "扮演别人" },
        { who:1, number: 62, word: "站立" },
        { who:1, number: 63, word: "喝咖啡（大杯冰 标准 3泵橙罗勒风味调味糖浆 原萃浓缩标准 2浓缩份数 巴旦木奶）" },
        { who:1, number: 64, word: "播放春晚" }, 
        { who:1, number: 65, word: "跳着舞睡着了" }, 
        { who:1, number: 66, word: "喝麻了帮服务员擦了半张桌子" },
        { who:1, number: 67, word: "吃火烧云" },
        { who:1, number: 68, word: "练习自拍" },
        { who:1, number: 69, word: "变成罐头" },
        { who:1, number: 70, word: "说梦话" },
        { who:1, number: 71, word: "违反纪律" },
        { who:1, number: 72, word: "执行不婚主义" },
        { who:1, number: 73, word: "发动了战争" },
        { who:1, number: 74, word: "做了个臀桥" },
        { who:1, number: 75, word: "躺着" },
        { who:1, number: 76, word: "绽放" },
        { who:1, number: 77, word: "下雨" },
        { who:1, number: 78, word: "停止" },
        { who:1, number: 79, word: "靠岸" },

    ]
];
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
    let finalSentence = "<p>";
    for (const result of results) {
        if(result.who === 0)
            resultHtml += `<div class="chat-cat1">${result.word}。：<img src="src/cat1@2x.png" style="width:48px;height:48px;"></div>`;
            else
            resultHtml += `<div class="chat-cat2"><img src="src/cat2@2x.png" style="width:24px;height:29px24px;height:29px;"> ：${result.word}</div>`;
            finalSentence += `${result.word}`;
    }
    resultHtml += "</ul>";
    finalSentence += "</p>";
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

displayCalendar(); // Call the function to display the calendar when the page loads
displayWords(); // Call the function to display the selected words when the page loads
