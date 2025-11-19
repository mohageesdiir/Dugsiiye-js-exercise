const selectLanguages = document.querySelectorAll(".select-languages");
const fromText = document.querySelector("#text-from");
const toText = document.querySelector("#text-To");
const transfer = document.querySelector("#transfer-Btn");

selectLanguages.forEach((select) => {
  for (const countryCode in language) {
    const option = document.createElement("option");
    option.value = countryCode;
    option.textContent = language[countryCode];
    select.appendChild(option);
  }
});

// Set default values kadhig
document.getElementById("From-language").value = "en-GB";
document.getElementById("To-language").value = "so-SO";

// set translate API
fromText.addEventListener("input", () => {
  const content = fromText.value;
  fromContent = selectLanguages[0].value;
  // fromText = selectLanguages[0].value;
  transText = selectLanguages[1].value;

  const transLinks = `https://api.mymemory.translated.net/get?q=${content}!&langpair=${fromContent}|${transText}`;

  fetch(transLinks)
    .then((translate) => translate.json())
    .then((data) => {
      toText.value = data.responseData.translatedText;
    });
});

transfer.addEventListener("click", (event) => {
  event.preventDefault();
  const exChange = fromText.value;
  fromText.value = toText.value;
  toText.value = exChange;

  const exChangeLanguage = selectLanguages[0].value;
  selectLanguages[0].value = selectLanguages[1].value;
  selectLanguages[1].value = exChangeLanguage;
});
