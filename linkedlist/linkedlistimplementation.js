// linked list in javascript

// create a node for linked list
class Node{
    // constructor takes the data to be inserted into the node
    constructor(data) {
        // we are assigning the data to this node
        this.data = data;
        // we are assigning the tail or next to be null 
        this.next = null
    }
}

// create a linkedlist class
class LinkedList{
    constructor(){
        // when we create a linked list we don't have the head initially
        this.head = null;
    }
    
// adding a new node at the first of the linkedlist
    addFirst(data){
        // we are creating a new node instance
        const newNode = new Node(data) 
            // we are referencing the head of the linked list
          newNode.next = this.head;
          // we are changing the head to the current node's tail/next
          this.head = newNode;
    }
// adding a new node at the last
    addLast(data){
        const newNode = new Node(data);
        // if the linked list in empty then the head is null so we're adding at the last but it becomes first
        if(!this.head) {
            this.head = newNode;
            return 
        }
        // create a current variable and traverse through the linkedlist till you find the node which has next as null
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        //this will add the new node at the last index
        current.next = newNode;
    }

//creating a size function to get the size of linked list
size() {
    let count = 0;
    let current = this.head;
    while(current.next) {
        count++;
        current = current.next;
    }
    return count;
}
    
// adding a new node at a chosen index
addAt(index, data) {
    // check if the index specified is a valid index
    if(index < 0 || index > this.size()){
        console.error("Invalid Index");
        return;
    }
    // create a new node
    const newNode = new Node(data);
    if(index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
    }
    
    // traverse through the linked list
    let current = this.head;
    for(let i=0;i< index - 1;i++) {
        current = current.next
    }
    newNode.next = current.next;
    current.next = newNode;
}

//remove a node at the top
removeTop(){
    if(!this.head){
        return;
    }
    
    this.head = this.head.next
}

//remove the last index of the linked list

removeLast(){
    if(!this.head){
        return;
    }
    
    let current = this.head;
    while(current.next.next){
        current = current.next;
    }
    current.next = null;
}

removeAt(index){
    if(index < 0 || index > this.size()){
        console.error("Invalid Index");
        return;
    }
    if(index === 0){
        this.head = this.head.next;
        return;
    }
    
    let current = this.head;
    for(let i=0 ;i<index-1;i++){
        current = current.next;
    }
    if(current.next){
        current.next = current.next.next;
    }
}

print(){
    let current = this.head;
    while(current){
        console.log(current.data);
        current = current.next;
    }
}

}


const linkedlist = new LinkedList();

linkedlist.addFirst(5);
linkedlist.addFirst(3);
linkedlist.addFirst(8);

linkedlist.addLast(6);

console.log(linkedlist.size(), "size")

linkedlist.removeTop();

linkedlist.addFirst(8);


linkedlist.print();
