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


function generatePassword () {

passwordArray = [];
var i  = 0;

while (i < userCharacterAmount) {
  const categoryInt = Math.floor(Math.random() * 4);

  if (categoryInt === 0) {
    var lowerCaseCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
    var randomLowerCaseLetter = String.fromCharCode(lowerCaseCode);
    passwordArray.push(randomLowerCaseLetter);
  }
  else if (categoryInt === 1) {
    var upperCaseCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    var randomUpperCaseLetter = String.fromCharCode(upperCaseCode);
    passwordArray.push(randomUpperCaseLetter);
  }
  else if (categoryInt === 2) {
    var number = Math.floor(Math.random() * 10);
    passwordArray.push(number);
  }
  else (categoryInt === 3); {
    var symbol = Math.floor(Math.random() * (41 - 33 + 1)) + 33;
    var randomSymbolCode = String.fromCharCode(symbol);
    passwordArray.push(randomSymbolCode);
  }

  i++;
}

return passwordArray.join('');

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





  

