console.log("Hello, World!");

const stringReverse = (str) => {
  if(str.length === 0){
    return "";
  }
  
  return stringReverse(str.substring(1)) + str.charAt(0)
}

const result = stringReverse("Hello");
console.log(result)


const isPalindrome = (str) => {
  if(str.length === 0 || str.length === 1){
    return true
  }
  
  if(str.charAt(0) === str.charAt(str.length -1)){
    return isPalindrome(str.substring(1,str.length -1))
  }
  
  return false
}

const results = isPalindrome("hello");
console.log(results)


const decimalToBinary = (num, str) => {
  if (num === 0) {
    return str;
  }

  str = (num % 2) + str;
  return decimalToBinary(Math.floor(num / 2), str);
}

const result2 = decimalToBinary(233, "");
console.log(result2);


const sumofnaturalnumbers = (num) => {
  if(num <= 1){
    return num;
  }
  
  return num +sumofnaturalnumbers(num-1);
}

const result3 = sumofnaturalnumbers(10);
console.log(result3)


/*
DIVIDE AND CONQUER
*/

const binarySearch = (arr, target, left, right) => {
  if (left > right) {
    return -1;
  }
  
  let mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) {
    return mid;
  }
  
  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right);
  }
  
  return binarySearch(arr, target, left, mid - 1);
}

const result4 = binarySearch([1,3,5,7,9,10,11,13,14,16], 10, 0, 9);
console.log(result4);





