var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	span.classList.add("close");                             //added "close" class for css manipulation
	span.appendChild(document.createTextNode("X"))
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(span);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (input.value.length) {                                // input.value.length is true if 0 and false if >0
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (input.value.length && event.keyCode === 13) {        // input.value.length is true if 0 and false if >0
		createListElement();
	}
}

// strikeThrough and deleteItem functions
// ---------------------------------------

function strikeThrough(e) {
	// console.log(e.target.tagName);
	if(e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}

function deleteItem(e) {
	// console.log(e.target.tagName);
	if(e.target.tagName === "SPAN") {
		e.target.parentNode.remove();
	}
}

// Event listeners
// ----------------

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", strikeThrough);

ul.addEventListener("click", deleteItem);
