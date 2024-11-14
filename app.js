const inputField = document.getElementById("taskField");
const button1 = document.getElementById("button-1");
// const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const list = document.getElementById("list");
let indexCount = 0;

// Add Task
button1.addEventListener("click", () => {
  const taskText = inputField.value.trim();
  if (taskText !== "") {
    indexCount++;
    const listItem = document.createElement("li");
    listItem.id = "to-do-Task" + indexCount;

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "boxField" + indexCount;
    checkBox.className = "listBox";

    const textNode = document.createTextNode(taskText);

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px"; // Add some space between text and delete button
    deleteButton.addEventListener("click", () => {
      listItem.remove();
    });

    // Add event listener to checkbox to toggle strikethrough
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        listItem.style.textDecoration = "line-through";
      } else {
        listItem.style.textDecoration = "none";
      }
    });

    // Append the checkbox first, then the text node
    listItem.appendChild(checkBox);
    listItem.appendChild(textNode);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    // Clear input field
    inputField.value = "";
  } else {
    alert("Enter some text!");
  }
});
