/*
valid palindrome

edge cases

empty String
single character String
whitespace and punctuation
case sensitivity
unicode characters
special characters
string length limitations
encoding
control characters
numeric palindrome


approach 1

newstr if(char is alphanumeric){
  convert it to lowercase and add it to the newstr
}

now compare the newstr to reverse newstr;

efficient approach
no extra memory
two pointer approach

let l=0;
let r = str.length;

while (l < r){
  while(l !== alphanumeric){
    l++;
  }
  while (r !== alphanumeric){
    r--;
  }
  if(l.charAt !== r.chatAt){
    return false
  } else {
    l++;
    r--;
  }
}

ASCII values 
48-57 0-9
97-122 a-z
65-90 A-Z

*/


/*
REVERSE STRING

approach 1
iterative solution

convert to array
let l=0;
let n = arr.length;

while(l < r){
  swap the variables
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
  l++;
  r--;
}


approch 2 
stack solution
o(n) space complexity

iterate over the string and put it in a stack
stack.push();

now modify the stirng and add the stack.pop to the string


approch 3
recursion approach

recursivefunction (l,r){
  if(l < r) {
    s[l] = s[r];
    s[r] = s[l];
    recursivefunction(l+1,r-1)
  }
}

*/









