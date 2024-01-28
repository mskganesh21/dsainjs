/* Selection sort */

const arr = [9,1,8,2,7,3,6,4,5];

const SelectionSort = (array) => {
    //array length
    let l = array.length;
    
    //start the loop and go till the second last index
    for(let i =0 ;i< l -2;i++){
        // keep a minimun number
            let min_num = array[i];
            let min_num_index = i;
        for(let j= i+1; j< l;j++) {
            //if no is less than min then make it min
            if(array[j] < min_num){
                min_num = array[j];
                min_num_index = j;
            }
        }
        //store the min number in a temp variable and swap the numbers
        let temp = array[i];
        array[i] = min_num;
        array[min_num_index] = temp;
    }
    
    return array;
}

const res = SelectionSort(arr);

console.log(res);
