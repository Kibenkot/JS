//Получить все елементы из формы и сохранить их в переменные
//Form
//Firstname
//lastname
//Phone
//email
//radioButtons groups 3x
//pass 2x
//день рожденье
//mail
// checkBox
// buttons sabmit

//События вешаем на:
// submit
// radioButton (mail)

//Функции

// проверяет какая сейчас радиокнопка активна и в 
//зависимости от этого показывать или скрывать поле main

// submit Функция должна собрать все данные с формы и 
//обработать + будет запускать функцию валидации и результирующую функцию
// Вспомогательные функции
//Firstname не пустое, value
//lastname  не пустое, value
// age не пустое, int >=18
//Phone Только цифры
//email  собака, точка, 8символов
//radioButtons groups 3x  должен 1 выбран не пустое
//pass 2х мин 8 символов   2ой пороль = 1ому паролю
//день рожденье не пустое
// checkBox согласие обязательно

// Если на момент (submit)события checkBox checket то показать "Ваш аккаунт создан"

// Собрать данные и вывести в блок где они будут показаны в html тегов

    let form = document.querySelector('#form');
    let firstName = document.querySelector('#firstName');
    let lastname = document.querySelector('#lastName');
    let age = document.querySelector('#age');
    let phone = document.querySelector('#phone');
    let radioInputs = document.querySelectorAll('[name="connectType"]');
    //console.log(radioInputs);
    let contactGroup = document.querySelector ('#contact-group');
    let mailBox = document.querySelector('.mailBox');
    let mail = document.querySelector('#mail');
    let pass = document.querySelector('#pass');
    let repeatPass = document.querySelector('#repeat-pass');
    let mounth = document.querySelector('#mounth');
    let day = document.querySelector('#day');
    let checkbox = document.querySelector('#checkbox');
    let checkboxAgree = document.querySelector('#checkboxAgree');
    let email = document.querySelector('#email');

    form.addEventListener('submit', submitHandler);
    contactGroup.addEventListener('click', chooseContact);

    age.addEventListener('change', changeAge );









    function submitHandler(event) {    
         event.preventDefault();  // По умолчанию отключаем дефолтное событие
         if (formValided()) {
        showMessage(checkbox, 'account created');
       } 
    }












//Блоки кода семантические
function checkAge(element) { // проверяем соответствие требованием age
    if(checkEmpty(element)){ // проверяем что age не пустое
        if(checkDigit(element)){ // проверяем что age число
return checkLarge(element,18); // проверяем что age > 18

        }
    }
}

function checkDate(element1, element2) { //проверка на пустоту дату дня рождения
    let flag = true;
   if( !checkEmpty(element1)){
    flag = false;
   }
    if(!checkEmpty(element2)) {
        flag = false;
    } 
        return flag;
}

function checkName(element1, element2) { // проверка на пустоту имя и фамилию
    let flag = true;
   if( !checkEmpty(element1)){
     flag = false;
   }
    if(!checkEmpty(element2)) {
        flag = false;
    } 
        return flag;   
}


function checkPhone(element) { // проверяем введенный номер телефона
    if (checkEmpty(element)) { // проверяем что Phone не пустое
        return checkDigit(element); //проверяем что Phone число
    }
}

function checkEmail(element) { // проверяем введенный номер Email
    if (checkEmpty(element)) { // проверяем что Email не пустое
     return checkIncludes(element, '@'); //проверяем что Email содержит @
    }
}

function checkPassword(password, duoblepassword) { // Проверка соответствия пароллей
    let flag = true;
    if( !checkEmpty(password)){ //проверяем что поле не пустое для password
        flag = false;
    }
    if(!checkEmpty(duoblepassword)) { //проверяем что поле не пустое для duoblepassword
        flag = false;
    }    
    if (flag) {
        if (!checkClone(password, duoblepassword)) { //проверяем равенство password и duoblepassword
            flag = false;
        }       
    }  
    return flag;
}

function formValided() {
       let nameValid = checkName(firstName, lastname);
       let ageValid =checkAge(age);
       let phoneValid =checkPhone(phone);
       let emailValid =checkEmail(email);

       let passwordValid =checkPassword(pass, repeatPass);
       let dateValid =checkDate(mounth, day);
       let checkboxValid =checkChecked(checkboxAgree);
       
        let radioValid;

        let radioActive = checkGroupisChecked(radioInputs, contactGroup); 
        console.log(radioActive);
        if (radioActive && radioActive.value === "mail") {
            radioValid = checkEmpty(mail);
        }
        if (nameValid || ageValid || phoneValid || emailValid || passwordValid || dateValid || checkboxValid ||  radioValid ) {
            return true;
        }
          
        
}

function changeAge(event) {
    checkAge(this);
}
















//Вспомогательные функции:

// function chekEmpty(str) { 
//     if (str === "") {
//         return true;
//     }
//     return false;
// }

    function checkEmpty(element) { 
        if (!element.value) {
            element.classList.add('error');
            console.log(`error, element # ${element.id} is empty`);
        }else{
            element.classList.remove('error');
            return true;
        }
    
    }

//Возраст
        function checkDigit(element) {
            if( isNaN(Number(element.value) )){
                element.classList.add("error");
                console.log(`error, element # ${element.id} is not digit`);
            }else{
                element.classList.remove('error');
                return true;
            }
            
        }

    function checkLarge(element, checkNum) {
        if(Number(element.value) < checkNum){
            element.classList.add("error")
            console.log(`error, element # ${element.id} <${checkNum}`);
        }else{
            element.classList.remove('error');
            return true;
        }
    }

//тел ним

    function chooseContact(event) {
        if(event.target.name === "connectType"){
        console.log(event.target);
        if (event.target.value === "mail") {

            mailBox.classList.remove("hidden");
        }else{
            mailBox.classList.add("hidden");
            return true;
        }
    }
    }

    function checkGroupisChecked(elements, parentElements) {
            for (const element of elements) {
                if (element.checked) {
                    contactGroup.classList.remove('error');
                    return element;
            }
        }
        contactGroup.classList.add('error');
        console.log(`error, child elements # ${parentElements.id} is not checked `);
    }

    function checkIncludes(element, simbol) {
       if (element.value.includes(simbol)) {
        element.classList.remove('error');
         return true;
       } 
       element.classList.add('error');
       console.log(`error, element # ${element.id} is not includes ${simbol} `);
    }

    function checkClone(password, duoblepassword) {
        if (password.value === duoblepassword.value) {
            password.classList.remove('error');
            duoblepassword.classList.remove('error');
            return true;
        }
        password.classList.add('error');
        duoblepassword.classList.add('error');
        console.log(`error, element # ${password.id} is not === # ${duoblepassword.id} `);
    }

   
    
    function checkChecked(checkBox) {
        if (checkBox.checked) {
            checkBox.classList.remove('error');
            return true;
        }
        checkBox.classList.add('error');
        console.log(`Error, element # ${checkBox} is not checked`);
    }
    
    function showMessage(checkBox, message) {
        if (checkBox.checked) {
       alert(message);          
        }
    }