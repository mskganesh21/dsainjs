// palindrome linkedlist

// wrtie a function to check whether the linked list is a palindrome

var isPalindrome = function(head){
// create 2 variables
let str1=str2="";
//create a current variable pointing to head
let current = head;

while(current !== null){
str1 = `${str1}${current.val}`;
str2 = `${current.val}${str2}`;
current = current.next;
}

return str1 === str2;
}
