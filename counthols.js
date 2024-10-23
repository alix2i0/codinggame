/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const s = readline();
let j = s.toString().split('')
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
function countHolesInString(input) {
    let totalHoles = 0;
    for (let i = 0; i < input.length; i++) {
      totalHoles += countHoles(input[i]);
    }
    return totalHoles;
  }
function countHoles(char) {
    // Check if the character is a digit (0-9)
    if (char >= '0' && char <= '9') {
      if (char === '0' || char === '6' || char === '9') return 1;
      if (char === '8') return 2;
      return 0; // All other digits (1, 2, 3, 4, 5, 7) have 0 holes
    }
  
    // Check if the character is an uppercase letter (A-Z)
    if (char >= 'A' && char <= 'Z') {
      if (char === 'A' || char === 'D' || char === 'O' || char === 'P' || char === 'Q' || char === 'R') return 1;
      if (char === 'B') return 2;
      return 0; // All other uppercase letters have 0 holes
    }
  
    // Check if the character is a lowercase letter (a-z)
    if (char >= 'a' && char <= 'z') {
      if (char === 'a' || char === 'b' || char === 'd' || char === 'e' || char === 'g' || char === 'o' || char === 'p' || char === 'q') return 1;
      if (char === '8') return 2;
      return 0; // All other lowercase letters have 0 holes
    }
  
    // Return 0 if it's an unsupported character
    return 0;
  }
  
console.log('ans');
