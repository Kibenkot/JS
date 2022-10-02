// функция findAllMatches принимает 2 аргумента
// первый - текст, второй - подстрока
// возвращает массив с индексами всех вхождений


// function findAllMatches(str, substr) {
    

// const res = [];

// let stringCopy = str;
// let delta = 0;
// while (stringCopy.includes(substr)) {
//     let firstMatch = stringCopy.indexOf(substr); // 6
//     stringCopy = stringCopy.slice(firstMatch + substr.length);
//     res.push(firstMatch+delta);
//     delta+= firstMatch+substr.length;
// }

// return res;
// }
// console.log(findAllMatches("Hello test_test_test_test", "test"));

// 30.09.22 =================================================

// функция isInteger, принимает на вход число, возвращает true, 
// если число целое
// function isInteger(a) {
//     return a % 1 === 0;
// }

// // функция takePercent принимает на вход число N и percent
// // возвращает заданный процент от числа N

// function takePercent(n, percent) {
//     return n* percent /100;
// }

// функция sum принимает на вход целое положительное число
// N и возвращает сумму чисел от 1 до N

// function sum(n) {
//     let result = 0;
//     for( let i = 1; i <=n; i++){
//         result += i;
//     }
//     return result;
// }

// function fastSum(n) {
//     return n*(n+1) /2;
// }


// // функция toTime принимает на вход число секунд
// // возвращает время в формате "Часы:Минуты:Секунды"
// // если Часы = 0, то только "Минуты:Секунды"

// function toTime(seconds) {
// let minutes, hours;
// minutes = Math.floor(seconds / 60);
// hours = Math.floor(minutes / 60);
// if (hours === 0) {
//     return `${minutes}: ${seconds % 60}`;
// }    
// return ` ${hours}:${minutes % 60}: ${seconds % 60}`;

// }

// // console.log(toTime(45));
// // console.log(toTime(134));
// // console.log(toTime(4000));

// // функция isPowerOfTwo принимает на вход число n (целое переменное)
// // возвращает true, если число является степенью двойки

// function isPowerofTwo(n) {
//    let power = 0;
//    while (Math.pow(2, power) <= n) {
//     if (Math.pow(2, power) === n){
//         return true
//     }
//     power++;
// }
// return false;
// }

// // функция isNatural принимает на вход целое положительное
// // число n и возвращает true, если число натуральное, т.е.
// // делится нацело только на само себя и 1


// function isNatural(n) {
// for (let i = 2; i < n; i++){
// if (n %i === 0){
//     return false;
//     }
// }
//     return true;
// }

// // console.log(isNatural(7)); // true
// // console.log(isNatural(9)); // false

// // функция isSquare принимает на вход целое положительное
// // число n и возвращает true, если это число является
// // квадратом другого целого числа



// function isSquare(n) {
//     // 1 < a^2 < n
//     for(let a =1; Math.pow(a,2)<= n; a++){
//         if(Math.pow(a,2) === n){
//             return true;
//         }
//     }
//     return false;
// }
// // console.log(isSquare(1)); //true
// // console.log(isSquare(4)); //true
// // console.log(isSquare(8)); //false

// // функция matchHouse принимает в себя число домиков n
// // возвращает число спичек, которые нужны для того, чтобы
// // построить эти домики

// function matchHouse(n) {
// return 6+5*(n-1);
//     // 6 спичек нужно на 1 домик
// }
// //6, 6+5, 6+5+5; 6+5+5+5

// // функция getHypotenuse принимает длины катетов a и b
// // и возвращает гипотенузу (корень из a ^ 2 + b ^ 2)

// function getHypotenuse(a,b) {
//     return Math.pow(a*a+b*b, 1/2);
    
// }

// // функция isNearest принимает 2 числа a и b и возвращает
// // то из них, которое ближе к 100


// function isNearest(a,b) {
//     const aDistance = Math.abs(100-a);
//     const bDistance = Math.abs(100-b);
//     if(aDistance < bDistance){
//         return a;
//     }
//     return b;
// }

// // функция nearestFive принимает на вход положительное целое
// // число n и возвращает ближайшее к нему кратное 5

// function nearestFive(n) {
// const reminder = n % 5;
// if(reminder=== 0){
//     return n;
// } if (reminder < 3 ){
//    return n-reminder;
// }
// return n-reminder+5;
    
// }

// console.log(nearestFive(15)); // 151
// console.log(nearestFive(149)); // 150
// console.log(nearestFive(14)); // 140


// // функция throwDice возвращает случайный бросок
// // кубика (число от 1 до 6)

// function throwDice() {
//     const x = Math.random();
//     return Math.ceil(6*x);
// }

// // 0< x <1
// // 0.0000001< 6*x <5.999999
// // 1 <= Math.ceil(6*x)... <=6



// // функция randomNum возвращает случайное число в диапозоне
// // от 5 до 16 включительно


// function randomNum() {
//     const x = Math.random();
//     return 4+ Math.ceil(12*x);
// }


// // 0< x <1
// // 1 <= Math.ceil(12*x)... <=12
// // 5<= 4+ Math.ceil(12*x) <=16


// // ======================================================

// // функция revertString принимает строку str и разворачивает
// // её задом наперёд

// function revertString(str) {
// let result = "";
// for (let i = str.length-1; i >=0; i--){
//     result+=str[i];
// }
//     return result;
// }
    
// console.log(revertString("abcd"));

// // "abcd"


// // функция isPalindrome принимает строку str и возвращает
// // true, если эта строка - палиндром


// function isPalindrome(str) {
//     const revertString = revertString(str);
//     return revertString === str;
    
// }

// function isPalindrome(str) {
//    for(let i=0; i<str.length; i++){
//     if(str[i] !== str[str.length -1-i]){
//         return false
//     }
//    } 
//     return true
// }


// // шалаш , А роза упала на лапу Азора, 12321
// // str[0] === str[str.length -1]  // str[0] === str[str.length -1 -0] 
// // str[1] === str[str.length -2]  // str[1] === str[str.length -1 -1]
// // str[2] === str[str.length -3]

// //str[i] === str[str.length -1-i]



// // функция isBalanced принимает строку str и возвращает
// // true, если в строке одинаковое число букв "а" и "о"


// function isBalanced(str) {
//     let aCount=0;
//     let oCobnt=0;
//     for(let i = 0; i< str.length; i++){
//         if(str[i]==="a"){
//             aCount++;
//         }
//         if(str[i]==="o"){
//             oCobnt++;
//         }
//     }
// return aCount === oCobnt;

// }

// console.log(isBalanced("agkiio")); //true

// // функция howManyCats принимает на вход строку str и возвращает
// // сколько раз в этой строке встречается буквосочетание "cat"


// function howManyCats(str) {
//     let count = 0;
//     while (str.includes("cat")) {
//     const index = str.indexOf("cat");
//     count++;
//     str = str.slice(index + "cat".length)
        
//     }
//     return count;
// }

// console.log(howManyCats("cat")); //1
// console.log(howManyCats("I am not a cat")); //1
// console.log(howManyCats("cat, cat and more cat")); //3
// console.log(howManyCats("dog")); //0


// // функция getExtension принимает строку fileName
// // и возвращает расширение файла. Если расширения нет, то вернуть
// // пустую строку

// function getExtension(fileName) {
//     const arr = fileName.split(".");
//     if(arr.length === 1){
//     return ""
//     }
//     return arr[arr.length -1];
// }

// console.log(getExtension("document.txt"));// txt
// console.log(getExtension("picture.png"));// png


// // функция doubleLetters принимает строку str и дублирует все
// // символы в ней. если символ уже продублирован, то повторно
// // дублировать не надо. Пробелы не дублируются.


// function doublLetters(str) {
//     let result = "";
// for (let i = 0; i< str.length; i++){
//     const hasSameSibling = str[i]===str[i+1] || str[i]===str[i-1];
//     if(str[i]===" " || hasSameSibling){
//         result+= str[i];
//     }else{

//     result += str[i] + str[i];
//           }
//      }
//      return result;
// }

// console.log(doublLetters("Hello world!")); //HHeelloo wwoorrlld !!





// ДЗ Функция randomPhone возвращает случайно сгенерированный номер телефона в формате "ххх-ххх", где х - цифра от 0 до 9. 
//    Номер телефона не может начинаться с 0.


// ДЗ Функция isCube принимает на вход число a и возвращает true, если а - это куб какого-то числа
// ДЗ Функция triangleSquare принимает стороны треугольника a, b и c и возвращает его площадь. Для расчёта площади
//    можно воспользоваться формулой Герона.
// ДЗ Функция getDistance принимает x1, y1, x2, y2 (координаты двух точек в Евклидовом пространстве) и возвращает
//    расстояние между ними
