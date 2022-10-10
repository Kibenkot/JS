// Функция getFullName принимает на вход строку, в которой
// обязательно есть "Имя Фамилия", например, Иван Иванов
// Петр Сидоров и т.д.
// возвращает строку "Привет, ${Имя Фамилия}"

// function getFullName(str) {
// const re = /[A-ZА-Я][a-zа-я]{0,}\s[A-ZА-Я][a-zа-я]{0,}/;
// const match = str.match(re);
// return `Привет, ${match[0]}`;
// }
// console.log(getFullName("Иван Иванов"));
// console.log(getFullName("Ivan Ivanov"));
// console.log(getFullName("Where is Petr Petrov"));
//=======================================================

//Функция displayDays принимает на вход число N и
// возвращает строку "N" + "день" согласованную по
// правилам русского языка
//   примеры: 1 день, 33 дня, 15 дней


// function displayDays(n) {
//     const n100Mod = n % 100;
//  if(n100Mod<20 && n100Mod > 10){
//     return `${n} дней`;
//  }
//  const n10Mod = n%10;
//  if( n10Mod === 0 || n10Mod > 4){
//    return `${n} дней`;
//  }
//  if( n10Mod === 1){
//     `${n} день`;
//  }
//   return `${n} дня`; 

// }

// console.log(displayDays(20));

// // 1 день
// // 2 дня
// // 3 дня
// // 4 дня
// // 5 дней
// // 21 день
// // 22 дня
// // 23 дня
// // 24 дня
// // 25 дней
// // 31 день
// // .....
// // 100 дней
// // 101 день
// // 1001 день


// //==================================================
// // Функция capitalize принимает на вход строку str и 
// //возвращает 
// // её, где каждое слово начинается с большой буквы
// // пример: "мама мыла раму" -> "Мама Мыла Раму"

// function capitalize(str) {
//     const arr = str.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         const word = arr[i];
//         if(word.length === 0){ 
//         continue; // не делай ничего идди на следующую строку
//         }
//         const letters = word.split("");
//         letters[0]=letters[0].toUpperCase();
//         arr[i]=letters.join("");

//     }
// return arr.join(" ");    
// }
// console.log(capitalize("mама Мыла pаму"));

// //==================================
// // Функция isFullName принимает строку str и возвращает true
// // если строка является именем и фамилией
// // примеры: Иван Иванов, Петр Петров, Козьма Петров-Водкин


// function isFullName(str) {
//    const re =/^[A-ZА-Я][A-Za-zА-Яа-я]{0,}\s{1,}([A-ZА-Я][A-Za-zА-Яа-я\-]{0,}(\s|$){1,}){1,}$/g


//     return re.test(str);
// }
// console.log(isFullName("Иван Иванов"));
// console.log(isFullName("Козьма Петров-Ищдкин"));
// console.log(isFullName("Козьма Петров-Ищдкин Bjhjluu"));
// console.log(isFullName("Козьма Петров-Ищдкин Bjhjluuvlffcvkf"));

// //=====================================
// // Функция isCardNumber принимает на вход строку str
// // возвращает true, если это валидный номер карты
// // в формате хххх-хххх-хххх-хххх

// function isCardNumber(str) {
//     const num = /^\d{4}-\d{4}-\d{4}-\d{4}$/g; //g - глобальный поиск
   
//         return num.test(str);
    
// }
// console.log(isCardNumber("1234-6785-4567-3456")); // true
// console.log(isCardNumber("+1234678545673456")); //false


// //=======================================
// // Функция toCamelCase принимает на вход строку str и возвращает
// // её же записанную в camelCase
// //    пример: "three apples" -> "threeApples"
// //            "TO CAMEL CASE" -> "toCamelCase"


// function toCamelCase(str) {
//     const array = str.split(" ").filter(s=>s.length !==0);
//     for (let i = 0; i < array.length; i++) {
//         const word = i === 0 ? array[i]: array[i].toLowerCase();
//         const letters = word.split("");
//         if(i===0){
//             letters[0]=letters[0].toLowerCase();
//         } else{
//             letters[0]=letters[0].toUpperCase();
//         }
//         array[i]=letters.join("");
//     }
//     return array.join("");

// }

// console.log(toCamelCase("three appel")); //threeApples
// console.log(toCamelCase("to camel CASE")); //toCamelCase


// //==================================

// // Функция displayDate принимает на вход дату и шаблон
// // возвращает строку, представляющую эту дату в нужном
// // отображении


// function displayDate(d, template) {
//     const year =d.getFullYear();
//     let month = d.getMonth();
//     let date = d.getDate();
//      if(month < 10){
//         month = "0" + month;
//      }
//      if(date < 10){
//          date = "0" + date;
//      }
//     return template
//     .replace(/yyyy/g, year)
//     .replace(/mm/g, month)
//     .replace(/dd/g, date);


// }

// console.log(displayDate(new Date(), "dd/mm/yyyy"));
// console.log(displayDate(new Date(), "yyyy mm dd"));
// console.log(displayDate(new Date(), "dd.mm"));
// console.log(displayDate(new Date(), "сегодня dd"));

// //================================

// // Функция nearestLeapYear возвращает ближайший к текущему моменту
// // год который делится на 4


// function nearestLeapYear() {
//     const currentYear =new Date().getFullYear();
//     const remainder = currentYear % 4;
//     if(remainder === 0){
//         return currentYear;
//     }
//     if(remainder === 1){
//         return currentYear -1;
//     }
//     if(remainder === 3){
//         return currentYear +1;
//     }
//     // const currentMonth = new Date().getMonth();
//     // if(currentMonth < 5){
//     //     return currentYear -2;
//     // }
//     // if(currentMonth > 5){
//     //     return currentYear +2;
//     // }

//     // const currentDay = new Date().getDay();
//     // if(currentDay < 27){
//     //     return currentYear -2;
//     // }
//     // if(currentDay >= 27){
//     //     return currentYear +2;
//     // }

// const previos = currentYear -2;
// const previosDate = new Date(previos);
// const next =currentYear +2;
// const nextDate = new Date(next);
// const before = new Date() - previosDate;
// const after = nextDate - new Date();
// if(before < after){
//     return previos;
// }else{
//     return next;
// }


// }
// // remainder = 0 => return currentYear -0
// // remainder = 1 => return currentYear -1
// // remainder = 2 =>
//    // смотрим на месяц
//        // смотрим на день
//            // return currentYear 

// // remainder = 3 => return currentYear +1

// console.log(nearestLeapYear());

// //====================================

// // ДЗ Функция cut принимает на вход строку, режет её посередине 
// // и возвращает первую половину. Если в строке нечётное число
// // символов, то округлить в меньшую сторону


// // ДЗ Функция kingSaid принимает на вход строку str и добавляет к 
// // её началу фразу "Король сказал: ". Если строка уже начинается
// // с фразы "Король сказал: ", то ничего добавлять не надо.
// // пример: kingSaid("хочу банан") -> "Король сказал: хочу банан"
// //         kingSaid("Король сказал: я устал, я ухожу") -> "Король сказал: я устал, я ухожу"



// // ДЗ Функция isItFridayToday возвращает строку "Пятница будет 
// // через N дней", "Пятница уже завтра!", "Ура, сегодня пятница!" 
// // или "Пятница была вчера :(" в зависимости от текущего дня недели



// //Задача с "cat"
// function howManyCats(str) {
//     return str.match(/cat/g).length;
// }


//==============================================================================

// функция toObject принимает в себя массив arr состоящий из
// элементов вида { id: <строка>, value: <число> }, возвращает
// объект вида { "<строка>": число }

// function toObject(arr) {
//     return arr.reduce((accumulator, item) => {
//         accumulator[item.id] = item.value;
//         return accumulator;
//     }, {});
// }


// console.log(toObject[
//     {id:"One", value:1},
//     {id:"two", value:2},
//     {id:"three", value:3}
// ]); // {"One": 1, "two":2, "three": 3}


// //=================
// // в функцию getMark передают массив объектов вида
// // { name: "Студент", mark: 5 } и строку name
// // задача - сказать какая оценка у студента с именем name

// function getMark(arr, name) {
//     for (let i = 0; i < arr.length; i++) {
//          if(arr[i].name === name){
//             return arr[i].mark;
//          }  
//     }
// }

// console.log(getMark([
//     { name:"Катя", mark: 5},
//     { name:"Боря", mark: 5},
//     { name:"Гульраз", mark: 100}
// ], "Боря")); //5

// //
// // В функцию getMark2 передают объект, где ключ - это имя
// // студента, а значение - его оценка + параметр name
// // надо вернуть оценку студента с именем name

// function getMark2(obj, name) {
//     return obj[name];
// }

// console.log(getMark2({
//     "Катя": 5,
//     "Боря": 5,
//     "Гульраз": 100
// }, "Боря")); //5

//=============

/// функция getMaxPower принимает массив arr состоящий из элементов
// { power: <число>, owner: <строка> }
// и возвращает владельца самой большой мощности
// если есть несколько максимальных мощностей - вернуть любого
function getMaxPower(arr) {
    const powers = arr.map(function (item) { 
        return item.power;
    });
    console.log("powers: ", powers);
    const maxPower = Math.max(...powers);
    console.log("maxPower", maxPower);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].power === maxPower) {
            return arr[i].owner;
        }
    }
}

console.log(getMaxPower([
    { power: 2, owner: "Петя" },
    { power: 10, owner: "Рон" },
    { power: 1, owner: "Вова" }
])) // Рон



//=================
// функция reverseArr принимает на вход массив и возвращает его
// копию развёрнутую задом наперёд

// function reverseArr(arr) {
//    const res = [];
//    for (let i = arr.length -1; i>=0; i--) {
//     const j = arr.length-1-i;
//     res[j] = arr[i];
//     // i = arr.length -1
//     //j = 0
//     // i = arr.length -2
//     //j = 1
//     // i = arr.length -3
//     //j = 2
//    } 
//     return res;
// }

// console.log(reverseArr([]));
// console.log(reverseArr([1,2,3])); //[3,2,1]
// console.log(reverseArr([ {a:2}, 1, "230" ])); //["230",1,{a:2} ]


//=======================


// function getAbsoluteMax(arr) {
//     // arr = [0,1,-6]
//     //absArr = [0,1,6]
//     const absArr = arr.map(function (item) {
//         return Math.abs(item);
//     });
//     const maxNumber = Math.max(...absArr);
//     // 6 - наибольшее число
//     if(arr.includes(maxNumber)){
//         return maxNumber;
//     } else{
//         return - maxNumber;
//     }

// }

// console.log(getAbsoluteMax([0,1,-6])); //-6
// console.log(getAbsoluteMax([-6, 7, 120])); //120

// // 2 вариант
// function getAbsoluteMax2(arr) {
//   let currentMax = 0;
//     for (let i = 0; i < arr.length; i++) {
//        if(Math.abs(arr[i])> Math.abs(currentMax))
//        currentMax = arr[i];   
//     }
//     return currentMax
// }

// console.log(getAbsoluteMax2([0,1,-6])); //-6
// console.log(getAbsoluteMax2([-6, 7, 120])); //120

// // 3 вариант
// function getAbsoluteMax3(arr) {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     if(Math.abs(max) > Math.abs(min) ){
//         return max;
//     } else{
//         return min;
//     }
//   }
  
//   console.log(getAbsoluteMax3([0,1,-6])); //-6
//   console.log(getAbsoluteMax3([-6, 7, 120])); //120

  //============
// функция getRating принимает на вход массив элементов
// вида { likes: <число>, dislikes: <число> }
// вернуть суммарный рейтинг


//   function getRating(arr) {
//     return arr.reduce(function (accumulator, value) {
//         return accumulator + value.likes - value.dislikes;
//     }, 0)

//   }

//   console.log(getRating([
//     {likes: 500, dislikes:10},
//     {likes: 1, dislikes:15},
//     {likes: 60, dislikes:80},

//   ])); //456


  //============
// метод getMostPopular принимает на вход массив arr
// и возвращает самый часто встречаемый в нём элемент

  function getMostPopular(arr) {
    const baskets = [];
    for (let i = 0; i< arr.length; i++) {   
     baskets[i] = []; 
    }
    for (let i = 0; i < arr.length; i++) {
        let repeatsCount = 1;
        for(let j= i+1; j<arr.length; j++){
          if(arr[i]=== arr[j]){
            repeatsCount++
          }
        }
        baskets[repeatsCount-1].push(arr[i]);
    }
     for (let i = baskets.length-1; i>=0; i--) {
        if(baskets[i].length !==0){
            return baskets[i][0];
        }
     }
  }

  console.log(getMostPopular([
    1,2,3,2,4,2
  ])); //2

  console.log(getMostPopular([
    "123" ,"2" , "4" ,"a", "a"
  ])); //"a"

  //[  ] алгоритм корзина

  const foundElement = [ 1, 2, 3, 4, 5 ].find(function (item) {
    return item > 3;
}); // 4
const filteredArray = [ 1, 2, 3, 4, 5 ].filter(function (item) {
    return item > 3;
}); // [ 4, 5 ]
const hasNegative = [ 1, 2, 3, 4, -1 ].some(function (item) {
    return item < 0;
}); // true, потому что -1 < 0
const allPositive = [ 1, 2, 3, 4, 5 ].every(function (item) {
    return item > 0;
}); // true, потому что КАЖДЫЙ элемент положительный
