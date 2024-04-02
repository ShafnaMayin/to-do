
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var taskText = document.createElement("span");
        taskText.textContent = taskInput.value;
        li.appendChild(taskText);
  
        var completedButton = document.createElement("button");
        completedButton.style.marginRight="-420px";
        completedButton.textContent = "completed";
       
        completedButton.onclick = function () {
            completedTask(li);
        };
        li.appendChild(completedButton);
  
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };
        li.appendChild(deleteButton);
  
        taskList.appendChild(li);
        taskInput.value = "";
    }
  }
  
  function completedTask(li) {
    if (newText !== null && newText.trim() !== "") {
        taskText.textContent = newText;
    }
  }
