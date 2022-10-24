// В программе задан массив, передающий строковые элементы. 
//Напишите программу, которая которая ответит на вопрос:
// присутствует ли в массиве элемент, чей корень длины возвращает целое число?
// В качестве ответа необходимо вывести булевый тип true, false.
//Пример: ['Велосипед','Торт','Тенис','Ракетка','Город']
//Результат: true

// function cherArr(arr) {
//     for (let i = 0; i < cherArr.length; i++) {
//         let number = Math.sqrt(cherArr[i]);
//         if (number.length % 1 === 0){
//             return true;
//         }
//         return false;    
//     }
// }

// console.log(cherArr(['Велосипед','Торт','Тенис','Ракетка','Город' ]));

// // вариант учителя

// function cherArr(arr) {
//  let result = arr.some(elem => (elem.length ** 0.5) % 1 ==0)
//         return result;    
// }

// console.log(cherArr(['Велосипед','Торт','Тенис','Ракетка','Город' ]));




// //В программе задан массив, передающий числовые элементы. Напишите программу,
// // которая сформирует новый массив из отрицательных чисел заданного массива.
// //Пример: [1,2,3,-4,5,-6,7,-8,9,10]
// //Результат: [-4,-6,-8]

// function newArr(arr){
// const arr1 = [];
// for (let i = 0; i < newArr.length; i++) {
//  if(newArr[i] < 0){
//     arr1[i]= newArr[i];
//     }
//     return arr1;
//   }
// }

// console.log(newArr([1,2,3,-4,5,-6,7,-8,9,10]));

// // Вариант учителя

// let array = [1,2,3,-4,5,-6,7,-8,9,10];

//     let result = array.filter(elem => elem <0);
//     console.log(result);

//     let result2 = array.filter(elem => Math.sign(elem) == -1);
//     console.log(result2);

// // Задача 3. Сформируйте функцию some(array, callback).
// Функция должна проверить каждый элемент на условие, 
// которое будет в последующем задано в колбэк-функции.
// Если найдется хоть 1 элемент который удовлетворяет 
//условию колбека - функция должна вернуть true,
// в противном случае false

// Пример: 
//  let array = ['Велосипед','Торт','Тенис','Ракетка','Город'];
//  console.log(some(array, (elem) => elem.length == 4));
// // Результат: true

// let words = ['Велосипед','Торт','Тенис','Ракетка','Город'];
// function some(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(some(words, (elem) => elem.length == 4));
// console.log(some(words, (elem) => elem.startsWith ('В')));

// // Задача 4. Сформируйте функцию ourMap(array, callback). Функция должна изменить все элементы массива по правилам,
// которые должны быть изложены в callbacl-функции.
// Примечание: функция должна вернуть НОВЫЙ массив, не изменив источник.


 //let array = [1,2,3,4]
// function ourMap(array, callback) {
//    return array.map(callback);
// }

// console.log(ourMap(array, (e) => e ** 2), array);

// // Результат: [1,3,9,16] [1,2,3,4]

// function ourMap1(array, callback) {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//          newArray[i]=callback(array[i])
//     }
//     return newArray;
//  }
 
//  console.log(ourMap(array, (e) => e ** 2), array);

// let array = [1,2,3,4]
// array.forEach((elem, index, array) => console.log(elem, index, array));
// array.forEach((elem, index, array) => console.log(elem, index, array.join('-')));


/// Задача 5

// В программе задана переменная values, которая хранит массив из строк. 
// Определите математическую сумму всех элементов, которые при преобразовании 
// в число не вернут значение NaN. 
// Cформируйте решение в функцию sumNumbers(array). Функция должна вернуть число.


// Пример значений переменных:
// let values = ["100", "30", "Не число", "20", "Тоже не число"] 
// console.log(sumNumbers(values))
// Пример результата: 150

// isNaN() - метод, определяющий значение NaN в аргменте. 
// Если NaN - ответ true, в противном случае false

let values = ["100", "30", "Не число", "20", "Тоже не число"] 
function sumNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       if(!isNaN(array[i])) {
         sum +=Number(array[i]);
       }
    }
    return sum;
}
console.log(sumNumbers(values));