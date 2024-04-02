/*
LICENCE KEY FORMATTING
*/
/*
string:  7f-5f3z-2e-9-w
k: 4

sol: make the string from backwards so that we have k characters in every group
from backside
*/

const licenceKeyFormatting = (str, k) => {
  // Make the result array
  let result = [];
  
  // Convert the string to an array and remove hyphens
  let arr = str.split('-').join('').toUpperCase().split('');
  
  // Getting the length of the array
  let n = arr.length;
  
  let count = 0;
  
  // Iterating the array from back
  for(let i = n - 1; i >= 0; i--) {
    let char = arr[i];
    
    // If it is an alphabet or number, push it to the array
    if ((char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
      result.unshift(char);
      count++;
      
      // If count is divisible by k and it's not the first element, add a hyphen
      if (count % k === 0 && i !== 0) {
        result.unshift('-');
      }
    }
  }
  
  // Convert the array to a string and return
  return result.join('');
}

// Example usage
console.log(licenceKeyFormatting("2-4A0r7-4k", 3));// Output: "24-A0R-74K"
console.log(licenceKeyFormatting("7-f-5f3z-2e-9-w", 4));
