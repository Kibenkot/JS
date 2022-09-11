// Создайте input type text и три кнопки
//кнопки должны иметь следующий функционал (должны запускать соотвествующие фунции)
//1. Кнопка "Очистить input" (удалять содержимое value тега input)
//2. Кнопка заблокировать инпут (disabled setAttribute)
//3. Кнопка разблокировать инпут (disabled removeAttribute)
//или input.disabled = true/false;

let resetValue = document.querySelector('.button_remove');
let setDisabled = document.querySelector('.button_disable');
let removeDisabled = document.querySelector('.button_remove');
let input = document.querySelector('.input');

resetValue.addEventListener('click', resetInput);
function resetInput() {
   input.value = ""; 
}

setDisabled.addEventListener('click', disabledSetInput);
function disabledSetInput() {
input.setAttribute('disabled', true);
}

removeDisabled.addEventListener('click', disabledRemoveInput);
function disabledRemoveInput() {
input.removeAttribute('disabled');
}


//Создайте в HTML два текстовых инпута и кнопку
//Напишите функцию, которая будет по нажатию на кнопку
//менять содержимое инпутов (value) местами

let inputHallo = document.querySelector('.input_1');
let inputBye = document.querySelector('.input_2');
let buttonReplace = document.querySelector('.button_replace');

buttonReplace.addEventListener('click', replaceValueInput );
function replaceValueInput() {
let inputHalloValue = inputHallo.value;
inputHallo.value = inputBye.value;
inputBye.value = inputHalloValue;
}