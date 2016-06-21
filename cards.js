var button = document.getElementById('button');
var contents = document.getElementById("content");
var container = document.getElementById("container");

function create () {
  var card = document.createElement("div");
  var content = document.createTextNode(contents.value);
  var dButton = document.createElement("button");
  var deleteBtn = document.createTextNode("Delete");
  card.appendChild(content);
  card.appendChild(dButton);
  card.classList.add("cards");
  dButton.appendChild(deleteBtn);
  dButton.addEventListener("click", deleteCard );
  container.appendChild(card);
  function deleteCard () {
    card.parentNode.removeChild(card);
  }
}

button.addEventListener("click", create);