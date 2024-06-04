// Get references to DOM elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const editModal = document.getElementById("updateModal");
const editInput = document.getElementById("edit-input");
let editIndex = null;

// Function to add a new task
function addTask() {
    // Check if input is empty
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item
        let li = document.createElement("li");
        // Set inner HTML of the list item with task content and action symbols
        li.innerHTML = `<span>${inputBox.value}</span><span class="symbol" style="display: flex; align-items: center;">
        <span style="color: green; cursor: pointer;" onclick="markAsDone(event)">&#10003;</span>
        <span style="color: blue; cursor: pointer; margin-left: 5px;" onclick="openEditModal(event)">Edit</span>
        <span style="color: red; cursor: pointer; margin-left: 5px;" onclick="deleteTask(event)">&#10007;</span>
        </span>`;
        // Append the list item to the list container
        listContainer.appendChild(li);
    }
    // Clear input box after adding task
    inputBox.value = "";
}

// Function to open edit modal when clicking on "Edit"
function openEditModal(event) {
    const listItem = event.target.closest('li');
    // Find the index of the list item in the list container
    editIndex = Array.from(listContainer.children).indexOf(listItem);
    // Set the value of the edit input to the task content
    editInput.value = listItem.querySelector('span').textContent;
    // Display the edit modal
    editModal.style.display = "block";
}

// Function to mark a task as done
function markAsDone(event) {
    const listItem = event.target.closest('li');
    // Add 'done' class to the span containing the task content
    listItem.querySelector('span').classList.add('done');
}

// Function to delete a task
function deleteTask(event) {
    const listItem = event.target.closest('li');
    // Remove the list item from the DOM
    listItem.remove();
}

// Function to submit edits made in the edit modal
function submitEdit() {
    // Check if the edit input is empty
    if (editInput.value === '') {
        alert("You must write something!");
    } else {
        // Update the task content in the list container
        listContainer.children[editIndex].querySelector('span').textContent = editInput.value;
        // Close the edit modal
        closeModal();
    }
}

// Function to cancel editing and close the edit modal
function cancelEdit() {
    closeModal();
}

// Function to close the edit modal
function closeModal() {
    // Hide the edit modal
    editModal.style.display = "none";
    // Clear the edit input value
    editInput.value = "";
    // Reset the edit index
    editIndex = null;
}