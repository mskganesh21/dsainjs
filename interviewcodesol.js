console.log("Hello, World!");

// a22b33c44

function printStringNtimes(s) {
  // validation
  if (typeof s !== 'string') {
    return false;
  }

  // split the string into an array
  let arr = s.split("");
  // console.log(arr);

  // define the length of the string
  let n = s.length;

  // start with index 1 and go until the value at the next index is a string
  let start = 1;
  let end = 1;
  
  while(start<n && end < n){
    // count till the next char
     while (!isNaN(parseInt(arr[end]))) {
      end++;
    }
    
    let number = 0;
    // get the number
    for(let i=start;i<end;i++){
        number = number * 10 + parseInt(arr[i])
    }
    
    // print the character
    for(let j=1;j<=number;j++){
        console.log(arr[start-1]);
    }
    
    // move the start and end to the next one
    start = end + 1;
    end = end +1;
    
  }
}

printStringNtimes("a12b3c4");
