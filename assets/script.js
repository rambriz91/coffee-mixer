// Variables
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = lowerCase.toString().toUpperCase().split(',');
var num = ['1','2','3','4','5','6','7','8','9','0'];
var special = ['!','@','#','$','%','^','&','*','?','<','>','.','-','+','=','?','~'];
var charList = [];

// Functions 

// Fxn Prompts the user to confirm character sets.
function selChar() {
  charList = [];
  if (confirm('Would you like to include lowercase characters?')) {
    charList = charList.concat(lowerCase)
  }

  if (confirm('Would you like to include uppercase characters?')) {
    charList = charList.concat(upperCase)
  }

  if (confirm('Would you like to include numbers?')) {
    charList = charList.concat(num)
  }

  if (confirm('Would you like to include special characters?')) {
    charList = charList.concat(special)
  } else {
    alert("Please select at least one character set!")
  }
};

//Randomizes password from charList
function randomizer(passLength) {
  retVal = '';
  for (var i = 0; i < passLength; i++) {
    retVal += charList[Math.floor(Math.random() * charList.length)]
  }

  return retVal;
};

//prompts the user to select password length.
function generatePassword() {
  var passLength = window.prompt('Please choose a password with a length of at least 8 characters, but no more than 128 characters')
    if (passLength >= 8 && passLength <= 128) {
      selChar();
      randomizer(passLength);
      alert('Password Generated!')
    }

    else {
      alert('Password must contain at least 8 characters, but no more than 128!')
    }
    
    return retVal;
  };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
