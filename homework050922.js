//Создайте объект berlin, укажите у него свойства: 
//name (название города, строка) со значением "Берлин",
//population (населенность города, число) со значением 3645000,
//foundingDate (дата основания, число) 1237,
//currentDate (текущий год, число) 2022,

//Аналогично создайте объект для Парижа (население 6млн, дата основания(до н.э.) -53 (отрицательное число))

//Далее создайте в каждом объекте свойство age и присвойте ему как значение, функцию, то есть это будет метод.

//Этот метод не будет принимать никаких аргументов, но будет возвращать возраст города. То есть функция, которая будет хранится в свойстве age будет обращаться к this объекта, вычислять а затем возвращать (return) результат вычисления для конкретного объекта (текущий год минус год основания).

//Выводите результат вызова метода для каждого объекта в консоль.
//console.log(berlin.age())
//console.log(paris.age())

//Удалите из обоих объектов метод age. И вместо этого объявите ту же функцию снаружи объектов просто как function getAge(){…}
//затем присвойте каждому объекту эту функцию отдельно, таким образом:
//berlin.age = getAge; 

//(!) Обратите внимание, что this всё ещё работает корректно в каждом конкретном методе объекта. Это происходит потому, что функция определяет свой контекст(this) в момент вызова, а вызывать мы их будем обращаясь к методу объекта. 


//Напишите ещё одну функцию(название придумайте сами) и добавьте в неё один параметр(аргумент функции):
//число - свой возраст

//Реализуйте тело функции так, чтобы она возвращала строку, которая будет сообщать что этот конкретный город старше меня и на сколько лет.
//Присвойте эту функцию как метод в оба объекта, придумайте ему название сами.

//Например мне 31 год, я вызываю метод у Парижа. 
//Результат вызова должен быть таким:
//Париж старше меня на 2044

//Если же я вызову этот метод у Берлина, то результат должен быть таким:
//Берлин старше меня на 1891

const berlin = {
    name: 'Берлин',
    population: 3645000,
    foundingDate: 1237,
    currentDate: 2022,
   // age: function () {
   //     return this.currentDate - this.foundingDate
   // }
}



const paris = {
    name: 'Париж',
    population: 6000000,
    foundingDate: -53,
    currentDate: 2022,
 //   age: function () {
 //       return this.currentDate - this.foundingDate
 //   }
}

function getAge(){
    return this.currentDate - this.foundingDate;
}

berlin.age = getAge;
paris.age = getAge;

console.log(berlin.age())
console.log(paris.age())

function older(myAge) {
    let olderOn = this.age() - myAge;

        function endYear() {
          let arrOlderOn = String(olderOn); //преобразовали в строку
            //console.log(arrOlderOn); // проверка для себя
            let lastOlderOn = arrOlderOn.slice(-1); // получили последний элемент строки
           // console.log( lastOlderOn); // проверка для себя
            if(lastOlderOn === '1') { // если последний элемент строки 1, то выводить год
               return end = 'год';
            } else if(lastOlderOn  === '2' || lastOlderOn  === '3' || lastOlderOn  === '4') {
               return end = 'года'; // если последний элемент строки 2 или 3 или 4, то выводить года
            } else {
               return end = 'лет'; // если последний элемент строки 4, то выводить лет
            }
        }
  return console.log (`${this.name} старше меня на ${olderOn} ${endYear(this)}`);
    }

berlin.olderMe = older;
paris.olderMe = older;

console.log(berlin.olderMe(42));
console.log(paris.olderMe(42));
    
