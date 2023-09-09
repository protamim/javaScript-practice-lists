console.log("JS file is connected successfully!");
const items = document.getElementById("ul");
items.addEventListener("click", function (event) {
  event.target.parentNode.removeChild(event.target);
});
const addItemBtn = document.getElementById("add_item");
addItemBtn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = "Brand New Item";
  items.appendChild(li);
});
