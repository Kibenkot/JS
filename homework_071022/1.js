// ДЗ Функция cut принимает на вход строку, режет её посередине 
// и возвращает первую половину. Если в строке нечётное число
// символов, то округлить в меньшую сторону

//Вариант 1
function cut(str) {
    const arr = str.split("");
    const arr2 = [];
    for (let i = 0; i < Math.floor(arr.length/2); i++){
        arr2[i]= arr[i];
    }
 return arr2.join("");
}

console.log(cut("Hello World !"));
console.log(cut("Homework"));

//Вариант 2
function cut1(str) {
    let newStr = str.slice(0, Math.floor(str.length/2));
    return newStr;
}

console.log(cut1("Hello World !"));
console.log(cut1("Homework"));


// ДЗ Функция kingSaid принимает на вход строку str и добавляет к 
// её началу фразу "Король сказал: ". Если строка уже начинается
// с фразы "Король сказал: ", то ничего добавлять не надо.
// пример: kingSaid("хочу банан") -> "Король сказал: хочу банан"
//         kingSaid("Король сказал: я устал, я ухожу") -> "Король сказал: я устал, я ухожу"

function kingSaid(str) {
    if(! str.startsWith("Король сказал: ")){
        //return `Король сказал: ${str}`;
        return `Король сказал:`.concat(str);
    }else{
        return str;
    }

}

console.log(kingSaid("хочу банан"));
console.log(kingSaid("Король сказал: я устал, я ухожу"));


// ДЗ Функция isItFridayToday возвращает строку "Пятница будет 
// через N дней", "Пятница уже завтра!", "Ура, сегодня пятница!" 
// или "Пятница была вчера :(" в зависимости от текущего дня недели

function isItFridayToday() {
    const currentDay =new Date().getDay();
   if(currentDay === 5){
    return `Ура, сегодня пятница!`;
   }
   if(currentDay === 4){
    return `Пятница уже завтра!`;
   }
   if(currentDay === 6){
    return `Пятница была вчера`;
   }
   if( currentDay === 1 || currentDay === 2 || currentDay === 3){
    return `Пятница будет через ${5-currentDay} дня`;
   }
    if(currentDay === 0){
        return `Пятница будет через ${5-currentDay} дней`;
    }

}

console.log(isItFridayToday());

// remainder = 0  => `Пятница будет через 5 дней` // 5 -0 = 5
// remainder = 1  => `Пятница будет через 4 дня` // 5 -1 = 4
// remainder = 2  => `Пятница будет через 3 дня` // 5 -2 = 3
// remainder = 3  => `Пятница будет через 2 дня` // 5 - 3 =2
// remainder = 4  => `Пятница уже завтра!`
// remainder = 5  => `Ура, сегодня пятница!`
//remainder = 6  => `Пятница была вчера`

// const d= new Date().getDay();
// console.log(d);

