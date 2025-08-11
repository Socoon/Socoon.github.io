const userInput = document.getElementById("age_input");
const submitButton = document.getElementById("submit_btn");
const result = document.getElementById("result");
let Age 

submitButton.onclick = function(){
    Age = userInput.value
    if (Age > 100){
        result.textContent = "You are too old";
    } else if (Age == 0){
    result.textContent = "You are not born yet"}
    else if (Age < 0){
        result.textContent = "Please enter a valid age";
    } else if (Age < 18){
        result.textContent = "You are a minor";
    }else if (Age >=18){
        result.textContent = "You are and adult";
    }else{
        result.textContent = "please enter a valid age";
    }
 }
    
