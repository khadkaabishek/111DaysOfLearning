// 1. Selecting DOM elements safely
const title = document.getElementById("title") as HTMLHeadingElement;
const changeTextBtn = document.getElementById("changeTextBtn") as HTMLButtonElement;
const toggleClassBtn = document.getElementById("toggleClassBtn") as HTMLButtonElement;
const userInput = document.getElementById("userInput") as HTMLInputElement;
const showInputBtn = document.getElementById("showInputBtn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLParagraphElement;
const list = document.getElementById("list") as HTMLUListElement;
const addItemBtn = document.getElementById("addItemBtn") as HTMLButtonElement;

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
  const target = event.target as HTMLElement;
  if (target.tagName === "LI") {
    list.removeChild(target);
  }
});