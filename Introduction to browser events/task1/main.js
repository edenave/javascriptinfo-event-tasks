const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("click", hideText);

function hideText(){

    text.hidden = true;
}