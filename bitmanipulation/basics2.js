/*
BIT MAGIC

BIT MANIPULATION

bits is binary representation of numbers

[a]converting decimal into binary 

suppose we have number 13 then

13/2    1(remainder)
6/2    0 (remainder)
3/2  1 (remainder)
1 (remainder)

divide till 1 and then put the remainders from
bottom 1 to top 

(1 1 0 1) base 2 is 13

let's try for 7

7/2  1
3/2  1
1 
(1 1 1)


[b] convert binary to decimal

put index numbers to the binary number from right to left

suppose if it is (1 1 1)

1*2^0 + 1*2^1 + 1* 2^2
1+2+4 = 7

suppose for 13 it is 
(1 1 0 1)

1*2^0 + 0*2^1 + 1*2^2 + 1*2^3

1+0+4+8 = 13

*/

const convertToBinary = (num) => {
  let res = "";
  
  while(num >=1){
    let remainder = Math.floor(num % 2);
    res += remainder;
    num = Math.floor(num/2);
  }
  
  return res.split("").reverse().join("");
}

console.log(convertToBinary(13));


const ConvertBinaryToDecimal = (str) => {
  let j=0;
  let res = 0;
  for(let i=str.length-1;i>=0;i--){
    let sum = str[i] * Math.pow(2,j);
    j++;
    res += sum;
  }
  
  return res;
}

console.log(ConvertBinaryToDecimal("1101"));


/**

1s compliment

13 (1 1 0 1) flip zeros and ones, i.e. 1s comliment

(0 0 1 0)

2s compliment

add 0001 to 1s compliment i.e. 2s compliment
0 0 1 0
0 0 0 1

(0 0 1 1)
**/


/*
AND OPERATOR
all true is true
1 false means all is false

13: 1 1 0 1
7:  0 1 1 1
    0 1 0 1 which is 5
    
OR OPERATOR

one true is true
all false is false

13: 1 1 0 1
7:  0 1 1 1
    1 1 1 1 (1+2+4+8=15)
    
    
XOR OPERATOR

no of 1s odd we get 1
no of 1s even then it is 0

13: 1 1 0 1
7:  0 1 1 1
    1 0 1 0

*/


/**
SHIFT OPERATOR

RIGHT SHIFT OPERATOR

13: 1 1 0 1


**/
















