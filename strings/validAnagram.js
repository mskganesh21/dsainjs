// anagram
// words formed by the same letters
/*
brute force solution
sort the 2 strings and compare each string

efficient
create a bucket array of alphabets and add the frequencies
  now decrement the frequency when comparing with next string;
  if all the sum is 0, then it is anagram
*/

function isAnagram(str1,str2){
  //convert to lowercase
str1 = str1.trim().replace(/\s/g, "").toLowerCase(); 
str2 = str2.trim().replace(/\s/g, "").toLowerCase();
    
    let alphabetsarray = new Array(26).fill(0);
    console.log(alphabetsarray);
    
    for(let i=0;i<str1.length;i++){
      alphabetsarray[str1.charCodeAt(i) - 97]++;
    }
    
    for(let i=0;i<str2.length;i++){
      alphabetsarray[str2.charCodeAt(i) - 97]--;
    }
    
    for(let i=0;i< alphabetsarray.length;i++){
      if(alphabetsarray[i] !== 0){
        return false;
      }
    }
    
    return true;
}

console.log(isAnagram("hello", "loleh"))
