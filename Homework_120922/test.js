let responses_1 = document.querySelectorAll('[name="responses_1"]');
let responses_2 = document.querySelectorAll('[name="responses_2"]');
let responses_3 = document.querySelectorAll('[name="responses_3"]');
let nextButton_1 = document.querySelector('#next_1');
let nextButton_2 = document.querySelector('#next_2');
let nextButton_3 = document.querySelector('#next_3');
let parent_1 = document.querySelector('#group_1');
let parent_2 = document.querySelector('#group_2');
let parent_3 = document.querySelector('#group_3');
let parents = document.querySelectorAll('.parent');

parent_1.responses = responses_1;
parent_2.responses = responses_2;
parent_3.responses = responses_3;

let chooseResponses = [];

console.log(parent_1);

// nextButton_1.addEventListener('click', () => nextHandler(responses_1));
// nextButton_2.addEventListener('click', nextHandler);
// nextButton_3.addEventListener('click', nextHandler);

// function nextHandler(responses) {
//     console.log('вызов')
//     let element = checkResponses(responses);
//     if(element) {
//         console.log('element----', element)
//         chooseResponses.push(element.value);
//     }
//     console.log(chooseResponses);
// }

nextButton_1.addEventListener('click', nextHandler);
nextButton_2.addEventListener('click', nextHandler);
nextButton_3.addEventListener('click', nextHandler);

function nextHandler(event) {
    console.log(event.target);
    if(event.target == nextButton_1){
         console.log('nextButton_1')
        let elementEvent = checkResponses(responses_1);
        if(elementEvent) {
            chooseResponses.push(elementEvent.value);
            switchNextPage(parents);
        }
    } else if(event.target == nextButton_2){
        console.log('nextButton_2')
        let elementEvent = checkResponses(responses_2);
        if(elementEvent) {
            chooseResponses.push(elementEvent.value);
            switchNextPage(parents);
        }

    } else if(event.target == nextButton_3){
        console.log('nextButton_3')
        let elementEvent = checkResponses(responses_3);
        if(elementEvent) {
            chooseResponses.push(elementEvent.value);
            switchNextPage(parents);
        }
    }
    // console.log(chooseResponses);
    
}

function checkResponses(elements) {
    for(let element of elements) {
        if(element.checked) {
            return element;  
        } 
    }
    alert('Пожалуйста, выберите один из вариантов ответов.');
}

function switchNextPage(boxes) {
    let nextPage;
    for(const box of boxes) { // function incrementPage
        if(box.classList.contains("show")) {
        // console.log(box.dataset.wrapper);
        let currentPage = box.dataset.wrapper;
        nextPage = Number(currentPage) + 1;
        // console.log(nextPage);
        box.classList.remove("show");
        }
    }
    for(const box2 of boxes) { // function selectnextPage
        console.log('boxes.length', boxes.length);
        if(nextPage <= boxes.length) {
            if(box2.dataset.wrapper == String(nextPage)) {
                box2.classList.add("show");
            } 
        } else { 
            const correctAnswers = chooseResponses.filter((response) => response === 'yes');
            console.log(chooseResponses);
            alert(`You gave ${correctAnswers.length} answer${correctAnswers.length < 2 ? '' : 's'}`);
            return;
        }        
    } 
}
