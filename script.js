// Exercise 2 - Task Board
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: add a task on submit (no reload, clear + focus the input, "Please type a task" error)

// Step 2: click a task to toggle the "done" class

// Step 3: delete with the x button (one listener on the ul - event delegation)

// Step 4: "tasks left" counter

// Step 5: filters (All / Active / Done)

// Step 6: Clear completed

// Step 7: show the empty message only when there are no tasks

// Bonus: block duplicate tasks ("This task already exists")

const form = document.querySelector('#task-form');
const error = document.querySelector("#error");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const select = document.querySelector("#priority-select");

// אירועים לאלמנטים
form.addEventListener("submit", addTask)

// פונקציות
// הוספת משימה
function addTask(event){
    event.preventDefault();
    if (!taskInput.value.trim()){
        error.textContent = 'Please type a task';
        error.classList.remove("hidden");
    }
    else{
        createTask();
        error.classList.add("hidden");
        taskInput.value = "";
        taskInput.focus();
    }
}









// יצירת משימה
function createTask(){
    let task = document.createElement("li");
    task.classList.add("priority-" + select.value);
    let span = document.createElement("span");
    span.classList.add("text");
    span.textContent = taskInput.value;
    let button = document.createElement("button")
    button.classList.add("delete");
    button.textContent = 'x';
    task.appendChild(span);
    task.appendChild(button)
    taskList.appendChild(task)
}