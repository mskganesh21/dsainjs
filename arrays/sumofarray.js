const arr = [1,2,3,'e','5'];
// const arr = [1,2,3];

function sumofnos(arr){
    return arr.reduce((acc,curr) => {
        const num = parseInt(curr);
        if(!isNaN(num)){
        return acc = acc + num;
    } else {
        return acc;
    }
    },0);
}

console.log(sumofnos(arr));

let result = isNaN(5);

console.log(result);
