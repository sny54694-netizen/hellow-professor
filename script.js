let heading = document.getElementById("heading");
let para = document.getElementById("para");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    heading.innerText = "Operation Starts";
    heading.style.color = "black";
    heading.style.backgroundColor = "Red";

    para.innerText = "Best of Luck Professor & Team"
    para.style.color = "black";
    para.style.backgroundColor = "Red";
});