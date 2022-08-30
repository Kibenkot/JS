
//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

//То есть дефисы удаляются, а все слова после них получают заглавную букву.

//Примеры:
//camelize("background-color") == 'backgroundColor';
//camelize("list-style-image") == 'listStyleImage';
//camelize("-webkit-transition") == 'WebkitTransition';
//P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, 
//потом переделайте всё как нужно и методом join соедините обратно.


function camelize(str) {
   return str = str.split('-')
   .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
   .join('')
}

console.log(camelize(str='my-short-string'));
console.log(camelize(str='background-color'));
console.log(camelize(str='list-style-image'));
console.log(camelize(str='-webkit-transition'));

//2.
//Задача: написать функцию, принимающую массив чисел
//	и возвращающую сумму всех его положительных элементов и отрицательных 
//	чисел отдельно в виде нового массива

//	например функция принимает как аргумент следующий массив
//	arr = [1, -2, 3, 4, -9]

//	и должна вернуть [8, -11]
//	Сохраняйте вызов этой функции через деструктурирующее присваивание
//	Деструктурирующее присвоение означает, что возвращаемый результат функции (return) возвращает 
//	массив из двух элементов и соответственно его нужно сохранить в переменную и вывести в консоль

let arr = [1, -2, 3, 4, -9];
let arrNew =[];
function sum (arr) {
    let s = 0;
    let s1 = 0;
    for (i=0; i<arr.length; i++){
        if(arr[i] >= 0){
         s+=arr[i]
        }else{
        s1+=arr[i]
        }
    }
    return arrNew.concat(s,s1);
}
console.log(sum(arr));
