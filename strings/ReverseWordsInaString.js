const ReverseWord = (arr, s, e) => {
  while (s < e) {
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    s++;
    e--;
  }
  return arr;
}

const ReverseWordsOfaString = (str) => {
  let arr = str.split('');
  let n = arr.length;
  let s = 0;
  for (let e = 0; e <= n; e++) {
    if (e == n || arr[e] === " ") {
      arr = ReverseWord(arr, s, e - 1);
      s = e + 1;
    }
  }
  
  arr = ReverseWord(arr, 0, n - 1);
  
  return arr.join('');
}

const result = ReverseWordsOfaString("Hello World");
console.log(result);

