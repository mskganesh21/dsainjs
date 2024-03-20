class Queue {
  constructor() {
    this.items = [];
  }
  
  enqueue(element) {
    this.items.push(element);
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }
  
  isEmpty() {
    return this.size() === 0;
  }
  
  peek() {
    if (this.isEmpty()) {
      return "No elements in the queue";
    }
    return this.items[0];
  }
  
  size() {
    return this.items.length;
  }
  
  printQueue() {
    let string = "";
    for (let i = 0; i < this.size(); i++) {
      string += this.items[i] + ",";
    }
    console.log("Queue: " + string);
  }
}

const myQueue = new Queue();
myQueue.enqueue(5);
myQueue.enqueue(8);
myQueue.printQueue();
