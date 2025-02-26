document.addEventListener("DOMContentLoaded", () => {
    let taskList = document.getElementById("taskList");
    let addTaskButton = document.getElementById("add-task-button");
    let primogemCount = document.getElementById("primo-count"); // Fixed ID to match HTML
    let completedCount = document.getElementById("completedCount");
    let totalCount = document.getElementById("totalCount");

    let primogems = 0;
    let totalTasks = 0;
    let completedTasks = 0;

    addTaskButton.addEventListener("click", () => {
        let taskText = prompt("Enter your new commission:");
    
        if (taskText && taskText.trim() !== "") {
            let li = document.createElement("li");
            li.textContent = taskText;
            li.classList.add("commission"); // add class to commission

            
            let checkmark = document.createElement("img"); //checkmark complete button
            checkmark.src = "images/checkmark.png"; //checkmark img src
            checkmark.alt = "Complete";
            checkmark.classList.add("checkmark-icon"); //add class to checkmark

            checkmark.addEventListener("click", () => {
                if (!li.classList.contains("completed")) {
                    li.classList.add("completed");
                    checkmark.src = "images/empty-check.png"; // Change to completed image
                    checkmark.alt = "Completed"; // Update alt text
                    checkmark.style.cursor = "default"; // Optionally change cursor to indicate it's not clickable anymore
            
                    primogems += 20;  // Add 20 primogems
                    primogemCount.textContent = primogems;
            
                    completedTasks++; 
                    completedCount.textContent = completedTasks; 
            
                    taskList.appendChild(li);
                }
            });       

            
            li.appendChild(checkmark);
            taskList.appendChild(li);

            totalTasks++; 
            totalCount.textContent = totalTasks; 
        }
    });
});
