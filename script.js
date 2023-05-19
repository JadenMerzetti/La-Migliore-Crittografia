// Assignment Code
var generateBtn = document.querySelector("#generate");

let userCharacterAmount 

while (true) {
  userCharacterAmount = window.prompt("How many characters would you like your password to be?");
  const CharacterAmount = parseInt(userCharacterAmount);
  
  if (CharacterAmount >= 8 && CharacterAmount <= 129 ) {
    console.log("User wants password to be" + userCharacterAmount + " characters in length!")
      break;

  }
    window.alert("The length of your password must be between 8 and 129. Please enter a valid length!");
  
}

const userSpecialCharactersAlert = window.confirm("Please agree to use special characters in your password!");
const userNumbersAlert           = window.confirm("Please agree to include numbers in your password!");
const userLowerCaseAlert         = window.confirm("Please agree to lower-case letters in your password!");
const userUpperCaseAlert         = window.confirm("Please agree to upper-case letters in your password!");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





  

