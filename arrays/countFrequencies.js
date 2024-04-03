const arr = [1,2,3,12,34,12,1,2,3,4,5,3,2,1,3,4,53,1,3];

const countFrequencies = (arr) => {
  let n = arr.length;
  let freq = {};
  for(let i=0;i<n;i++){
    let num = arr[i];
    if(freq[num]){
      freq[num] +=1;
    } else {
      freq[num] = 1;
    }
  }
  
  return freq;
}

console.log(countFrequencies(arr));

