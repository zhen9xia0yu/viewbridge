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
            { number: 1, word: "喜鹊" },
            { number: 2, word: "大巴车" },
            { number: 3, word: "蒸馏水" }, 
            { number: 4, word: "巧克力" }, 
            { number: 5, word: "诗歌" },    
            { number: 6, word: "诗人" }, 
            { number: 7, word: "时间" }, 
            { number: 8, word: "春天" }, 
            { number: 9, word: "清晨" }, 
            { number: 10, word: "植物学家" },
            { number: 11, word: "雨季的水盆" },
            { number: 12, word: "雪花" },
            { number: 13, word: "电视机" },
            { number: 14, word: "那边的远山" },
            { number: 15, word: "谁的公司" },
            { number: 16, word: "心脏" },
            { number: 17, word: "我们的玫瑰" },
            { number: 18, word: "墙壁" },
            { number: 19, word: "冰淇淋 " }, 
            { number: 20, word: "风扇 " },  
            { number: 21, word: "记忆的教室" }, 
            { number: 22, word: "面前的礁石" }, 
            { number: 23, word: "脚下的土坑" },
            { number: 24, word: "外星人的手臂" },
            { number: 25, word: "神灵 " },
            { number: 26, word: "葬礼的花圈" },
            { number: 27, word: "那条牛仔裤" },
            { number: 28, word: "梦中的摄像机" },
            { number: 29, word: "我最爱的词语" },
            { number: 30, word: "蓝色水滴" }, 
            { number: 31, word: "腿边的猫" }, 
            { number: 32, word: "被窝上面" }, 
            { number: 33, word: "你" },  
            { number: 34, word: "思想" }, 
            { number: 35, word: "我的未来" },
            { number: 36, word: "这里的岔路" },
            { number: 37, word: "桌面上的茶 " },
            { number: 38, word: "尾巴" },
            { number: 39, word: "月亮" }, 
            { number: 40, word: "礁石" }, 
            { number: 41, word: "鸟鸟" }, 
            { number: 42, word: "芭比" }, 
            { number: 43, word: "AI  " }, 
            { number: 44, word: "兜兜" }, 
            { number: 45, word: "眼睛" }, 
            { number: 46, word: "麦子" }, 
            { number: 47, word: "狐狸" }, 
            { number: 48, word: "叶文洁" },  
            { number: 49, word: "摇滚乐" },  
            { number: 50, word: "孟子义" },  
            { number: 51, word: "空气" }, 
            { number: 52, word: "白色" }, 
            { number: 53, word: "黑色" }, 
            { number: 54, word: "玻璃" }, 
            { number: 55, word: "烟花" }, 
            { number: 56, word: "面包屑" }, 
        ],
        [
            { number: 1, word: "将花瓶              " },
            { number: 2, word: "在卧室              " },
            { number: 3, word: "顺着火光            " },
            { number: 4, word: "被蜗牛              " },
            { number: 5, word: "通过比赛            " },
            { number: 6, word: "在火车道            " },
            { number: 7, word: "随风                " },
            { number: 8, word: "跟着                " },
            { number: 9, word: "按照风向            " },
            { number: 10, word: "沿着冥王星         " },
            { number: 11, word: "圈个范围           " },
            { number: 12, word: "凭借黑色           " },
            { number: 13, word: "借着手办           " },
            { number: 14, word: "带着耳机           " },
            { number: 15, word: "靠着               " },
            { number: 16, word: "拿着钢笔           " },
            { number: 17, word: "朝白色             " },
            { number: 18, word: "当无脸怪           " },
            { number: 19, word: "从手腕             " },
            { number: 20, word: "在剧场             " },
            { number: 21, word: "在房顶             " },
            { number: 22, word: "坐在花上           " },
            { number: 23, word: "在你肩膀           " },
            { number: 24, word: "在潜水艇           " },
            { number: 25, word: "在太阳镜           " },
            { number: 26, word: "在猫咪肉垫         " },
            { number: 27, word: "在小狗耳朵         " },
            { number: 28, word: "从过去             " },
            { number: 29, word: "漫漫长夜里         " },
            { number: 30, word: "在此刻             " },
            { number: 31, word: "周而复始           " },
            { number: 32, word: "从子宫里           " },
            { number: 33, word: "在郊外             " },
            { number: 34, word: "在遥远的街角       " },
            { number: 35, word: "在破败的小路       " },
            { number: 36, word: "在凝重的黄昏       " },
            { number: 37, word: "从灰烬中           " },
            { number: 38, word: "在梦幻的镜子里     " },
            { number: 39, word: "在不知名的河流附近 " },
            { number: 40, word: "在沼泽地           " },
            { number: 41, word: "凭借风势           " },
            { number: 42, word: "倚靠着白墙         " },
            { number: 43, word: "在混乱的梦中       " },
            { number: 44, word: "在脑海中           " },
            { number: 45, word: "从山野里           " },
            { number: 46, word: "拿着月亮           " },
            { number: 47, word: "在云朵中间         " },
            { number: 48, word: "上炕               " },
            { number: 49, word: "在石头上           " },
            { number: 50, word: "在1999             " },
            { number: 51, word: "在星期三           " },
            { number: 52, word: "在早上五点         " },
            { number: 53, word: "连着 Wi-Fi         " },
            { number: 54, word: "说着句子           " },
            { number: 55, word: "从洞穴中           " },
            { number: 56, word: "指着天空           " },
            { number: 57, word: "坐着热气球         " },
            { number: 58, word: "潜入人群           " },
            { number: 59, word: "打开田字格         " },
            { number: 60, word: "穿越空气           " },
            { number: 61, word: "在眼睛里           " },
            { number: 62, word: "在雨季             " },
            { number: 63, word: "眨着眼睛           " },
            { number: 64, word: "借着风             " },
            { number: 65, word: "进入真空           " },
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
    
