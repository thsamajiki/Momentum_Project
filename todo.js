const toDoForm = document.querySelector('.js-toDoForm'),
      toDoInput = toDoForm.querySelector('input'),
	  toDoList = document.querySelector('.js-toDoList'),
	  const TODOS_LS = 'toDos';

let toDos=[]; //empty array to save todo

function deletToDo(event) {
	const btn = event.target,
		  li = btn.parentNode;
	toDoList.removeChild(li);
	
	const cleanToDos = toDos.filter(function(toDo) {
		return toDo.id !== parseInt(li.id);
	});
	
	toDos = cleanToDos;
	
	saveToDos();
}

function saveToDos() {
	localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function printToDo(text) {
	const li = document.createElement("li"),
		  delBtn = document.createElement('button'),
		  span = document.createElement('span'),
		  newId = toDos.length+1;
	
	delBtn.innerText = "X";
	delBtn.addEventListener("click",deletToDo);
	span.innerText = text;
	li.appendChild(span);
	li.appendChild(delBtn);
	li.id = newId;
	toDoList.appendChild(li);
	
	const toDoObj = {
		text: text,
		id: newId //array's length
	};
	toDos.push(toDoObj);
	saveToDos();
}

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = toDoInput.value;
	
	printToDo(currentValue);
	toDoInput.value = "";
}

function loadToDos() {
	const loadedToDos = localStorage.getItem(TODOS_LS);
	
	if(loadedToDos! == null){
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function(toDo) {
			printToDo(toDo.text);
		});
	}
}

function init() {
	loadToDos();
	toDoForm.addEventListener('submit',handleSubmit);
};

init();
