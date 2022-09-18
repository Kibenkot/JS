// Создать переменные 2 input на ввод чисел 1 на результат
// 4 кнопри на мат операции 
// ИТОГО 7 елементов для 7 елементов HTML
// Вешаем прослушку на 4 кнопки ('click')
// К каждому событию привязываем функцию
// которая в зависимости от кнопки будет мат операцию совершать
//Принимая или используя input данных и вывщдя результат в поле результата

    let firstNum = document.querySelector('#firstNum');
    let secondNum = document.querySelector('#secondNum');
    let resultNum = document.querySelector('#resultNum');

    let plusButton = document.querySelector('#plusButton');
    let minusButton = document.querySelector('#minusButton');
    let divideButton = document.querySelector('#divideButton');
    let multiplyButton = document.querySelector('#multiplyButton');

    let clearButton = document.querySelector('#clearButton');

    plusButton.addEventListener('click', ()=>calc("+"));
    minusButton.addEventListener('click', ()=>calc("-"));
    divideButton.addEventListener('click', ()=>calc("/"));
    multiplyButton.addEventListener('click', ()=>calc("*"));

    clearButton.addEventListener('click', clearText);

    function calc(operator, event) {
        let num1 = Number(firstNum.value);
        let num2 = Number(secondNum.value);

        resultNum.value = operator === "+" 
        ? num1 + num2 
        :  operator === "-"
        ? num1 - num2 
        :  operator === "/"
        ? num1 / num2 
        : num1 * num2;
        console.log(operator);
    }

    function clearText(event) {
        firstNum.value = "";
        secondNum.value = "";
        resultNum.value = "";
    }


// function addNumbers(operator) {
//     return function (event) {
//         console.log(operator);
//     }
//     //let result;
//     let num1 = Number(firstNum.value);
//     let num2 = Number(secondNum.value);
//     resultNum.value = num1 + num2;   
// }

// function subtractNumbers(event) {
//     //let result;
//     let num1 = Number(firstNum.value);
//     let num2 = Number(secondNum.value);
//     resultNum.value = num1 - num2;
    
// }

// function divideNumbers(event) {
//     //let result;
//     let num1 = Number(firstNum.value);
//     let num2 = Number(secondNum.value);
//     resultNum.value = num1 / num2;
// }

// function multiplyingNumbers(event) {
//     //let result;
//     let num1 = Number(firstNum.value);
//     let num2 = Number(secondNum.value);
//     resultNum.value = num1 * num2;
// }



// const EventHandlerOld = function( param ){
//     return function( event ){
//       // Есть доступ и к обьекту event и к param
//       // Do Smsng
//     }
// }
// btn.addEventListener('click', EventHandlerOld( true ) );

// function name(params) {
//     return function (event) {
        
//     }
// }