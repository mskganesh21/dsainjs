const depthFirstPrint = (graph,source) => {
  const stack = [source];
  
  while(stack.length > 0){
    let curr = stack.pop();
    console.log(curr);
    
    for(let neighbor of graph[curr]){
      stack.push(neighbor);
    }
  }
}

const depthFirstPrintRecursively = (graph,source) => {
  console.log(source);
  for(let neighbor of graph[source]){
    depthFirstPrintRecursively(graph,neighbor)
  }
};

const breadthFirstPrint = (graph,source) => {
  const queue = [source];
  //shift and push
  while(queue.length > 0){
    const current = queue.shift();
    console.log(current);
    
    for(let neighbor of graph[current]){
      queue.push(neighbor);
    }
  }
}


const hasPath = (graph,src,dst) => {
  if(src === dst) return true;
  
  for(let neighbor of graph[src]){
    if(hasPath(graph,neighbor,dst) === true) return true;
    
  }
  return false
}

const hasPathIteratively = (graph,src,dst) => {
  const queue = [src];
  while(queue.length > 0){
    const current = queue.shift();
    if(current === dst) return true;
    for(let neighbor of graph[current]){
      queue.push(neighbor)
    }
  }
  
  return false;
}


const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};



depthFirstPrint(graph,'a');
console.log("gap");
depthFirstPrintRecursively(graph,'a');
console.log("gap");
breadthFirstPrint(graph,'a');
