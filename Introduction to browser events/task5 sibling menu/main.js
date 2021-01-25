const click = document.getElementById("click");
const ul = document.getElementById("ul");

click.addEventListener("click", toggleMenu);

function toggleMenu() {

    if (ul.style.display === "none") {
      ul.style.display = "block";
    } else {
      ul.style.display = "none";
    }
  }