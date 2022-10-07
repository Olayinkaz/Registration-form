let wordInput = document.getElementById("password")
let letter = document.getElementById("letter")
let uppercase = document.getElementById("uppercase")
let number = document.getElementById("number")
let lent = document.getElementById("lenght")

wordInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}
wordInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}
wordInput.onkeyup = function() {
    let lowerCase = /[a-z]/g;
    if(wordInput.value.match(lowerCase)){
       letter.classList.remove("invalid");
       letter.classList.add("valid");
    }else{
        letter.classList.remove("valid")
        letter.classList.add("invalid")
    }
    let upperCase = /[A-Z]/g;
    if(wordInput.value.match(upperCase)){
       uppercase.classList.remove("invalid");
       uppercase.classList.add("valid");
    }else{
        uppercase.classList.remove("valid")
        uppercase.classList.add("invalid")
    }
    let numbers = /[0-9]/g;
    if(wordInput.value.match(numbers)){
       number.classList.remove("invalid");
       number.classList.add("valid");
    }else{
        number.classList.remove("valid")
        number.classList.add("invalid")
    }
    
    if(wordInput.value.length >= 8){
        lent.classList.remove("invalid");
        lent.classList.add("valid");
     }else{
         lent.classList.remove("valid");
         lent.classList.add("invalid");
     }

}