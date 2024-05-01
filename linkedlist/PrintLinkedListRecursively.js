const PrintRecursively = (head) => {
    if (head === null) return; // Base case: If head is null, terminate the recursion
    console.log(head.data); // Print the data of the current node
    PrintRecursively(head.next); // Recursively call PrintRecursively for the next node
}
