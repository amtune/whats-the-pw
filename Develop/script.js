// Assignment Code
var generateBtn = document.querySelector("#generate");

function generateRandomPassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let password = "";

  while(!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a valid number between 8 and 128");
    passwordLength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters."));
    console.log(passwordLength);//output of wrong answer
  }
  console.log(passwordLength);

  var includeLowerCase = confirm("Do you want lowercase characters in your password?");
  var includeUpperCase = confirm("Do you want uppercase characters in your password?");
  var includeNumeric = confirm("Do you want numbers in your password?");
  var includeSpecial = confirm("Do you want special characters in your password?");
  console.log(includeLowerCase);
  console.log(includeUpperCase);
  console.log(includeNumeric);
  console.log(includeSpecial);

  while(!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial){
    alert("Please choose at least one:");
    includeLowerCase = confirm("Do you want lowercase characters in your password?");
    includeUpperCase = confirm("Do you want uppercase characters in your password?");
    includeNumeric = confirm("Do you want numbers in your password?");
    includeSpecial = confirm("Do you want special characters in your password?");
    console.log(includeLowerCase);
    console.log(includeUpperCase);
    console.log(includeNumeric);
    console.log(includeSpecial);
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
      
  if(includeUpperCase === true) {
    var random = randomNumber(0, (upperCaseChars.length - 1));
    var char = upperCaseChars[random];
    password = password += char;
    if(password.length === passwordLength) {
      break;
    }
  }
  
  if(includeNumeric === true) {
    var random = randomNumber(0, (numericChars.length - 1));
    var char = numericChars[random];
    password = password += char;
    if(password.length === passwordLength) 
  
  
  if(includeSpecial === true) {
    var random = randomNumber(0, (specialChars.length - 1))
    var char = specialChars[random];
    password = password += char;
    if(password.length === passwordLength) {
      break;
    }
  }
  
};

  return password;


// Write password to the #password input
function writePassword() {
  var password = generateRandomPassword(12); // Change the length as needed
  console.log(password);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
