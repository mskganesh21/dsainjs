/*
linked list is keep multiple stacks at different location in memory and point the location using node next
first node has head before it
last node has tail after it
head ((data)(next))
we can move only from left to right only
*/

// linked list in javascript

// create a node for linked list
class Node{
    // constructor takes the data to be inserted into the node
    constructor(data) {
        // we are assigning the data to this node
        this.data = data;
        // we are assigning the tail or next to be null by default
        this.next = null
    }
}

// create a linkedlist class
class LinkedList{
    constructor(){
        // when we create a linked list we don't have any node initially so we are assigning head to null
        this.head = null;
    }
    
// adding a new node at the first of the linkedlist
    addFirst(data){
        // we are creating a new node instance
        const newNode = new Node(data) 
            // we are pointing the next to the linked list head first
            // basically we are pointing the newnode to the linked list's head 
          newNode.next = this.head;
          // we are making this node the head
          this.head = newNode;
    }
// adding a new node at the last
    addLast(data){
        const newNode = new Node(data);
        // if the linked list in empty then the head is null so we're adding at the last but it becomes first
        if(!this.head) {
            // we are making this new node the head of the linked list
            this.head = newNode;
            return 
        }
        // create a current variable and traverse through the linkedlist till you find the node which has next as null
        
        // we are taking current as the first element
        let current = this.head;
        // this loop continues till the node.next is not null
        while(current.next){
            current = current.next;
        }
        //this will add the new node at the last index
        current.next = newNode;
    }

//creating a size function to get the size of linked list
size() {
    // initializing the count variable
    let count = 0;
    // traversing through the linked list
    let current = this.head;
    while(current) {
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
        // this is adding newnode at the first
        newNode.next = this.head;
        this.head = newNode;
        return;
    }
    
    // traverse through the linked list
    let current = this.head;
    // we are traversing before the index chosen to be inserted
    for(let i=0;i< index - 1;i++) {
        current = current.next
    }
    // this will point to the node after the index
    newNode.next = current.next;
    // the current node will become the newnode
    current.next = newNode;
}

//remove a node at the top
removeTop(){
    // if head is null return
    if(!this.head){
        return;
    }
    // we are placing the head to the next node
    this.head = this.head.next
}

//remove the last index of the linked list
removeLast(){
    if(!this.head){
        return;
    }
    
    let current = this.head; 
    // this will stop before the last element
    // if we use current.next it will stop at last index
    while(current.next.next){
        current = current.next;
    }
    // we are making the next reference null
    current.next = null;
}

// remove an element from a specified index
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
        // we are pointing the next pointer to the 2nd element from the index so we are losing reference for the index and thus the element is removed from the liked list
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

linkedlist.addAt(2,7);

linkedlist.print();
