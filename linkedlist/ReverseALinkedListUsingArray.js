const ReverseaLinkedList = (head) => {
  if(!head) return ;
  let curr = head;
  let temp = [];
  while(curr){
  let data = curr.data;
    temp.push(data);
    curr=curr.next;
  }

  let curr = head;
  while(curr){
  let data = temp.pop();
    curr.data = data;
    curr = curr.next;
  }

  return head;
}
