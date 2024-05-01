// Node class definition
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const InsertAtFirst = (head, x) => {
    let temp = new Node(x); // Create a new node with the given data

    if (!head) { // If the list is empty, the new node becomes the head
        return temp;
    }

    temp.next = head; // Make the new node point to the current head
    head = temp; // Update the head pointer to the new node

    return head; // Return the new head of the list
}
