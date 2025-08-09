const increaseBtn = document.getElementById("Increasebtn");
const decreaseBtn = document.getElementById("Decrease");
const resetBtn = document.getElementById("Reset");
const label = document.getElementById("label");
let count = 0;
increaseBtn.onclick = function(){
    count++;
    label.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    label.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    label.textContent = count;
}