const Subscribe = document.getElementById("checkbox");
const visa = document.getElementById("radio");
const paypal = document.getElementById("radio2");
const Submit = document.getElementById("button");
const Result = document.getElementById("result1");
const Result2 = document.getElementById("result2");

Submit.onclick = function (){
    if (Subscribe.checked){
        Result.textContent =("You have subscribed")
    }else{
        Result.textContent =("You have not subscribed")

    }
    if (visa.checked){
        Result2.textContent =("You have selected Visa")

    }else if (paypal.checked){
        Result2.textContent = ("You have selcted PayPal")

    
}
}