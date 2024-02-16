const arr = [1, 2, 3, 0, 5, 4, 5];

function linearsearch(arr, i, target) {
  let resarr = [];
  if (i === arr.length) {
    return resarr;
  }

  if (arr[i] === target) {
    resarr = [i];
  }

  let res = linearsearch(arr, i + 1, target);
  resarr = resarr.concat(res);
  return resarr;
}

const response = linearsearch(arr, 0, 5);

console.log(response);
