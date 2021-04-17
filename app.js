let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");

console.log(ourField.value);
ourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem(ourField.value);
});

function createItem(x) {
  let ourHTMl = `<li> ${x} <button onclick="deleteItem(this)">Delete Task</button></li>`;
  ourList.insertAdjacentHTML("beforeend", ourHTMl);
  ourField.value = "";
  ourField.focus();
}

function deleteItem(elementToDelete) {
  //   console.log(elementToDelete); // BUTTON ELEMENT INSIDE <LI>
  elementToDelete.parentElement.remove();
}
