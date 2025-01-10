document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    // Add Task
    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        } else {
            alert("Please enter a task!");
        }
    });

    // Add Task to List
    function addTask(task) {
        const li = document.createElement("li");

        // Task Text
        const taskText = document.createElement("span");
        taskText.textContent = task;
        taskText.addEventListener("click", () => {
            taskText.parentElement.classList.toggle("completed");
        });

        // Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        // Append Task and Button to List Item
        li.appendChild(taskText);
        li.appendChild(deleteButton);

        // Append List Item to Task List
        taskList.appendChild(li);
    }
});
