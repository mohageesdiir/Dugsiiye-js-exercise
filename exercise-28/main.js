// Introduction to Promises

function fetchUserDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;

      if (success) {
        resolve({ id: 1, name: "maxamed cali ", age: 28 });
      } else {
        reject("failed to fetch user date");
      }
    }, 2000);
  });
}

async function displayUserDate() {
  try {
    const user = await fetchUserDate();
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

displayUserDate();
