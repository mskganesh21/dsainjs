/*
given number = 336
336/3 is possible
336/6 is possible
336/3 is possible 
hence answer is 3;
*/


function dividebyn(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        return;  // Return undefined if n is not a number
    }
    
    let num = n;

    let count = 0;

    // Iterate through each digit
    while (n > 0) {
        const rem = n % 10;  // Get the last digit
        if (rem !== 0 && num % rem === 0) {
            count = count + 1;
        }
        n = Math.floor(n / 10);  // Update n to remove the last digit
    }

    return count;
}

const result = dividebyn(373);
console.log(result);


/* --------------------------------------Solution 2 ----------------------------------------------------*/

function count(n){
  //convert to string
    const nstr = n.toString();
    let count = 0;
    //Iterate over the string
    for(let i=0;i<nstr.length;i++){
        //convert over to number
        const digit = parseInt(nstr[i]);
      
        if(digit !==0 && n % digit === 0) {
            count++;
        }
    }
    return count;
}

const res = count(737);
console.log(res);
