const image = document.querySelector("#image");

function changeImage() {
  const url = prompt("enter your image ");
  const borderColor = prompt("enter your own border color");
  const width = prompt("enter image width ");
  const height = prompt("enter image height ");
  const borderRadius = prompt("enter image boder radius");

  image.setAttribute("src", url);
  image.style.backgroundColor = "#FC466B";
  image.style.border = `3px solid ${borderColor}`;
  image.style.width = `${width}px`;
  image.style.height = `${height}px`;
  image.style.borderRadius = `${borderRadius}px`;
  image.style.padding = "20px";
}
