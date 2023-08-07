// Assignment Code
var generateBtn = document.querySelector("#generate");

function generateRandomPassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generateRandomPassword(12); // Change the length as needed
  console.log(password);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
