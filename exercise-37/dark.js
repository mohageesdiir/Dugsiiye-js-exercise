const toggleButton = document.querySelector("#mode-toggle");
const postContainer = document.querySelector(".post-container");

toggleButton.addEventListener("click", switchMode);

function switchMode() {
  document.body.classList.toggle("dark-mode");
  postContainer.classList.toggle("dark-mode");
  toggleButton.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Toggle Light Mode";
    localStorage.setItem("mode", "dark");
  } else {
    toggleButton.textContent = "Toggle Dark Mode";
    localStorage.setItem("mode", "light");
  }
}

window.addEventListener("DOMContentLoaded", function () {
  // chick local storage
  const saveMode = this.localStorage.getItem("mode");

  if (saveMode === "dark") {
    this.document.body.classList.add("dark-mode");
    postContainer.classList.add("dark-mode");
    toggleButton.classList.add("dark-mode");
    toggleButton.textContent = "Toggle Light Mode";
  } else {
    toggleButton.textContent = "Toggle Dark Mode";
  }
});
