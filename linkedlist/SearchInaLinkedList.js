const SearchInALinkedList = (head,target) => {
  if(!head) return -1;
  
  let curr = head;
  let count =1;
  while(curr){
    if(curr.data === target) return count;
    curr = curr.next;
    count++;
  }
  
  return -1;
}
