/*
merge sort
merge sort is divide and conquer algortithm
divide the array in half
again divide the left half array into half and so on..
at the end with 2 values and then compare and swap

now when we have the 2 half
make 2 pointers and then swap accordingly
*/

const mergeSort = (arr) => {
    //base case
    if(arr.length <=1){
      return arr;
    }
    let mid = Math.floor(arr.length/2);
    
    let left = mergeSort(arr.slice(0,mid));   //o(log n)
    let right = mergeSort(arr.slice(mid));
    
    return merge(left,right);
}

const merge = (left,right) => {  //o(n)
      let sortedArr = [];
      while(left.length && right.length){
        if(left[0] < right[0]){
          sortedArr.push(left.shift())
        } else {
          sortedArr.push(right.shift())
        }
      }
      
      return [...sortedArr, ...left,...right]
}

const result = mergeSort([8,3,5,4,7,6,1,2]);
console.log(result)

//tc: o(n log n)
//sc: o(n )








