//Input  a2b3c4
//Output aabbbcccc

//pseudo code

// convert this into Array
// odd index values will have nos
// consider multiple digits


// function printchars(s){
  
//   //validation
  
//   //make it into an array 
//   let arr = s.split("");
//   console.log(arr)
//   // convert this into char code
//   // values at the even index is a char
  
//   //values at the odd index is a Number
  
//   let n = s.length;
//   let f = arr[0]
  
//   for(let i=1;i<n;i=i+2){
//     //convert this to number
//     let p = parseInt(arr[i])
    
//     // console.log(p)
    
//     //let me first try parseInt
    
    
//     let f = arr[i-1];
    
//     //
//     for(let j=1;j<=p;j++){
//       console.log(f)
//     }
  
//   // //returns nan 
//   // for(let i=0;i<n;i++){
//   //   console.log(parseInt(arr[i]))
//   // }
  
//   for(let i=0;i<n;i++){
//     if(parseInt(arr[i] !== 'number')){
//         continue;
//     }
    
//     //loop which starts from the index where it is a number and we have to 
//     //break the loop if the next occurence is not a number
//     let start = i;
//     let end = i;
//     while(arr[i] === 'number'){
//       end++;
//     }
    
//     // construct the number
//     // we will have to subtract end =- start
//     let digits = end - start;
    
//     let no = 0;
    
//     // construct the number
//     for(let k = start;k<end;k++){
//         no = no*10 + arr[k];
//     }
    
    
//   }
    
//   // }
  
function Printnos(s){
  
let arr = s.split("");
 let n = s.length;
 
  for(let i=0;i<n;i++){
    if(parseInt(arr[i] !== 'number')){
        continue;
    }
    
    //loop which starts from the index where it is a number and we have to 
    //break the loop if the next occurence is not a number
    let start = i;
    let end = i;
    while(arr[i] === 'number'){
      end++;
    }
    
    // construct the number
    // we will have to subtract end =- start
    let digits = end - start;
    
    let no = 0;
    
    // construct the number
    for(let k = start;k<end;k++){
        no = no*10 + arr[k];
    }
    
    for(let v=0;v<no;v++){
      console.log(arr[i-1]);
    }
    
  }

}
  
  
  

Printnos("a2b3c4");
