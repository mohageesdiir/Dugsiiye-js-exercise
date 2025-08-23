console.log("synchronous blocking");

console.log("this massage is blocked untill new student accept ");

function studentId() {
  alert("new student");
  return { name: "cumar ", id: 20 };
}

const user = studentId();

console.log(user);

// Asynchronous non-blocking

console.log("Asynchronous non-blocking");

function newStudentId(callback) {
  setTimeout(() => {
    const userId = { name: "cali", id: 25, class: "f4" };
    callback(userId);
  }, 2000);
}

newStudentId(function (userId) {
  console.table(userId);
});

console.log("this massage shown up before new student accepted");
