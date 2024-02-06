// stack is Lifo 
//push : push to the top 
// pop: remove the first element on the top
//peek: returns the top element
// isEmpty: boolean to determine the stack is empty or not
//size: returns the size of the stack

class Stack{
  constructor(){
    this.stack = [];
  }
  
  push(element){
    this.stack.push(element)
  }
  
  pop(){
    if(this.isEmpty()){
      return "Stack is empty"
    }
    
    return this.stack.pop()
  }
  
  peek(){
    if(this.isEmpty()){
      return "Stack is empty"
    }
    
    return this.stack[this.stack.length - 1]
  }
  
  isEmpty(){
    return this.stack.length === 0
  }
  
  size(){
    return this.stack.length;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.pop()

console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())
