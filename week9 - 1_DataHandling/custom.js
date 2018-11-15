var data = [
	{
		id: 1497141891479,
		task: "Love your music",
		done: false
	},
	{
		id: 1497141913701,
		task: "Great Show Last Week",
		done: false
	},
	{
		id: 1497141937545,
		task: "Lorem ipsum",
		done: true
	}
];

// Important Elements - Cached as variables
//question1: what are these three items from html?
var todosEl = document.querySelector('#todos');
var inputEl = document.querySelector('#todoInput');
var completedEl = document.querySelector('#counter');

function initializeTodos() {
	updateTodoItems();
}

//question2: write out the html syntax populated here.
function updateTodoItems() {
	var todosHTML = "";

	//loop through all items
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  //embed expressions
	for (todo of data) {
		if (todo.done) {
			todosHTML += `<li id="${ todo.id }" class="complete" onclick="toggleComplete(event)">`;
      //todosHTML += '<li id="+ "todo.id"+'class="complete" onclick="toggleComplete(event)">';
			todosHTML += `<i class="fa fa-check-circle"></i>`; // Font-awesome
		} else {
			todosHTML += `<li id="${ todo.id }" onclick="toggleComplete(event)">`;
			todosHTML += `<i class="fa fa-circle"></i>`; // Font-awesome
		}
		todosHTML += `${ todo.task }`;
		todosHTML += `</li>`;
	}

	//if "data" is empty
	if (todosHTML === "") {
		todosHTML = "<li>Nothing todo...</li>";
	}

	//fill string into HTML
	todosEl.innerHTML = todosHTML;
}



function addTodoItem() {
	//make sure the input value is not empty, otherwise just return
	if (inputEl.value==="") {
		alert("list content is empty");
		return;
	}

	//create a new object and have it pushed into [data]
	var newTodo = {
		id: Date.now()
	};

	newTodo.task = inputEl.value;
	newTodo.done = false;

	data.push(newTodo);

	//update the list
	updateTodoItems();
	//make input value ""
  inputEl.value = "";
}

function toggleComplete(event) {
	var todoID = parseInt(event.currentTarget.id);
	for(item of data) {
		if(item.id == todoID) {
			item.done = !item.done;
		}
	}

	updateTodoItems();
}

function removeTodoItem(event) {
	var incompleteTodos = data.filter(function(todo){
	  return todo.done === false;
	});
	data = incompleteTodos;
	updateTodoItems();
}

// PARTIAL FUNCTIONS
function markAllComplete() {
  for(item of data){
    item.done = true;
  }
  updateTodoItems();
	// Add a button to your HTML that will be used to mark all todos as complete.
	// Modify this incomplete function so that it:
	// 1) Changes all todo objects in data as done:true
	// 2) Updates the visual display of the todo items in the todo app
	// 3) Call this function in the appropriate place(s) (somwhere else in this code)
}


// START THE APPLICATION
initializeTodos();
