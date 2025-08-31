const list = document.querySelector("#list");

function addStudent() {
  // create element
  const newStudent = document.createElement("li");
  // change element
  newStudent.textContent = " farxiyo salad";
  // add list
  list.appendChild(newStudent);
}

function removeStudent() {
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  } else {
    alert("more list student ");
  }
}
