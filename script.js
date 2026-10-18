let heading = document.getElementById("heading");
let para = document.getElementById("para");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

btn.addEventListener("click", function(){
    heading.innerText = "Operation Starts";
    heading.style.color = "black";
    heading.style.backgroundColor = "Red";

    para.innerText = "Best of Luck Professor & Team"
    para.style.color = "black";
    para.style.backgroundColor = "Red";
});
btn2.addEventListener("click", function(){
    heading.innerText = "Operation Stops";
    heading.style.color = "red";
    heading.style.backgroundColor = "black";

    para.innerText = "Planning is not too strong"
    para.style.color = "red";
    para.style.backgroundColor = "black";
});