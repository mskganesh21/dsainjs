//given an input string s, reverse the order of words

const reverseWords = function (s){
  const splits = s.split(" ");
  const stack = [];
  
  for(let i of splits){
    stack.push(i)
  }
  
  let finalString = "";
  
  while(stack.length){
    const current = stack.pop();
    if(current){
      finalString += " " + current;
    }
  }
  
  return finalString.trim();
}

console.log(reverseWords("the sky is blue"))
