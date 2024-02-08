/*
1.first approach
2. sum all elements of Array
3. use sum = (n*(n+1)/2)
4. subtract to get the answer
*/

/*
bit manipulation technique
properties of xor
commutative
a+b = b+a
xor with 0
a+0 = a
xor with self
a+a = 0
*/

function missingnumber(arr){
  let n = arr.length;
  let allxor = 0;
  //xor for all nos in range 0 to n
  for(let i=0;i<=n;i++){
    allxor = allxor ^ i;
  }
  
  for(let ar of arr){
    allxor = allxor ^ ar;
  }
  
  return allxor;
  
}

const result = missingnumber([9,6,4,2,3,5,7,0,1]);
console.log(result);
