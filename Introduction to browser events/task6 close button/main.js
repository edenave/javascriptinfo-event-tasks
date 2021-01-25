const removeButton1 = document.getElementById("removeButton1");
const removeButton2 = document.getElementById("removeButton2");
const removeButton3 = document.getElementById("removeButton3");

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");

removeButton1.addEventListener("click", removefunc1);

removeButton2.addEventListener("click", removefunc2);

removeButton3.addEventListener("click", removefunc3);

function removefunc1(){
    div1.style.display = "none";
    removeButton1.style.display = "none"
}

function removefunc2(){
    div2.style.display = "none";
    removeButton2.style.display = "none"
}

function removefunc3(){
    div3.style.display = "none";
    removeButton3.style.display = "none"
}