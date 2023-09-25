// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// create variable password length
var passwordLength;
// create variable uppercase. string with all uppercase characters
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// create variable lowercase. string with all lowercase characters
var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
// create variable numeric. string with all numeric characters
var numericString = "01234567890";
// create variable special characters. string with all special characters
var specialChar = "!@#$%^&*().,/=?@[]{}"; 

// input prompt to enter length of password (between 8 and 128) and store in new variable
passwordLength = prompt("Enter number of characters for your password (between 8 and 128): ");
// verify length of password is within required length with conditional statement, otherwise, restart this function
if (passwordLength < 8 || passwordLength > 128) {
  alert("Enter a valid number of characters");
  return generatePassword();
}


  // create a boolean variable to prompt to confirm uppercase
  var includeUpppercase =  confirm("Do you want uppercase characters on your password?");
  // create a boolean variable to prompt to confirm lowercase
  var includeLowercase =  confirm("Do you want lowercase characters on your password?");
  // create a boolean variable to prompt to confirm numeric
  var includeNum =  confirm("Do you want numbers on your password?");
  // create a boolean variable to prompt to confirm special characters
  var includeSpecial = confirm("Do you want special characters on your password?");

//create a variable that will store all potential characters

var possibleCharacters ="";
// create an array with all possible strings using truthy if statements
if (includeUpppercase || includeLowercase || includeNum || includeSpecial) {
  if (includeUpppercase) {
    possibleCharacters += uppercaseString;
  }
  if (includeLowercase) {
    possibleCharacters += lowercaseString;
  }
  if (includeNum) {
    possibleCharacters += numericString;
  }
  if (includeSpecial) {
    possibleCharacters += specialChar;
  }
}
else {
  alert("Please select 'OK' on at least one type of character");
  return generatePassword();
}

// create a variable that will contain the password

var password ="";

// store individual characters from possibleCharacters variable to password variable
for (var i = 0; i < passwordLength; i++) {
  var randomSelector = Math.floor(Math.random() * possibleCharacters.length);
  password += possibleCharacters.charAt(randomSelector);

}
return password;



}