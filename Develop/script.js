// Assignment Code
var generateBtn = document.querySelector("#generate");

var toUpper = function(x) {  // found this code snippet, gonna try to use. confusing but it works" probably wont remember it.
  return x.toUpperCase();
};

var specialChars = ["!", "#", "$", "%", "&", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?"];
var numericChars = ["1", "2", "3", "4", "5", "6", "7","8","9"];
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t","u","v","w","x","y","z" ];
var upperCaseChars = lowerCaseChars.map(toUpper); 
 console.log(upperCaseChars);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
