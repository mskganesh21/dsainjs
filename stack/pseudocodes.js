/*
REVERSE WORDS IN A STRING

approach of a stack
function reverseWords(str) {
    // Step 1: Split the string into words
    const words = str.split(" ");
    
    // Step 2: Push each word onto the stack
    const stack = [];
    for (const word of words) {
        stack.push(word);
    }

    // Step 3: Pop the words from the stack and concatenate them
    let reversedStr = "";
    while (stack.length > 0) {
        reversedStr += stack.pop() + " ";
    }

    // Remove trailing space and return the reversed string
    return reversedStr.trim();
}

// Example usage:
const inputString = "Hello world how are you";
console.log(reverseWords(inputString)); // Output: "you are how world Hello"

*/

/*
VALID PARENTHESES
do this using stack

function isValidParentheses(s) {
    const stack = [];
    const opening = { '(': ')', '[': ']', '{': '}' };

    for (let char of s) {
        if (opening[char]) { // If char is an opening parenthesis
            stack.push(char);
        } else { // If char is a closing parenthesis
            const top = stack.pop();
            if (!top || opening[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Test cases
console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true


*/
