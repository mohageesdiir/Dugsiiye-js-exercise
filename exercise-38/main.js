const toggleButtob = document.querySelector(".toggle-button");
const navBar = document.querySelector(".navbar");

toggleButtob.addEventListener("click", function (event) {
  event.preventDefault();
  //   console.log("hello"); tijaabin
  navBar.classList.toggle("active");
});
