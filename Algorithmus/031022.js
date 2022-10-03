// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться 
// на k-й позиции в конечном отсортированном массиве.
// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256
// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 7-й элемент этого массива равен 256.// 6 элемент, тк индескы начинаются с 0

let arr1 = [100, 112, 256, 349, 770];
let arr2 = [72, 86, 113, 119, 265, 445, 892];

let sortedArr = [];

function merge(arr1, arr2) {
    while (arr1.length && arr2.length) {
        if(arr1[0] < arr2[0]){
            sortedArr.push(arr1.shift())
        } else{
            sortedArr.push(arr2.shift())
        }
    }
    return [...sortedArr, ...arr1, ...arr2]
}

console.log(merge(arr1, arr2));

function searchNumber(sortedArr) {
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === 256) {
            return `${i} elemenm in the array is equalo to ${sortedArr[i]}`;
        }
    }

}
console.log(searchNumber(sortedArr));


// function mergeSort(arr) {
//      if(arr.length <=1);
//       return arr;

//     let mid = Math.floor((arr.length+1)/2);

//     let arr1 = mergeSort(arr.slice(0, mid));
//     let arr2 = mergeSort(arr.slice(mid));
//     return merge(arr1, arr2);
//  }


