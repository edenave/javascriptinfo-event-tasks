button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert("Both of the handlers will run because we didnt removed the first event listener, you cant remove the function if you use the arrow syntax");