async function fetchData() {
  console.log("Start fetching data...");

  const response = await fetch("data.json");
  const data = await response.json();

  console.log("Fetched Data:", data);
  console.log(
    "Data fetching complete. This message runs after data is fetched."
  );
}

fetchData();
console.log("This message runs immediately and is not blocked.");
