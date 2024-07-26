const GenerateAllSubsets = (set) => {
  let subsets = [];
  
  const BackTrack = (start,curr) => {
    //first add the subset to the res arr
    
    subsets.push([...curr]);
    
    //explore adding each element to the subset
    
    for (let i=start;i<set.length;i++){
      
      //add the curr element 
      
      curr.push(set[i]);
      
      //call backtrack 
      
      BackTrack(i+1,curr);
      
      // remove the added element 
      
      curr.pop();
    }
    
    
  }
  
      //call backtrack 
    
    BackTrack(0,[]);
    
  
  
  return subsets;
}



// Example usage
const set = [1, 2, 3];
console.log(GenerateAllSubsets(set));


const GeneratePermutations = (arr) => {
  let res = [];
  
  const BackTrack = (curr) => {
    
    //if curr permutation is complete then add it to res
    if(curr.length === arr.length) {
      res.push([...curr]);
      return;
    }
    
    //try adding each unused element
    for(let i=0;i<arr.length;i++){
      let element = arr[i];
      
      if(!(curr.includes(element))){
        //push the element
        curr.push(element);
        
        //call backtrack 
        
        BackTrack(curr);
        
        //remove the element
        
        curr.pop();
        
      }
    }
  }
  
  BackTrack([])
  
  return res;
}


// Example usage
const arr = [1, 2, 3];
console.log(GeneratePermutations(arr));




const FindSubsetSum = (target, nums) => {
  const result = [];
  
  const BackTrack = (start, currSum, currSubSet) => {
    // If currSum is equal to target then add to result
    if (currSum === target) {
      result.push([...currSubSet]);
      return;
    }
    
    // If currSum exceeds target or we've reached the end of the array, return
    if (currSum > target || start === nums.length) {
      return;
    }
    
    // Try including the current number
    currSubSet.push(nums[start]);
    
    // Call BackTrack with updated sum
    BackTrack(start + 1, currSum + nums[start], currSubSet);
    
    // Backtrack: remove the last added number
    currSubSet.pop();
    
    // Try without the current number
    BackTrack(start + 1, currSum, currSubSet);
  }
  
  BackTrack(0, 0, []);
  
  return result;
}

// Example usage
const numbers = [3, 34, 4, 12, 5, 2];
const target = 9;
console.log(FindSubsetSum(target, numbers));



