// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  let length = parseInt(prompt(`Choose password length from 8 to 128 `));
  let specialChr = confirm('Do you need special characters in your password?');
  let numbers = confirm('Do you need numbers in your password?');
  let uppercase = confirm('Do you need uppercase characters in your password?');
  let lowercase = confirm('Do you need lowercase characters in your password?');
  if ((specialChr || numbers || uppercase || lowercase) && (length >= 8 && length <= 128)) {
      return {
        length: length,
        specialCharacter: specialChr,
        numberCharacter: numbers,
        uppecaseCharacter: uppercase,
        lowercaseCharacter: lowercase,
      }
  } else {
    alert('Choose another options');
    getPasswordOptions();
    return;
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
   const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
    let selectedPasswordOptions = getPasswordOptions();
    let megaArr = [];
    let generatedPassword = [];

    if (selectedPasswordOptions.specialCharacter) {
      let generatedSpecialCht = getRandom(specialCharacters);
      generatedPassword.push(generatedSpecialCht);
      megaArr = megaArr.concat(specialCharacters);
    }

    if (selectedPasswordOptions.numberCharacter) {
      let generatedNumber = getRandom(numericCharacters);
      generatedPassword.push(generatedNumber);
      megaArr = megaArr.concat(numericCharacters);
    }

    if (selectedPasswordOptions.uppecaseCharacter) {
      let generatedUppecaseCharacter = getRandom(upperCasedCharacters);
      generatedPassword.push(generatedUppecaseCharacter);
      megaArr = megaArr.concat(upperCasedCharacters);
    }
    if (selectedPasswordOptions.lowercaseCharacter) {
      let generatedLowercaseCharacter = getRandom(lowerCasedCharacters);
      generatedPassword.push(generatedLowercaseCharacter);
      megaArr = megaArr.concat(lowerCasedCharacters);
  }

  for (let i = 0; i < (selectedPasswordOptions.length - 4); i++) {
    let generatedCharacter = getRandom(megaArr);
    generatedPassword.push(generatedCharacter);
  }

  generatedPassword = generatedPassword.join('');
  return generatedPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);