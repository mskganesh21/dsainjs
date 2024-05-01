// Node class definition
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const DeleteFirstNode = (head) => {
    if (!head) return null; // If the list is empty, return null

    let curr = head;

    if (curr.next) { // If the list has more than one node
        head = curr.next; // Update the head pointer to the second node
        return head; // Return the new head of the list
    } else { // If the list has only one node
        return null; // Set head to null, effectively deleting the only node
    }
}
