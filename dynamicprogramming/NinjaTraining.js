/*
ninja training
*/

const arr = [[10,40,70],[20,50,80],[30,60,90]];

const NinjaTraining = (arr) => {
  
  const recursion = (day,lastTask) => {
    if(day === 0){
      let maxi=0;
      for(let i=0;i<3;i++){
        if(i !== lastTask){
          maxi = Math.max(maxi,arr[0][i])
        }
      }
      
      return maxi;
    }
    let maxi=0;
    for(let i=0;i<3;i++){
      if(i !==lastTask){
        const currMax = arr[day][i] + recursion(day-1,i);
        maxi = Math.max(maxi,currMax);
      }
    }
    
    return maxi;
  }
  
  const result = recursion(arr.length-1,3);
  
  return result;
}

const result = NinjaTraining(arr);
console.log(result);



