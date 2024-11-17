let CountValue = document.getElementById("count");
let Inc = document.getElementById("inc");
let Dec = document.getElementById("dec");
let Reset = document.getElementById("reset");

let count = 0;



function display() {
    CountValue.textContent = count;
}


Inc.addEventListener("click", function () {
    count++;
    display();
});

Dec.addEventListener("click", function () {
    count--;
    display();
});

Reset.addEventListener("click", function () {
    count = 0;
    display();
});

