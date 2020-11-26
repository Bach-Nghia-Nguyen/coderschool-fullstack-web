function addTask(taskValue) {
  var task = document.createElement("li");
  task.classList.add("task");
  task.classList.add("fill");
  task.setAttribute("draggable", "true");
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);

  var taskContent = document.createElement("div");
  taskContent.classList.add("task-content");
  taskContent.innerText = taskValue;

  var edit = document.createElement("div");
  edit.classList.add("edit-task");

  var trash = document.createElement("div");
  trash.classList.add("trash");
  // Add a Fontawesome icon to replace the "X" of the remove button.
  trash.innerHTML = '<i class="far fa-times-circle"></i>';
  trash.addEventListener("click", removeTask);

  task.appendChild(taskContent);
  task.appendChild(trash);

  var tasks = document.getElementById("tasks-added");
  tasks.insertBefore(task, tasks.childNodes[0]);
}

function removeTask(event) {
  // event represents the remove button
  // Access the <ul> element by moving 3 levels up
  var tasks = event.target.parentNode.parentNode.parentNode;
  // Access the <li> element by moving 2 levels up
  var task = event.target.parentNode.parentNode;
  tasks.removeChild(task);
}

// DRAG & DROP

// A global variable to store the selected task
var task;

function dragStart(event) {
  event.target.className += " hold";
  task = event.target;
  setTimeout(() => (event.target.className = "invisible"), 0);
}

function dragEnd(event) {
  event.target.className = "task fill";
}

function dragEnter(event) {
  event.preventDefault();
  if (event.target.className === "column dropzone") {
    event.target.className += " hovered";
  }
}

function dragOver(event) {
  event.preventDefault();
}

function dragLeave(event) {
  if (event.target.className === "column dropzone hovered") {
    event.target.className = "column dropzone";
  }
}

function dragDrop(event) {
  if (event.target.className === "column dropzone hovered") {
    event.target.className = "column dropzone";
  }
  // event represents the column
  // Add the task to the second element of the column which is the <ul> element (the first one is a <h1>)
  event.target.childNodes[1].append(task);
}

var dropzones = document.querySelectorAll(".dropzone");

for (let index = 0; index < dropzones.length; index++) {
  const dropzone = dropzones[index];
  dropzone.addEventListener("dragenter", dragEnter);
  dropzone.addEventListener("dragover", dragOver);
  dropzone.addEventListener("dragleave", dragLeave);
  dropzone.addEventListener("drop", dragDrop);
}

document.getElementById("add-task").addEventListener("click", function () {
  var taskValue = document.getElementById("task-value").value;
  if (taskValue) addTask(taskValue);
  document.getElementById("task-value").value = "";
});

// Click enter to add task
document.getElementById("task-value").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    var taskValue = document.getElementById("task-value").value;
    if (taskValue) addTask(taskValue);
    document.getElementById("task-value").value = "";
  }
});

// Edit task column
