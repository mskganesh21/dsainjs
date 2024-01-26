// palindrome number
// an integer number is a palindrome number if it reads same forward and backward

// brute force way
const isPalindrome = function (x){
    return x === +x.toString().split("").reverse().join("")
}

const res = isPalindrome(10121211);

console.log(res);
