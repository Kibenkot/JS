// функция valueSort принимает на вход массив вида [ { value: <число> } ] и
// возвращает копию этого массива отсортированную по абсолютному значению
// value

function valueSort(arr) {
    return arr.sort(function (a,b) {
        
    const valueA = Math.abs(a.value);
    const valueB = Math.abs(b.value);
    if (valueA > valueB) {
        return 1;
    }
    if (valueA === valueB) {
        return 0;
    }
    if (valueA < valueB) {
        return -1;
    }
})
}

console.log(valueSort([{value: 4}, {value: -5}, {value: 1},]));

//===================================

// функция filterByPrice принимает массив товаров вида [ { name: <строка>, price: <число> } ]
// и параметр maxPrice. возвращает массив товаров, цена на которые не превышает
// maxPrice

function filterByprice(arr, maxPrice) {
    const res = [];
for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if(item.price<= maxPrice) {
        res.push(item);
    }
}
return res;
}


function filterByprice2(arr, maxPrice) {
    const res = [];
    arr.forEach(function (item) {
        
    if(item.price<= maxPrice) {
        res.push(item);
    }
})
return res; 
}


function filterByprice3(arr, maxPrice) {
    return arr.filter(function (item) {
        return item.price <=maxPrice;
    })
    
}


const items = [
    {name: "Spoon", price: 1},
    {name: "lion", price: 500},
    {name: "Tickets", price: 5},
]

// console.log(filterByprice(arr, maxPrice ));

console.log(filterByprice(items, 0.5 ));
console.log(filterByprice(items, 5 ));

//=========

// функция sortByLength принимает на вход массив строк arr
// и сортирует его по длине строки

function sortByLength(arr) {
    return arr.sort(function (a,b) {
        const aLength = a.length;
        const bLength = b.length;
        if (aLength > bLength) {
        return 1;}
        if (aLength === bLength) {
        return 0;}
        if (aLength < bLength) {
            return -1;}
    })
    
}

console.log(sortByLength(["z", "hggfjd", "abc", "aaaa"]));

//=========================
// функция isMediumInteger принимает на вход массив чисел
// возвращает true, если среднее арифметическое этих чисел - целое число


function isMediumInteger(arr) {
    const count = arr.reduce(function(accumulator, value){
        return accumulator + value;
    }, 0)
const med =count/ arr.length;
return med %1 === 0; // для определенияб что число целое

}

console.log(isMediumInteger([1,3,5])); // true (med = 3)
console.log(isMediumInteger([1,2])); // false (med = 1.5)

//==========================
// функция removeDuplicates принимает на вход массив целых чисел arr
// и возвращает копию arr, но все элементы которого уникальны


// function removeDuplicates(arr) {
//     const newArr = [];
//     arr.forEach(function (item) {
//         if(!res.inludes(item)){
//         res.push(item);}
//     });
//     return res;
// }
    
// console.log(removeDuplicates([2, -6, 2, 13]));
// console.log(removeDuplicates([2, -6, 2, 13, -6]));

 //=======================
// функция generateName принимает на вход массив слов и возвращает
// аббревиатуру.
 function generateName(arr) {
  let res = "";
  arr.forEach(function(item){
 const char = item.charAt(0);
 res += char.toUpperCase();

  });
  return res;  
 }


 function generateName2(arr) {

    return arr.reduce(function(accumulator, value){
     const char = value.charAt(0);
     return accumulator + char.toUpperCase();

    }, "");
      
   }

 console.log(generateName(["московский", "государственный", "университет"]));
 console.log(generateName2(["московский", "государственный", "университет"]));


 //=========================
// функция getMaxTotal принимает на вход массив целых чисел arr длины 10
// и возвращает наибольшую сумму 5-и элементов

 function getMaxTotal(arr) {
   return arr.sort(function(a,b){
    if(a>b){
        return 1;
    }
    if(a===b){
        return 0;
    }
    if(a<b){
        return -1;
    }
   }).slice(5).reduce(function(accumulator, value){
    return accumulator+value;
   }, 0);
    
 }

 console.log(getMaxTotal([1,2,3,4,5,6,7,8,9,10]));//40
console.log(getMaxTotal([-1,-2, -3,-4,-5,-6,-7,-8,-9,-10]));//-15


//==================
// функция getDiagonal принимает на вход матрицу arr 3x3
// и возвращает длину её диагонали


function getDiagonal(matrix) {
const res =[];
for (let i = 0; i < matrix.length; i++) {
    res.push(matrix[i][i])
}
const d = res.reduce(function(accumulator, value){
    return accumulator+value*value
}, 0);
return Math.pow(d, 1/2);
}

function getDiagonal2(matrix) {
    const res = matrix.map(function (item, i) {
        return item[i];
    });
    // [x,x,x]
    //i=0, item = [1,2,3]
    //[1,x,x]
    // i=1 , item = [2,3,4]
    //[1,3,x]
    // i=2 , item = [3,4,5]
    //[1,3,5]
    const d = res.reduce(function (accumulator, value) {
        return accumulator + value * value;
    }, 0);
    return Math.pow(d, 1/2);
}



console.log(getDiagonal([[1,2,3],
                         [2,3,4],
                         [3,4,5]])); //Math.sqrt(35)
 
 
  console.log(getDiagonal2([[1,2,3],
                            [2,3,4],
                            [3,4,5]])); //Math.sqrt(35)

//===================================
// функция checkOut принимает на вход массив menu с элементами вида
// { id: <строка>, price: <цена> } и массив строк order
// возвращает сумму заказа


function checkOut(menu, order) {
    const prices = [];
    order.forEach(function (item) {
        const menuItem = menu.find(function(m){
            return m.id ===item;
        });
        prices.push(menuItem.price);
    });
    return prices.reduce(function(accumulator, value) {
        return accumulator + value;
    }, 0);

}

const menu = [
    {id:"котлета", price: 50},
    {id:"компот", price: 5},
    {id:"хлеб", price: 1},
]

console.log(checkOut(menu, ["котлета", "компот", "компот"]));// 60

// ДЗ функция countWordPrice принимает на вход слово word и массив prices вида
// { letter: <буква>, price: <число> } и возвращает стоимость слова
function countWordPrice(word, prices) {

}

console.log("волк", [
    { letter: "о", price: 1 },
    { letter: "л", price: 1 },
    { letter: "к", price: 2 },
    { letter: "в", price: 5 },
]); // 9


// ДЗ функция whoTakeABook принимает на вход массив читателей, массив книг,
// массив билетов и название книги. Возвращает имя читателя, который взял
// книгу
function whoTakeABook(readers, books, records, bookName) {
   
    


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
