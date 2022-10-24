// функция isInteger, принимает на вход число, возвращает true, 
// если число целое
function isInteger(a) {
    if (a % 1 === 0){
        return true;
    }
    return false;
}

console.log(isInteger(5));
console.log(isInteger(5.78));

// функция takePercent принимает на вход число N и percent
// возвращает заданный процент от числа N
// takePercent(5, 80) -> 4
// takePercent(5, 200) -> 10
function takePercent(n, percent) {

    return n* (percent/100);
}
console.log(takePercent(5, 80));
console.log(takePercent(5, 200));

// функция sum принимает на вход целое положительное число
// N и возвращает сумму чисел от 1 до N
function sum(n) {
    let res = 0;
for (let i = 0; i <= n; i++) {
    res = res + i;
}
return res; 
}
console.log(sum(3));

//=======================

let res = 0;
function sum1(n) {
     const arrNum =String(n).split("");
     console.log(arrNum);
 for (let i = 0; i < arrNum.length; i++) {
    
    res+=Number(arrNum[i]);
 }
   return res;
 }
 console.log(sum1(38755));

console.log("567".split(""));

// функция toTime принимает на вход число секунд
// возвращает время в формате "Часы:Минуты:Секунды"
// если Часы = 0, то только "Минуты:Секунды"
function toTime(seconds) {
    let hours;
    let min;
    min = Math.floor(seconds/60);
    hours = Math.floor(min / 60);
     if(hours===0){
        return `00:${min}:${seconds % 60}`
     }

        return `${hours}:${min % 60}:${seconds % 60}`    
    
}
console.log(toTime(125));

// функция isPowerOfTwo принимает на вход целое положительное
// число n возвращает true, если число является степенью двойки
function isPowerOfTwo(n) {
    let power= 0;
    while (Math.pow(2, power) <=n) {
   
    if(Math.pow(2, power)===n){
        return true;
    }
  power++;
}
return false;
}
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(5));

//============================================
// функция isNatural принимает на вход целое положительное
// число n и возвращает true, если число натуральное, т.е.
// делится нацело только на само себя и 1

function isNatural(n) {
    for (let i = 2; i < n; i++) {
        if(n % i === 0 ){
            return false;
        }  
    }
return true;
}

console.log(isNatural(1));
console.log(isNatural(5));
console.log(isNatural(1.67));

//=========================
// функция isSquare принимает на вход целое положительное
// число n и возвращает true, если это число является
// квадратом другого целого числа
function isSquare(n) {
    if(Math.sqrt(n) %1 === 0){
        return true;
    }
    return false;
}
console.log(isSquare(2));
console.log(isSquare(4));
console.log(isSquare(6));
console.log(isSquare(1));
console.log(isSquare(9));
console.log(isSquare(25));

function isSquare1(n) {
    // 1 < a^2 < n
    for (let a = 1; Math.pow(a, 2) <= n; a++) {
        if (Math.pow(a, 2) === n) {
            return true;
        }
    }
    return false;
}
console.log(isSquare1(2));
console.log(isSquare1(4));
console.log(isSquare1(6));
console.log(isSquare1(1));
console.log(isSquare1(9));
console.log(isSquare1(25));

//==========================

// функция matchHouse принимает в себя число домиков n
// возвращает число спичек, которые нужны для того, чтобы
// построить эти домики
function matchHouse(n) {
    const ownHous= 6;
    return ownHous + ownHous*(n-1);

}
console.log(matchHouse(3));
console.log(matchHouse(5));