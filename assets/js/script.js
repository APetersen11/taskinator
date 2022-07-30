var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var taskFormHandler = function(event) { 
  event.preventDefault(); 
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("input[name='task-name']").value;

//package data up as an obj
var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
};
// send it as an argument to createTaskEl
createTaskEL(taskDataObj);
}

var createTaskEL = function (taskDataObj) {
      //create list item
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 

  //create div to hold task info and add to the list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  //add html content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  //add entire list item to list
  tasksToDoEl.appendChild(listItemEl); 
  }; 


  formEl.addEventListener("submit", taskFormHandler);