"use strict";
// 1. Selecting DOM elements safely
const title = document.getElementById("title");
const changeTextBtn = document.getElementById("changeTextBtn");
const toggleClassBtn = document.getElementById("toggleClassBtn");
const userInput = document.getElementById("userInput");
const showInputBtn = document.getElementById("showInputBtn");
const output = document.getElementById("output");
const list = document.getElementById("list");
const addItemBtn = document.getElementById("addItemBtn");
// 2. Changing content
changeTextBtn.addEventListener("click", () => {
    title.textContent = "Text Changed via TypeScript!";
});
// 3. Manipulating class list
toggleClassBtn.addEventListener("click", () => {
    title.classList.toggle("highlight");
});
// 4. Reading input values
showInputBtn.addEventListener("click", () => {
    const value = userInput.value.trim();
    output.textContent = value ? `You typed: ${value}` : "Input is empty!";
});
// 5. Creating and appending elements
addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
});
// 6. Removing elements (optional feature)
list.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "LI") {
        list.removeChild(target);
    }
});
//# sourceMappingURL=script.js.map