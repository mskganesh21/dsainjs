const arr = [0,0,1,1,1,2,2,3,3,4];

 function unique(arr){
     let n = arr.length;
     
     if(n === 0){
         return 'Please enter a valid array'
     }
     
     let i=0;
     for(let j=1;j<n;j++){
         if(arr[j] !== arr[i]) {
             i++;
             arr[i] = arr[j];
         } else {
             
         }
     }
     return i+1;
 }
 
 let result = unique(arr);
 console.log(result);
