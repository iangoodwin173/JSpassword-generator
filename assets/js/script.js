// Assignment code here

//Declaring arrays for filters
var lowercaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "?", "+", "-", "/", "(", ")", "*", "+", "=", "~", "#", "$", "%", "^", "&"];




function generatePassword() {
  
  //setting the desired length of the password
  var passwordLength = prompt("How many characters should this password be? (Must be between 8 and 128)");
  
  //logs password length to developer console
  console.log("password will be " + passwordLength + " characters");
  

  //creates alert if password length is set outside acceptable parameters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Length must be between 8 and 128 characters. Please start over");
    return;
  } 

  //declaring variables for password filters
  var useLowercase = confirm("Use lowercase letters?");
  var useUppercase = confirm("Use uppercase letters?");
  var useNumbers = confirm("Use numbers?");
  var useSpecial = confirm("Use special characters?");

  //creating empty array to add selected filters into
  var passwordFilter = [];

  //displays alert if user did not select any criteria for password
  if (useLowercase === false && useUppercase === false && useSpecial === false && useNumbers === false) {
    alert("You must pick at least one parameter. Please start over");
    return;
  }

  //adds lowercase letters to password filter if selected
  if (useLowercase) {
    passwordFilter = passwordFilter.concat(lowercaseLetter);
    
  }

  //adds uppercase letters to password filter if selected
  if (useUppercase) {
    passwordFilter = passwordFilter.concat(uppercaseLetter);
    
  }

  //adds numbers to password filter if selected
  if (useNumbers) {
    passwordFilter = passwordFilter.concat(numberChars);
   
  }

  //adds special characters to password filter if selected
  if (useSpecial) {
    passwordFilter = passwordFilter.concat(specialChars);
    
  }

  //logs new array of password filter to developer console
  console.log (passwordFilter);

  //declaring password input to display with filters
  var passwordInput = "";
  

  //loop to generate random character until length of password is reached
  for (var i = 0; i < passwordLength; i++) {
    passwordInput = passwordInput + passwordFilter[Math.floor(Math.random() * passwordFilter.length)];
   
  }

  //displays completed password with desired filters
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
