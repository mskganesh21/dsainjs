// quick Sort algorithm
// take the first element as the pivot
// take 2 empty arrays as left and right
// numbers left than pivot no put it in left array
// this is done using recursion

function quicksort(arr){
    
    if(arr.length <= 1){
      return arr;
    }
    
    let pivot = arr[0];
    let left = [];
    let right = [];
    
    for(let i=1;i<arr.length;i++){
        if(arr[i] < pivot){
          left.push(arr[i]);
        } else if (arr[i] > pivot){
          right.push(arr[i]);
        }
    }
    
    return [...quicksort(left), pivot, ...quicksort(right)]
}

const arr = [1,5,2,3];

console.log(quicksort(arr));
