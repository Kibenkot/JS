/*console.log(message)*/
let message
console.log(message)


message = 'Hello';
message = '123';
message = 'word';
console.log(message)

message = 'Katty'
console.log(message)

let user ='John', //Способ обьявления переменных
    age = 25, 
    hello = 'Hello'; 

    console.log(user, age, hello)

    const myBirthday = '18.07.1999'; //константа изменять нельзя
    console.log(myBirthday);

    var messageVar; 

    console.log(messageVar);

    let messageLet = 'Hgggg';
    var messageVar ='Kkkk';


    let user1;
    let notResponce = null;
    let obj ={};
    const messageConst ='Zello';
    let isLogin = false;
    const pi = 3.15;

    console.log(typeof pi);

    console.log(Boolean(obj));
    


    // Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert, console.log (должна показать «Джон»).

let admin;
let name;

name = 'John';

admin = name;
alert = name;
console.log(name);


// Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// Создайте переменную для хранения имени текущего посетителя сайта. 
// Как бы вы назвали такую переменную?

let ourPlanetName ='Earth';
let currentUserName = 'Tanja';

// Какие буквы (заглавные или строчные) использовать для имён констант?
// Рассмотрим следующий код:

// const birthday = '18.04.1982';

// const age = someCode(birthday);
// У нас есть константа birthday, а также age, 
// которая вычисляется при помощи некоторого кода, 
// используя значение из birthday 
// (в данном случае детали не имеют значения, поэтому код не рассматривается).

// Можно ли использовать заглавные буквы для имени birthday? 
// А для age? Или одновременно для обеих переменных?

// const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?

// const AGE = someCode(BIRTHDAY); // а здесь?


const BIRTHDAY = '18.04.1982'; // использовать большие буквы
//const age = someCode(birthday);

______________________________________________________

console.log('1<2', 1 < 2);
console.log('1> 2', 1 > 2);
console.log('1!= 2', 1 != 2);

let a = 'a';
let b = 'b'

console.log('a !=b', a != b);
console.log('catamaram'> 'cata'); // так делать не сдедуут


console.log('2'> 1); //строка преобразуется автоматически в число
console.log('01' == 1); 

console.log(''== false); //true
console.log(''=== false); //false
console.log(''!== false); //true

let number = -1;
let str = '1';
if (number === str) {
    console.log(number + str);
} else {
    console.log(number + Number(str));
}

console.log (!!'a');

let currentYear = '2022';
let year = '2024';

if (currentYear === year){
    console.log ('Вы в текущем годя')
} else if (currentYear > year){
    console.log ('Вы в прощлои')
} else {console.log('Вы в будующем')}



