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
    
