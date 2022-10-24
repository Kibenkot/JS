// ДЗ функция countWordPrice принимает на вход слово word и массив prices вида
// { letter: <буква>, price: <число> } и возвращает стоимость слова
function countWordPrice(word, prices) {
    const costWord = [];
    const arrWord = word.split("");
    arrWord.forEach(function (item){
        const pricesItem = prices.find(function(m){
            return m.letter ===item;
        });
    costWord.push(pricesItem.price);
    });
    return costWord.reduce(function(accumulator, value) {
    return accumulator + value;
}, 0);

}

console.log(countWordPrice("волк", [
    { letter: "о", price: 1 },
    { letter: "л", price: 1 },
    { letter: "к", price: 2 },
    { letter: "в", price: 5 },
])); // 9

//=======================================

// ДЗ функция whoTakeABook принимает на вход массив читателей, массив книг,
// массив билетов и название книги. Возвращает имя читателя, который взял
// книгу
function whoTakeABook(readers, books, records, bookName) {
   const idBookName = books.find(function(m){
    return m.bookName === bookName;
   });

   const nameReader = records.find(function(n){
    return n.book === idBookName.id;
   });

   return nameReader.reader;
   
}

console.log(whoTakeABook(
     [ "Петя", "Вася", "Коля" ],
     [ 
         { id: 1, bookName: "Сказка о золотой рыбке" },
         { id: 2, bookName: "Чёрный обелиск" },
         { id: 3, bookName: "Норвежский лес" }
     ],
     [ 
         { reader: "Петя", book: 2 }, // Петя взял "Чёрный обелиск"
         { reader: "Петя", book: 1 }, // Петя взял "Сказка о золотой рыбке"
         { reader: "Коля", book: 3 }, // Коля взял "Норвежский лес"
     ],
     "Чёрный обелиск"
 )); // Петя


 // ДЗ* Функция solveEquasion принимает на вход строку вида
// x <знак операции> <число> = <число> и возвращает значение x

//1 Вариант
function solveEquasion(str) {
    const arr = str.split(" ");
   // console.log(arr);
     
    const a = +arr[4];
    const b = +arr[2];
   if (arr[1] === "+"){
    return a-b;
   }
   if (arr[1] === "-"){
    return a+b;
   }
   if (arr[1] === "*"){
    return a/b;
   }
   if (arr[1] === "/"){
    return a*b;
   } 
}
console.log(solveEquasion("x + 5 = 9")); // 4
console.log(solveEquasion("x * 5 = 30")); // 6

//2 Вариант
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

function solveEquasion1(str) {
    const arr = str.split(" ");
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

console.log(solveEquasion1("x + 5 = 9")); // 4
console.log(solveEquasion1("x * 5 = 30")); // 6