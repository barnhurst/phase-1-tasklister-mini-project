// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });
// const myForm = document.getElementById("create-task-form")

// const selectDropdown = document.createElement("select")

// myForm.children[1].insertAdjacentElement('afterend', selectDropdown)
// const highOption = document.createElement('option')
// highOption.innerText = "high"
// selectDropdown.append(highOption) 

// const mediumOption = document.createElement('option')
// mediumOption.innerText = "medium"
// selectDropdown.append(mediumOption) 

// const lowOption = document.createElement('option')
// lowOption.innerText = "low"
// selectDropdown.append(lowOption) 

// function handleDelete(e){
//   e.target.parentElement.remove()

//   function importanceColor(importance) {
//     if (importance === "high") {
//       return "red"
//     }
//     else if (importance === "medium") {
//       return "orange"
//     }
//     else (importance === "low") 
//       return "green"
    
//   }
// }
// function handleFormSubmit(e){ 
//   e.preventDefault()
//   const newTask = e.target["new-task-description"].value
//   const importanceLevel = e.target[2].value
//   const color = importanceColor(importanceLevel)
//   const taskUL = document.querySelector("#tasks")
//   const deleteBtn = document.createElement("button")
//   deleteBtn.innerText = "X"
//   deleteBtn.addEventListener("click", handleDelete)
//   const LI = document.createElement("li")
//   LI.style.color = color
//   LI.textContent = newTask
//   LI.append(deleteBtn) 
//   taskUL.appendChild(LI)
//   e.target.reset()

// } 

// myForm.addEventListener("Submit", handleFormSubmit)

// OO solution
document.addEventListener("DOMContentLoaded", () => {
  // initialize taskList class
  const taskList = new TaskList();
  //grab all the necessary DOM elements

  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //ul where new tasks will live on the DOM
  const taskUl = document.getElementById("tasks");

  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
  //attach event listeners

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    // reset form
    e.target.reset();
    renderApp();
  });

  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});