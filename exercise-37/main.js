const createPost = document.querySelector(".create-post");
const postTitle = document.querySelector("#post-title");
const imagePost = document.querySelector("#post-image");
const displayPost = document.querySelector("#display-post");

// DOM loaded
document.addEventListener("DOMContentLoaded", loadImage);

function loadImage() {
  const posts = getOldImageDate();

  posts.forEach((image) => {
    displayImage(image);
  });
}

// submit
createPost.addEventListener("submit", addImage);

function addImage(event) {
  event.preventDefault();

  const imageUrl = imagePost.value.trim();

  if (imageUrl !== "") {
    const image = {
      id: Date.now(),
      Url: imageUrl,
    };

    displayImage(image);
    saveImageDate(image);

    postTitle.value = "";
    imagePost.value = "";
  }
}

function displayImage(image) {
  const div = document.createElement("div");
  div.className = "image-preview";
  div.dataset.id = image.id;

  div.innerHTML = `
    <img src="${image.Url}" alt="Post Image">
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  displayPost.appendChild(div);
  attachEventListeners(div, image);
}

function attachEventListeners(div, image) {
  const deleteBtn = div.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    handleDelete(image.id, div);
  });

  const editBtn = div.querySelector(".edit-btn");
  editBtn.addEventListener("click", function () {
    handleEdit(image.id, div);
  });
}

function handleEdit(id, div) {
  const newUrl = prompt("Enter new image URL:");
  if (newUrl) {
    const posts = getOldImageDate();
    const updated = posts.map((image) => {
      if (image.id === id) {
        image.Url = newUrl;
      }
      return image;
    });
    localStorage.setItem("allImage", JSON.stringify(updated));
    div.querySelector("img").src = newUrl;
  }
}

function handleDelete(id, div) {
  let images = getOldImageDate();
  images = images.filter((image) => image.id !== id);
  localStorage.setItem("allImage", JSON.stringify(images));
  div.remove();
}

// localStorage
function saveImageDate(image) {
  const oldImages = getOldImageDate();
  oldImages.push(image);
  localStorage.setItem("allImage", JSON.stringify(oldImages));
}

function getOldImageDate() {
  return JSON.parse(localStorage.getItem("allImage")) || [];
}
