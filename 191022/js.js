
// Функция hasDoubleLetters принимает строку и возвращает
// true, если в строке есть удвоенный символ в любом регистре

// function hasDoubleletters(str) {
//     let arr = str.split("");
//     console.log(arr);
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i].toLowerCase()===arr[i-1]){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(hasDoubleletters("длинношеев"));
// console.log(hasDoubleletters("JavaScript"));

//=============================

// Функция multiplyEvenDigits принимает на вход массив целых чисел
// и возвращает его копию, где каждое чётное число увеличено вдвое

// function multiplyEvenDigits2(arr) {
//    return arr.map(item =>{
//     if(item%2 ===0){
//         return item *2;
//     }
//     return item;
//    })
// }
// console.log(multiplyEvenDigits2([1,2,3]) ); //[2,4,3]
// console.log(multiplyEvenDigits2([2,4,9]) ); //[4,8,9]

//===========================
// Число называется автоморфным, если его квадрат заканчивается этим числом
// функция isAutoMorphic принимает на вход число и возвращает true, 
// если это число автоморфное


// function isAutoMorphic(n) { // n= 5
    
//     const square = Math.pow(n, 2); // 25
//     const squareToString = square +""; //"25"
//     const nToString = n +""; // "5"
//     return (square+"").endsWith(n+"");
// }
// console.log(isAutoMorphic(5)); //true, 25 заканчиваутся на 5
// console.log(isAutoMorphic(8)); //false, 64 заканчиваутся на 8
// console.log(isAutoMorphic(76)); //true

//=========================
// функция getTime принимает на вход два объекта вида { x: <число>, y: <число> }
// и параметр v - скорость. возвращает время, за которое можно пройти из первой
// точки во вторую


// function getTime(p1,p2, v) {
//      const s = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y -p2.y, 2));
// return s/v;
// }

// console.log(getTime({x:0,y:1},{x:3,y:5}, 2));

//=============================
// функция getCentury принимает на вход положительное число и возвращает век

// function getCentury(year) {
//     return Math.ceil(year/ 100);
// }
// console.log(getCentury(1990)); //20
// console.log(getCentury(1048)); //11
// console.log(getCentury(5)); //1

//===============================0===
// функция rockPaperScissors принимает на вход 2 строки вида
// "камень", "ножницы", "бумага" и возвращает -1, если первый игрок проиграл
// 0, если ничья и 1, если первый игрок выиграл

// function rockPaperScissors(player1, player2) {
//     const obj = {
//         "камень": 0,
//         "бумага":2,
//         "ножницы":1
//     }
//     const player1ToNumber = obj[player1];
//     const player2ToNumber = obj[player2];

//     return [ [0,1,-1], [-1,0,1], [1,-1,0]][player1ToNumber][player2ToNumber]
   

// }

// /*             камень  ! ножницы ! бумага
// камень       !    0         1        -1
// ножнтцы      !    -1        0        1
// бумага       !    1        -1        0
 
// const arr =[ [0,1,-1], [-1,0,1], [1,-1,0]]
// return arr[player1][player1]
// */
// console.log(rockPaperScissors("камень", "бумага")); // -1
// console.log(rockPaperScissors("камень", "камень")); // 0
// console.log(rockPaperScissors("ножницы", "бумага")); // 1

// // ==============================
// // функция shortFormula принимает развёрнутую формулу и сокращает её
// // любым образом

// function shortFormula(formula) {

//     const baskets = {};
//      for (let i = 0; i < formula.length; i++) {
//         const char = formula[i]; // i= 0, char = H, baskets["H"] = 1
//                                  // i= 1, char = O, baskets["O"] = 1
//                                  //i= 2, char = H, baskets["H"] = 2
//         if(baskets[char] === undefined){
//             baskets[char]=1;
//         } else{
//             baskets[char]=baskets[char]+1
//         }
        
//      }

//     Object.entries(baskets).reduce(function(accumulator, value){
//         const key = value[0];
//         const count = value[1];
//         if(count===1){
//             return accumulator + key
//         }else{
//             accumulator + key+count;
//         }
//     }, "");

// }
// console.log(shortFormula("HOH")); //H2O, OH2
// console.log(shortFormula("CCHOHHHHH")); //C2H6O

// //===================

// // функция shortFormula принимает развёрнутую формулу и сокращает её
// // любым образом
// function shortFormula(formula) { // HOH
//     const baskets = {  };
//     for (let i = 0; i < formula.length; i++) {
//         const char = formula[i]; // i = 0, char = H, baskets["H"] = 1
//                                  // i = 1, char = O, baskets["O"] = 1
//                                  // i = 2, char = H, baskets["H"] = 2
//         if (baskets[char] === undefined) { 
//             baskets[char] = 1;
//         } else {
//             baskets[char] = baskets[char] + 1;
//         }
//     }
//     // baskets = { "H": 2, "O": 1 }
//     // Object.entries(baskets) = [ [ "H", 2 ], [ "O", 1 ] ]
//     return Object.entries(baskets).reduce(function (accumulator, value) { // accumulator = "" value = [ "H", 2 ]
//                                                                           // accumulator = "H2" value = [ "O", 1 ]
//         const key = value[0]; // key = "H"
//                               // key = "O"
//         const count = value[1]; // count = 2
//                                 // count = 1
//         if (count === 1) {
//             return accumulator + key // "H2" + "O" = "H2O"
//         } else {
//             return accumulator + key + count; // "" + "H" + 2 = "H2"
//         }        
//     }, "");
// }

// console.log(shortFormula("HOH")); // "H2O" "OH2"
// console.log(shortFormula("CCHOHHHHH")); // C2H6O

//======================================
// Торт порезали на неравные куски. Функция splitEqually принимает массив
// arr и число гостей. Возвращает массив массивов, где result[i] - какие
// куски отойдут гостю с номером i. Если поделить поровну нельзя, то
// возвращается пустой массив



//====================================================
// функция getLonelyChar принимает на вход строку и возвращает строку
// из символов, которые встречаются в исходной только один раз без учёта регистра


// function getLonelyChar(str) {
//     const baskets = {  };
//     for (let i = 0; i < str.length; i++) {
//          const char = str[i]; 
//           if (baskets[char] === undefined) { 
//               baskets[char] = 1;
//               } else {
//             baskets[char] = baskets[char] + 1;
//              }
//              }

//   return Object.entries(baskets).reduce(function (accumulator, value) { // accumulator = "" value = [ "H", 2 ]
//                                                                           // accumulator = "H2" value = [ "O", 1 ]
//         const key = value[0]; 
//         const count = value[1]; 
//        if (count === 1) {
//        return  accumulator + key 
//        } else {
//              return accumulator;
//        }        
//     }, "");
//  }

// console.log(getLonelyChar("корова"));// "крва"
// console.log(getLonelyChar("мама"));// ""
// console.log(getLonelyChar("JavaScript"));// ""

//=================================
// Функция findLocalMaximum принимает на вход массив и возвращает массив локальных
// максимумов, то есть таких элементов, каждый из соседей которых меньше него.


// function findLocalMaximum(arr) {
//     const newArr = [];
//    for (let i = 1; i < arr.length-1; i++) {
//    if(arr[i]>arr[i+1] && arr[i]> arr[i-1]){
//      newArr.push(arr[i]);
//    }
//    }
//  if(arr[0]> arr[1]){
//     newArr.push(arr[0]);
//  }
//  if(arr[arr.length-1]> arr[arr.length -2]){
//     newArr.push(arr[arr.length-1])
//  }

//    return newArr;
// }

// console.log(findLocalMaximum([4,5,2,1,4,9,7,12])); //[5,9]


// function findLocalMaximum1(arr) {
//     const extendedArr = [-Infinity, ...arr, -Infinity]
//     const res = [];
//    for (let i = 1; i < extendedArr.length-1; i++) {
//    if(
//     extendedArr[i]>extendedArr[i+1] &&
//      extendedArr[i]> extendedArr[i-1]
//      ){
//      res.push(extendedArr[i]);
//    }
   
// }
// return res;
// }

// console.log(findLocalMaximum([4,5,2,1,4,9,7,12])); //[5,9,12]

//======================== 21/10/2022=====================
// Функция count принимает на вход массив строк и строку и возвращает
// сколько раз эта строка встречается в массиве

// function count(arr, str) {
//     let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i]===str){
//         newArr.push(arr[i])
//     }
//   }
//     return newArr.length;

// }
// console.log(count(["a", "b", "a", "c"], "a")); //2


// function count1(arr, str) {
//     let c = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i]===str){
//         c++;
//     }
//   }
//     return c;

// }
// console.log(count1(["a", "b", "a", "c"], "a")); //2


// function count2(arr, str) {
//     return arr.filter(item => item === str).length;

// }
// console.log(count2(["a", "b", "a", "c"], "a")); //2
 
//============================================
// Функция canSplit принимает на вход строку из 0 и 1
// возвращает true, если символы в строке можно перемешать таким образом,
// чтобы они шли через один

// function canSplit(str) {
//     const arr =str.split("");
//     console.log(arr);
//     let one = arr.filter(item => item === "1").length;
//     let noll = arr.filter(item => item === "0").length;
//     if (one===noll || one +1 === noll || one === noll+1) {
//         return true;
//     }
//    return false;
// }
// console.log(canSplit("10101"));//true
// console.log(canSplit("011"));//true
// console.log(canSplit("101011111"));//false

//=============================================
// Функция separate принимает на вход строку из цифр и букв
// возвращает массив из двух элементов - в одном только буквы, в другом - только цифры

// function separate(str) {
//     const lettersString = str.replace(/\d/g, "");
//     const numbersString = str.replace(/[^\d]/g, "");
//      return[lettersString, numbersString];
// }
// console.log(separate("a1b2"));//["ab", "12"]
// console.log(separate("12abc"));//["abc", "12"]


//==========================================
// Функция countCards принимает на вход массив из элементов от 2 до 10 или
// "J", "Q", "K", "A" и возвращает сумму карт по правилам блекджека, где
// J = 11, Q = 12, K = 13, A = 1

// function countCards(arr) {
//     const strToNumber = {
//         "J" : 11, "Q" : 12, "K" : 13, "A" : 1
//     };
//     return arr.reduce(function (accumulator, value) {
//         let n;
//         if(typeof value === "number"){
//             n = value;
//         }else{
//             n=strToNumber[value];
//         }
//         return accumulator + n;
//     }, 0);
    
// }

// console.log(countCards([4, 4, "K"]));//21
// console.log(countCards([10 ,"J", "A"]));//22

//=========================================
// Функция canBeFriends принимает на вход два массива интересов
// Возвращает true, если массивы имеют >= 50% пересечений

// function canBeFriends(arr1, arr2) {
//    const commonInterests = arr1.filter(function (item){
//     return arr2.includes(item);
//    });
//    return commonInterests.length /arr1.length >=0.5;
    
// }
// console.log(canBeFriends(
//     ["JS","cats","netflix"]
//     ["JS","marvel","netflix"] )); // true

//     console.log(canBeFriends(
//         ["JS","cats","netflix"]
//         ["PHP","marvel","netflix"] )); // false

//=======================================
// Функция countSalary принимает на вход ставку за 9-и часовой рабочий день и
// число отработанных часов. Возвращает сколько надо заплатить

// function countSalary(rate, hours) {
//     let price1 = rate / 9;
//     return price1 * hours;
// }
// console.log(countSalary(9,9)); //9
// console.log(countSalary(10,9)); //10

//=========================================
// Функция check принимает на вход строку и массив разрешённых символов
// возвращает true, если строка состоит только из разрешённых символов


// function check(str, arr) {
//     for (let i = 0; i < str.length; i++) {
//         if(!arr.includes(str[i])){
//             return false;
//         }

//     }
//     return true;
    
// }
// console.log(check("a12", ["a","1","2","3"]));//true
// console.log(check("12", ["a","1","2","3"]));//true
// console.log(check("a125", ["a","1","2","3"]));//false

//========================================
//1// Функции sum, reduce, mult и divide принимают на вход два числа
// a и b и производят соответствующее арифметическое действие

function sum(a,b) {
    return a+b;
}
function reduce(a,b) {
    return a-b;
}
function mult(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}
console.log(sum(5,6));
console.log(reduce(5,6));
console.log(mult(5,6));
console.log(divide(5,6));

// 2 // Функция calculate принимает на вход a, b и знак операции ("+", "-", "*", "/")
// и возвращает результат этой операции

function calculate(a,b, operation) {
    const operationToFunction ={
        "+": sum,
        "-": reduce,
        "*": mult,
        "/": divide
    }
return operationToFunction[operation](a,b);

}
console.log(calculate(5,6, "+"));


// 3 // Функция calculateExpression принимает на вход строку str, в которой записана
// одна математическая операция вида "<число 1> <знак операции> <число 2>"
// и возвращает результат этой операции

function calculateEüpression(str) {
    const arr = str.split(" ");
    const a = +arr[0];
    const b = +arr[2];
    const operation = arr[1];
    return calculate(a,b,operation)
}

console.log(calculateEüpression("-5 + -2"));// -7
console.log(calculateEüpression("3 * -5"));// -15

//4

//  function calculateExpression(str) {
//     const arr = str.split(" ");
    

//       while(arr.length !==1){
//        const treeItems = arr.slice(0,3);
//        const a = +treeItems[0];
//        const b = +treeItems[2];
//        const operation = treeItems[1];
//        const result =calculate(a,b, operation);
//        arr = [result, ...arr.slice(3)]; //["7", "*", "2"]
//       }

//       return arr[0];
//     }
    

//['3', '+', '4', '*', '2']
//["7", "+", "2"]
//["14"]
// console.log(calculateExpression("3 + 4 * 2"));//14
// console.log(calculateExpression("1 + 2 - 3 + 4"));//4


//4 // Функция calculateExpression2 принимает на вход строку str, в которой записана
// одна математическая операция вида "<число 1> <знак операции> <число 2>"
// и возвращает результат этой операции (С УЧЕТОМ МАТ ПРАВИЛ)

// function calculateExpression2(str) {
//     const arr = str.split(" ");
    

//     while(arr.length !==1){
//         const indesMultOrDivide = arr.findIndex(function(item){
//             return item === "*" || item ==="/"
//         });
//         if (indesMultOrDivide !== -1){
//             const treeItems = arr.slice(indesMultOrDivide -1, indesMultOrDivide+2)
//             const a = +treeItems[0];
//             const b = +treeItems[2];
//             const operation = treeItems[1];
//             const result =calculate(a,b, operation);
//             arr = [...arr.slice(0,indesMultOrDivide -1),
//             result,
//             ...arr.slice(indesMultOrDivide +2)]
//         } else{
//                 const treeItems = arr.slice(0,3);
//                 const a = +treeItems[0];
//                 const b = +treeItems[2];
//                 const operation = treeItems[1];
//                 const result =calculate(a,b, operation);
//                 arr = [result, ...arr.slice(3)]; //["7", "*", "2"]
//         }
//     }

//     return arr[0];

// }
// // [ "3", "+", "4", "*", "2"]
// //["3" "+" "8"]
// //["11"]

// console.log(calculateExpression2("3 + 4 * 2"));//11
// console.log(calculateExpression2("1 + 2 - 3 + 4"));//4


// ДЗ* Функция solveEquasion принимает на вход строку вида
// x <знак операции> <число> = <число> и возвращает значение x
function solveEquasion(str) {
    const arr = str.split(" ");
   // console.log(arr);
    const a = +arr[4];
    const b = +arr[2];
    
   if (arr[1] === "+"){
    let operation=arr[1].replace("+", "-");
    return calculate(a,b, operation);
   }
   if (arr[1] === "-"){
    let operation=arr[1].replace("-", "+");
    return calculate(a,b, operation);
   }
  
   if (arr[1] === "*"){
    let operation=arr[1].replace("*", "/");
    return calculate(a,b, operation);
   }
   if (arr[1] === "/"){
    let operation=arr[1].replace("/", "*");
    return calculate(a,b, operation);
   }

}

console.log(solveEquasion("x + 5 = 9")); // 4
console.log(solveEquasion("x * 5 = 30")); // 6

console.log(solveEquasion("x - 5 = 9")); // 14

