let list = document.querySelector('.list'); // получили список дел
let todoForm = document.querySelector('.todoForm'); // получили форму для ввода нового дела
let todoInput = document.querySelector('.todoInput'); // получили поле ввода текста нового дела

todoForm.addEventListener('submit', todoHandler); // повесили прослушку на форме (submit event)

function todoHandler(event) { // функция обработчик события submit
	event.preventDefault(); // отключаем дефолтное поведение формы

	const todoText = todoInput.value; // получили текст из инпута, который ввел user
	if (validateTodo(todoText)) { // функция валидации И валидирует И возвращает true, если валидно поле
		addTodo(todoText); // создаем todo И добавляем (addTodo --> createTodo)
	} 
}


function validateTodo(text) {
	if (text) {
		todoInput.classList.remove('error'); // удаляем класс ошибки если текст есть
		todoInput.value = ''; // стираем value у input
		return true;
	} else {
		todoInput.classList.add('error'); // добавляем класс ошибки если input пустой
	}
}

function addTodo(text) {
	const newTodo = createTodo(text); // создали новую тудушку с этим текстом
	list.prepend(newTodo); // ДОБАВЛЯЕМ В HTML! вКудаДобавить.prepend(чтоДобавить)
}


function createTodo(text) { // получаем текст
	const todo = document.createElement('li'); // создаем виртуальный тег <li>
	todo.textContent = text; // в тег li помещаем текст
	todo.dataset.id = Math.random(); // добавляем id при создании элемента
	return todo // возвращем тег уже с текстом готовый к вставке в html
}

