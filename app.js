var button = document.querySelector("#click-button");
var inputDate = document.querySelector("#input-date");
var outputDiv = document.querySelector("#output");

var dateIsNotPrime;

function isYourBirthDatePrime(input) {

    for (var i = 2; i < (input); i++) 
    {
        if ([input % i] == 0) {
            var dateIsNotPrime = true;
            break;
        }
    
    }

    if (dateIsNotPrime){

        var result = ("Your birth date is not a prime number!")

    }

    else {
        var result  = ("Your birth date is a prime number!")
    }
     
    
    outputDiv.innerHTML = result;
    return result;



}




function clickHandler() {
    var dateInput = inputDate.value;
    isYourBirthDatePrime(dateInput);
    
    




}
clickButton.addEventListener("click", clickHandler);