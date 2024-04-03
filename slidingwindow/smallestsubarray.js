/*
given an array of positive numbers and a positive number s, find the
length of the smallest contiguous subarray whose sum is greater than or 
equal to s. return 0 if no such subarray exists
*/

/*
1.initialize windowstart and windowend at 0th index
2.add value in window to windowsum
3.is value greater than or equal to s ?
if yes ?
capture the length of window in minlength 
shrink sliding window by decrementing windowstart
repeat step 3

if no ?
grow sliding window to next element by incrementing windowend
repeat step 3
*/ 

function subarraySum (arr,s){
    let windowstart =0;
    let windowsum = 0;
    let minlength = Infinity;
    
    for(let windowend=0;windowend<arr.length;windowend++){
      //grow the window 
      windowsum+= arr[windowend];
      
      //is windowsum >=s?
      //if not, continue iteration, grow the window
      
      //if yes.... shrink the window (until windowsum < s again)
      while(windowsum >= s){
        // shrink the window, increment windowstart, remove the 
        //first element  in window from new shrunken window
       let currentwindowlength = windowend - windowstart +1;
       minlength = Math.min(minlength, currentwindowlength);
       windowsum-= arr[windowstart];
       windowstart++;
      }
    }
    
    if(minlength === Infinity){
      return 0
    }
    
    return minlength
}

console.log(subarraySum([1,3,2,2,4,5],6));
console.log(subarraySum([2,1,5,2,8],7));
console.log(subarraySum([1,3,2,2,4,5],25));









