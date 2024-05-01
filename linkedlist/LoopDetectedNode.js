const LoopDetectionData = (head) => {
    let sp=head;
    let fp=head;
    
    while(sp && fp && fp.next){
      fp=fp.next.next;
      sp=sp.next;
      
      if(sp === fp){
        return sp.data;
      }
    }
    
    return null;
}
