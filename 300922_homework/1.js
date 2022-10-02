// ДЗ Функция randomPhone возвращает случайно сгенерированный номер телефона в формате "ххх-ххх", где х - цифра от 0 до 9. 
//    Номер телефона не может начинаться с 0.

// 1.Вариант решения
function randomPhone() { 
    let phone =[];
    while(phone.length <=5){ 
        const x = Math.floor((Math.random()*10));
        phone.push(x);
     if(phone[0] == 0){
        phone.shift();
        }
     } 
        phone = phone.join("");
        return `${phone.slice(0,3)}-${phone.slice(3)}`
 }

 console.log(randomPhone());

 // 2.Вариант решения
    function randomPhone1() { 
      const x = String(Math.random());
         let phone = x.slice(2);
         if(phone[0]==0){
            phone= phone.slice(1);
         }
            phone = phone.slice(0,6);
            return `${phone.slice(0,3)}-${phone.slice(3)}`
    }

 console.log(randomPhone1());


 // ДЗ Функция isCube принимает на вход число a и возвращает true, если а - это куб какого-то числа

  // 1 Вариант решения
function isCube(a) {
    if(Math.cbrt(a) % 1 === 0){
                 return true;
    }
         return false;
}
 console.log(isCube(9));
 console.log(isCube(1));
 console.log(isCube(8));
 console.log(isCube(0));


 // 2 Вариант решения
 function isCube1(a) {
//  1 < x^3 < a
   for(let x = 0; Math.pow(x,3)<= a; x++){
      if(Math.pow(x,3) === a){
           return true;
         }
     }
      return false;
  }
console.log(isCube1(9));
console.log(isCube1(1));
console.log(isCube1(8));
console.log(isCube1(0));


// ДЗ Функция triangleSquare принимает стороны треугольника a, b и c и возвращает его площадь. Для расчёта площади
//    можно воспользоваться формулой Герона.

function triangleSquare(a,b,c) {
    if(((a+b)>c) && ((a+c)>b) && ((b+c)>a)){
    let p = (a+b+c)/2;
    let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return s.toFixed(2);
    }
    return `Заданные параметры не соответствуют требованиям!`;
    }

console.log(triangleSquare(2,3,5)); 
console.log(triangleSquare(2,5,6));
console.log(triangleSquare(5,5,5)); 
console.log(triangleSquare(9,11,16));

// ДЗ Функция getDistance принимает x1, y1, x2, y2 (координаты двух точек в Евклидовом пространстве) и возвращает
//    расстояние между ними

function getDistance(x1, y1, x2, y2) {
    let d = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
    return d.toFixed(2);
}

console.log(getDistance(1, 2, 3, 4));
console.log(getDistance(1, 1, 2, 2));