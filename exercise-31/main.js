console.log("Get users exercise-31");

async function fetchDateUser() {
  try {
    console.log("start fetch users ");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // before json
    console.log("before JSON", response);

    // after json

    const data = await response.json();

    console.log("after json", data);
  } catch (error) {
    console.log("Error user data", error);
  }
}

fetchDateUser();
