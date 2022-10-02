const output = document.getElementById("output");

function displayText(text) {
    // output.innerHTML += "<div>" + text + "</div>";
    console.log(text);
}

// print("Hello word!");
// print("Еще одна строка");

displayText("a"+ "b");
displayText("a" + 1);
displayText(1+"a");

const tmp = "tmp"
displayText(`a ${tmp} b`);

displayText(tmp[0]);
displayText(tmp[1]);
displayText(tmp.length);


//"tmp" "tmp"
function equalString(a, b) { // (a, b = '') если вдруг b нет, то b пустая стока
if(a.length !== b.length){
    return false;
}
for(let i= 0; i < a.length; i++){
    if(a[i] !== b[i]){
        return false;
    }
}
return true;

}
    
displayText(equalString("temp", "temp")); //true
displayText(equalString("tmp", "temp")); //fals
displayText(equalString("temp", "temp123")); //true ошибка
displayText(equalString("temp"));

//==================================
//Каст у строк

displayText(parseInt("10", 10)) // 

// displayText(calc(("10 + 7")));

function calc(str) {
    let a ='', b= '';
   for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if(+str[i] !== NaN); // Проверяем цифра или нет

   }
    
}

//===============================
 // formatDate принимает дату в формате 2022-09-25,
// а возвращает в формате 25/09/2022

function formatDate(d) {
    const arr = d.split("-");
    return `${arr[2]}/${arr[1]}/${arr[0]}`;

    //return d.split("-").join("/");
}

displayText(formatDate("2022-09-25"));

//================================

// wordsCount принимает предложение, возвращает
// число слов в предложении

function wordCount(s) {
const arr = s.split(" ");
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length !== 0) {
//         count++;
//     }
// }
// return count;
    
    const filteredArr = arr.filter(s => s.length !== 0)
    return filteredArr.length;
}


displayText(wordCount("Мама мылы раму"));
displayText(wordCount("Мама  мылы b раму"));

//=====================================
// makePhrase принимает массив слов и составляет из
// них предложение


function makePhrase(arr) {
    const firstWord = arr[0]; //получили первое слово в массиве // мама
    const letterArr = arr.split(""); // разорвать по букве 1 сдово // [m, a,m,a]
    letterArr[0] = letterArr[0].toUpperCase(); //получилт 1 букву большой
    arr[0] = letterArr.join(""); // склеили 1 слово

    return `${arr.join(" ")}.`;

}

displayText(makePhrase("Мама", "мылы", "раму"));


//======================================

displayText("Мама мылы раму.".slice(0,4)); // Получим Mama

// cut принимает в себя длинную строку. Если строка > 300
// символов, то она обрезается многоточием. Если строка <= 300
// символов, то возвращается эта же строка

function cut(str) {
    if (str.length > 300){
    let cutIndex = 297;
    while (cutIndex >= 0 && str[cutIndex] !== " "){ // пока не нашли пробел уменьшаем // cutIndex >= 0 ставим чтобы цикл был не бесконечный если слово более 297 символов без пробела
        cutIndex--;
    }
     // если нет пробелов, to cutIndex = -1
     if (cutIndex === -1){
        cutIndex =297;
     }

     return `${str.slice(0, cutIndex)}...`;

    } else {
    return str;
    }
}

displayText(cut("Мама мылы раму"));
displayText(cut("Phasellus nec nibh id massa bibendum placerat at at tortor. Integer maximus vitae ex a iaculis. Vivamus elementum gravida sapien, quis bibendum lacus congue vitae. Phasellus ac hendrerit mi, at ultricies velit. Integer sit amet ipsum ac erat sagittis aliquet. Sed lobortis sapien ex, vel sodales leo lacinia laoreet. Integer vel velit semper, rutrum libero vitae, blandit orci. Praesent pellentesque mollis magna in porttitor. Nullam sodales felis eu finibus consequat. Pellentesque lobortis sollicitudin massa, sit amet blandit nisl cursus sed. Donec tempus, est in gravida posuere, felis turpis sodales velit, in posuere leo dui vitae nunc. Nunc viverra finibus porttitor"));















