/*
to convert decimal to binary in javascript use tostring method and pass 2 
this will convert decimal format to binary format

also to do this manually we need to divide the number by 2 until we reach 1 and then write the reminders in the opposite
direction and you'll get the binary format

also you can write it in the below way
i.e. 2^0 2^1 and so on ....
*/

const convertDecimalToBinary = (num) => {
  return num.toString(2);
}


const result = convertDecimalToBinary(13);
console.log(result);

/*
to convert binary to decimal we'll use parseInt method and pass 2nd arguement as 2
also write 1 * 2^ index no and so on ...........
*/
const convertBinaryToDecimal = (str) => {
  return parseInt(str,2)
}

const result2 = convertBinaryToDecimal(1101);
console.log(result2);




const decimalToBinary = (n) => {
    let res = "";
  
    while (n > 0) {
        let rem = n % 2; // Get remainder
        res += rem; // Append remainder to result
        n = Math.floor(n / 2); // Update n to be the quotient
    }
  
    return res.split('').reverse().join(''); // Reverse and join to get binary representation
}

const result = decimalToBinary(13);
console.log(result); // Output: "1101"
