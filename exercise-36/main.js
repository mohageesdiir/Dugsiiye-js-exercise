// select id

const colorPicker = document.querySelector("#colorPicker");
const colorPreview = document.querySelector("#colorPreview");
const colorHistory = document.querySelector("#colorHistory");
const clearHistory = document.querySelector("#clearHistory");

// addEventListener
colorPicker.addEventListener("input", function () {
  const selectedColor = colorPicker.value;
  colorPreview.style.backgroundColor = selectedColor;
  addColorToHistory(selectedColor);
});

// select color
function addColorToHistory(color) {
  const li = document.createElement("li");
  li.textContent = color;
  li.style.color = color;
  colorHistory.appendChild(li);
}

clearHistory.addEventListener("click", function () {
  colorHistory.innerHTML = ""; // Clear the color history list
});
