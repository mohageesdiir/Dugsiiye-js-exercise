// Introduction to Promises

function fetchUserDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ id: 1, name: "maxamed cali ", age: 28 });
      } else {
        reject("failed to fetch user date");
      }
    }, 2000);
  });
}

fetchUserDate().then((date) => console.log("user date ", date));
//   .catch((error) => console.log(error));
