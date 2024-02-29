//data structures and algorithms


// palindrome Number
//121 
//1221
function isPalindromeNumber(x){
  
  if(x < 0){
    return false;
  }
  return x === +x.toString().split("").reverse().join(""); 
}

const result = isPalindromeNumber(1201);
console.log(result);

//fibonaaci Number

//0 1 1 2 3 5 8 13 ...........

function fibonaaci(n){
  const arr = [0,1];
  
  for(let i=2;i<= n;i++){
    arr.push(arr[i-1] + arr[i-2])
  }
  
  return arr;
}

const result1 = fibonaaci(10);
console.log(result1);



//using recursion

function fibonacciRecursion(n) {
    if (n <= 1) {
        return n
    }
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

console.log(fibonacciRecursion(6));


// valid anagram

function isAnagram(s,t){
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s===t;
}

const result2 = isAnagram("cat", "car");

console.log(result2);

// valid anagram optimised solution

function isAnagramOptimised(s,t){
  if(s.length !== t.length) return false;
  
  let obj1 = {};
  let obj2 = {};
  
  for(let i=0;i<s.length;i++){
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    
  }
  
  for(const key in obj1){
    if(obj1[key] !== obj2[key]) return false;
  }
  
  return true;
  
}

const result3 = isAnagramOptimised("anagram", "nagaram");
console.log(result3);




