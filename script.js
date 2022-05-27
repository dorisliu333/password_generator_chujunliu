// Assignment Code
var generateBtn = document.querySelector("#generate");
//Write the generatePassword() function  
var passwordLength;
var includeLowerCase;
var includeUpperCase;
var includeNumber;
var includeSymbol;
var result;
var symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = lowerCase.map(e => e.toUpperCase());

function generatePassword() {

  //ask user to enter password length
  passwordLength = prompt("How long the password you want to generate? Type a number(8-128):");
  if (passwordLength === null) {
    return '';
  }
  //validate the input of the password length, should be a number and from 8-128
  while (passwordLength < 8 || passwordLength > 128 || isNaN(Number(passwordLength))) {
    if (passwordLength === null) {
      return '';
    } else {
      if (passwordLength < 8) {
        passwordLength = prompt(`your enter is ${passwordLength} which is smaller than 8, enter your password length between 8 and 128`);
      }
      if (passwordLength > 128) {
        passwordLength = prompt(`your enter is ${passwordLength} which is greater than 128, enter your password length between 8 and 128`);
      }
      if (isNaN(Number(passwordLength))) {
        passwordLength = prompt(`your enter is ${passwordLength} which is not a number type`)
      }
    }
  }
  //ask to select lowercase upperCase number symbol
  includeLowerCase = confirm("DO you want to include lower case?")
  includeUpperCase = confirm("Do you want to include upper case?")
  includeNumber = confirm("Do you want to include numbers?")
  includeSymbol = confirm("Do you want to include special characters?")

  //define result from user's select
  if (!includeLowerCase && !includeUpperCase && !includeNumber && !includeSymbol) {
    alert('Please select at least one character type')
    return '';
  } else if (includeLowerCase && includeUpperCase && includeNumber && includeSymbol) {
    result = lowerCase.concat(upperCase, number, symbol)
  } else if (includeLowerCase && includeUpperCase && includeNumber) {
    result = lowerCase.concat(upperCase, number)
  } else if (includeLowerCase && includeUpperCase && includeSymbol) {
    result = lowerCase.concat(upperCase, symbol)
  } else if (includeLowerCase && includeUpperCase) {
    result = lowerCase.concat(upperCase)
  } else if (includeLowerCase && includeNumber && includeSymbol) {
    result = lowerCase.concat(number, symbol)
  } else if (includeLowerCase && includeNumber) {
    result = lowerCase.concat(number)
  } else if (includeLowerCase && includeSymbol) {
    result = lowerCase.concat(symbol)
  } else if (includeUpperCase && includeNumber && includeSymbol) {
    result = upperCase.concat(number, symbol)
  } else if (includeUpperCase && includeNumber) {
    result = upperCase.concat(number)
  } else if (includeUpperCase && includeSymbol) {
    result = upperCase.concat(symbol)
  } else if (includeNumber && includeSymbol) {
    result = symbol.concat(number)
  } else if (includeLowerCase) {
    result = lowerCase;
  } else if (includeUpperCase) {
    result = upperCase;
  } else if (includeNumber) {
    result = number;
  } else {
    result = symbol;
  }
  var resultStr = result.join('');
  var passwordRandom = '';
  //use Math.random to generate the password
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * resultStr.length);
    passwordRandom += resultStr.substring(randomNumber, randomNumber + 1);
  }
  return passwordRandom;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
