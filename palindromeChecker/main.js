//add click eventlistner to the button
document.querySelector("button").addEventListener("click", palindrome);
function palindrome() {
    //get the input value
    let str = document.getElementById("number").value;

    //remove all the white space and special character from the string
    let newPalindrome = str.toLowerCase().replace(/[-_&\/\\#,+()$~%.'":*?<>{}\s|]/g, '');

    //reverse the newpalindrome - like apple = elppa
    let reversePalindrome = newPalindrome.split("").reverse().join('');
    
    //compare newpalindrome with reversepalindorme
    if(newPalindrome == ""){
        return document.getElementById("result").innerHTML = "Enter a valid value!";
    }else if(newPalindrome === reversePalindrome){
        return document.getElementById("result").innerHTML = '"' + str + '"' + " " + " is a Palindrome.";
    }else{
        return document.getElementById("result").innerHTML = '"' + str + '"' + " " + " is not a Palindrome.";
    };
    
}


