// Assignment code here

var lowercaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "?", "+", "-", "/", "(", ")", "*", "+", "=", "~", "#", "$", "%", "^", "&"];

// var password;


// var lowercaseLetter = "abcdefghijklmnopqrstuvwxyz";
// var uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numberChars = "0123456789";
// var specialChars = "!@#$%^&*(){}[]?><";


function generatePassword() {
  
  var passwordLength = prompt("How many characters should this password be? (Must be between 8 and 128)");
  
  console.log("password will be " + passwordLength + " characters");
  


  if (passwordLength < 8 || passwordLength > 128) {
    alert("Length must be between 8 and 128 characters. Please start over");
    return;
  } 

  var useLowercase = confirm("Use lowercase letters?");
  var useUppercase = confirm("Use uppercase letters?");
  var useNumbers = confirm("Use numbers?");
  var useSpecial = confirm("Use special characters?");

  var passwordFilter = [];

  if (useLowercase === false && useUppercase === false && useSpecial === false && useNumbers === false) {
    alert("You must pick at least one parameter. Please start over");
    return;
  }

  if (useLowercase) {
    passwordFilter = passwordFilter.concat(lowercaseLetter);
    
  }

  if (useUppercase) {
    passwordFilter = passwordFilter.concat(uppercaseLetter);
    
  }

  if (useNumbers) {
    passwordFilter = passwordFilter.concat(numberChars);
   
  }

  if (useSpecial) {
    passwordFilter = passwordFilter.concat(specialChars);
    
  }

  console.log (passwordFilter);

  var passwordInput = "";
  

  for (var i = 0; i < passwordLength; i++) {
    passwordInput = passwordInput + passwordFilter[Math.floor(Math.random() * passwordFilter.length)];
   
  }

  return passwordInput;

  
  
  
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
