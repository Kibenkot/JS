// Функция isSingleNumber принимает на вход число
// и возвращает true, если это число состоит из одной и той же
// цифры


function isSingleNumder(n) {
    const str = Math.abs(n).toString().replace(".", "");
   
    for (let i = 1; i < str.length; i++) {
        //сравниваем с элементом слева
       if(str[i]!== str[i-1]){
        return false;
       }
    }
return true;
}

console.log(isSingleNumder(11111)); //true
console.log(isSingleNumder(-111)); //true
console.log(isSingleNumder(123)); //false
console.log(isSingleNumder(1.11)); //true

//===============================
// Килограм мяса стоит 2$ и имеет 100к. 
// Килограм овощей стоит 0.5$ и имеют 75к.
// Функция getMenu() принимает первым параметром бюджет
// а вторым минимально число необходимых для жизни калорий
// возвращает массив из 2 чисел, первым числом идёт количество
// килограм мяса, вторым - количество килограм овощей.
// Мяса должно быть максимум.


function getMenu(budget, minCalories) {
let meatCount = 0;
let vegCount = 0;

meatCount = Math.floor(budget/2);
vegCount = (budget % 2) *2;

while(meatCount * 100 + vegCount *75){
    meatCount--;
    vegCount = vegCount +4;
}

return [meatCount, vegCount];

}

console.log(getMenu(20, 1000) ); //10, 0
console.log(getMenu(20, 2000) ); //5, 20



function getMenu2(budget, minCalories) {
    let meatCount = 0;
    let vegCount = 0;
    
    meatCount = 0;
    vegCount = budget *2;
    
    while(meatCount * 100 + vegCount *75 >= minCalories){
        meatCount++;
        vegCount = vegCount +4;
    }
    
    return [meatCount, vegCount];
    
    }
    
    console.log(getMenu(20, 1000) ); //10, 0
    console.log(getMenu(20, 2000) ); //5, 20
    
    //=====================================
// Функция hasProgress принимает на вход массив чисел
// и возвращает true, если этот массив нигде не убывает


    function hasProgress(arr) {
        for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]> arr[i+1]){
            return false;
        }
        
    }
    return true;
}
    
    console.log(hasProgress([1,5,100]));// true
    console.log(hasProgress([1,3,2]));// false

    //========================

// Функция flattenArray принимает на вход массив
// и делает его плоским

    function  flattenArra(arr) {
        let res = [];

        for (let i = 0; i< arr.length; i++) {         
         const item = arr[i];
         const isArray = item instanceof Array;
        if(!isArray){
            res.push(item);
       } else {
         res = res.concat(flattenArra(item))
       }
        
    }
    }
    console.log([1,[2,[3,4],5],6,7,8]);//[1,2,3,4,5,6,7,8]



    function flattenArray2(arr) {
        let res = [ ];
        let copyArr = [ ...arr ]
        let hasSubArrays = copyArr.some(item => item instanceof Array);
        
        while(hasSubArrays) {
            res = [ ];
            for (let i = 0; i < copyArr.length; i++) {
                res = res.concat(copyArr[i]);
            }
            copyArr = [ ...res ];
            hasSubArrays = copyArr.some(item => item instanceof Array);
        }
        
        return res;
    }
    
    console.log([1,[2,[3,4],5],6,7,8]);//[1,2,3,4,5,6,7,8]
    
//============================
// Функция mirror принимает массив и зеркально его отражает
// относительно конца

function mirror(arr) {
    const res = [...arr];
// const res = [...arr].slise(0, arr.lenght -1);
    return res.concat(arr.reverse().slice(1));
}

console.log(mirror([ ])); //[]
console.log(mirror([1,2,3])); //[1,2,3,2,1]

//================================

// Функция findCat принимает на вход массив строк
// и возвращает true, если в какой-то из строк массива есть "кот"


function findCat(arr) {
    return arr.some(str =>str.toLowerCase().includes("кот"));

}

console.log(findCat([
    "собака",
    "который день",
    "мама мыла раму"
]));