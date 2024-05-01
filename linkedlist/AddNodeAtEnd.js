// Node class definition
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const InsertAtEnd = (head, x) => {
    let temp = new Node(x); // Create a new node with the given data

    if (!head) { // If the list is empty, the new node becomes the head
        return temp;
    }

    let curr = head;

    // Traverse the list to find the last node
    while (curr.next !== null) {
        curr = curr.next;
    }

    // Insert the new node at the end of the list
    curr.next = temp;

    return head;
}
