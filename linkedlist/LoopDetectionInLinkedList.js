// Function to detect if a loop is present in a singly linked list.
const DetectLoop = (head) => {
    // Initialize two pointers, sp (slow pointer) and fp (fast pointer), both pointing to the head of the list.
    let sp = head; // sp points to the head of the list
    let fp = head; // fp points to the head of the list
    
    // Loop until sp, fp, and fp.next are not null.
    while (sp && fp && fp.next) {
        // Move sp one step forward.
        sp = sp.next; // move sp one step forward
        
        // Move fp two steps forward.
        fp = fp.next.next; // move fp two steps forward
        
        // If sp and fp meet at the same node, indicating a loop, return true.
        if (sp === fp) { // if sp and fp meet
            return true; // return true indicating a loop is detected
        }
    }
    
    // If fp reaches the end of the list (fp or fp.next is null), indicating no loop, return false.
    // Otherwise, continue the loop.
    return false; // return false indicating no loop is detected
}
