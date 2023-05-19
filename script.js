// Assignment Code
var generateBtn = document.querySelector("#generate");

let userCharacterAmount 

while (true) {
  userCharacterAmount = window.prompt("How many characters would you like your password to be?");
  const CharacterAmount = parseInt(userCharacterAmount);
  
  if (CharacterAmount >= 8 && CharacterAmount <= 128 ) {
      break;

  }
    window.alert("The length of your password must be between 8 and 129. Please enter a valid length!");
  
}

const userSpecialCharactersAlert = window.confirm("Please agree to use special characters in your password!");
const userNumbersAlert           = window.confirm("Please agree to include numbers in your password!");
const userLowerCaseAlert         = window.confirm("Please agree to lower-case letters in your password!");
const userUpperCaseAlert         = window.confirm("Please agree to upper-case letters in your password!");

let passwordArray;
function generatePassword () {

passwordArray = [];
var i  = 0;

while (i < userCharacterAmount ) {
  const categoryInt = Math.floor(Math.random() * 4);

  if (categoryInt === 0) {
    var lowerCaseCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
    var randomLowerCaseLetter = String.fromCharCode(lowerCaseCode);
    passwordArray.push(randomLowerCaseLetter);
    i++;
  }

  else if (categoryInt === 1) {
    var upperCaseCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    var randomUpperCaseLetter = String.fromCharCode(upperCaseCode);
    passwordArray.push(randomUpperCaseLetter);
    i++;
  }

  else if (categoryInt === 2) {
    var number = Math.floor(Math.random() * 9);
    passwordArray.push(number);
    i++;
  }

  else if (categoryInt === 3) {
    var symbol = Math.floor(Math.random() * (41 - 33 + 1)) + 33;
    var randomSymbolCode = String.fromCharCode(symbol);
    passwordArray.push(randomSymbolCode);
    i++;
  }
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

// I created a generator to randomly pick between 1 and 4. This would act like a 
// category choice of which type of character (Number, Uppercase, Lowercase, or symbol) would be added to the array next
// then my loop randomly chooses a number within the range of the character codes within said category
// it would then convert that number into the character itself and procees to add it to the array 
// that way each loop will generate a random character from a random category making the password ULTRA RANDOM





  

