/*
selection sort

step 1:
select minimums and put it in first place
ans swap the nums.

step 2: 
find minimums from the next index
and swap the nums.

and so on........

if there are 5 elements then there will be 4 steps and so on..

TC : O(n*(n+1) / 2) which is approx O(n^2)

*/


const selectionSort = (arr) => {
  let n = arr.length;

  // run the loop from 0 to n-2 index
  for(let i = 0; i < n - 1; i++){
    //keep the starting element as minimun number
    let mini = i;
    //start from the next element and run the loop till end
    for(let j = i + 1; j < n; j++){
      //if lower then update mini
      if(arr[j] < arr[mini]){
        mini = j;
      }
    }
    
    // Swap arr[i] with arr[mini]
    let temp = arr[i];
    arr[i] = arr[mini];
    arr[mini] = temp;
  }
  
  return arr;
}

let arr = [6, 5, 4, 3, 1, 2];
console.log(selectionSort(arr));




