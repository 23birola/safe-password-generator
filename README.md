# safe-password-generator

# Module 5 Challenge: Password Generator

## Overview

This week’s challenge requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).

## Instructions

The following image shows the web application's appearance and functionality:

![password generator demo](./assets/05-javascript-challenge-demo.png)

- Generate a password when the button is clicked
  - Present a series of prompts for password criteria
    - Length of password
      - At least 8 characters but no more than 128.
    - Character types
      - Lowercase
      - Uppercase
      - Numeric
      - Special characters ($@%&\*, etc)
  - Code should validate for each input and at least one character type should be selected
  - Once prompts are answered then the password should be generated and displayed in an alert or written to the page

## Grading Requirements

This challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

- Satisfies all of the above acceptance criteria plus the following:

  - The challenge should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%

- Application deployed at live URL.

- Application loads with no errors.

- Application GitHub URL submitted.

- GitHub repository that contains application code.

### Application Quality: 15%

- Application user experience is intuitive and easy to navigate.

- Application user interface style is clean and polished.

- Application resembles the mock-up functionality provided in the challenge instructions.

### Repository Quality: 13%

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains quality README file with description, screenshot, and link to deployed application.

## Review

You are required to submit the following for review:

- The URL of the deployed application.

- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

---

const charOptions = [];
const generatedPassword = '';
// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters

// Function to prompt user for password options
function getPasswordOptions() {
// Prompt for password length
// At least 8 characters, no more than 128 characters
// Conditional to check that the number that was entered is in range
// Prompts store data as strings, so need to parse into a number
// If the user's input is out of range, either return out of the function or call the function again

// Confirm which character sets to use
// If the user answers false for all, either return out of the function or call the function again

// Once they select a character set:
// Generate a random character for each selected character set
// Either push selected character sets to a mega-array of all selected characters
// OR you can keep the arrays separate and generate a random number to select the array and another to select the index

// Once character sets are selected, move on to generating random characters
}

// Function for getting a random element from an array
function getRandom(arr) {
// Need a variable to hold the password as it's being generated
// Need a variable to hold the index that's being generated

// For loop that loops the number of times that matches the length the user chose
// Generate a random number
// That number is the index for a character in the mega-array
// So then, mega-array[generated-index] is the actual character
// Add that character to the password

// Once we finish the for loop, return the generated password
}
