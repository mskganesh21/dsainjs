const graph = {
  a: ['b','c'],
  b:['d'],
  c:['e'],
  d:['f'],
  e:[],
  f:[]
}

const DepthFirstTraversal = (graph, src) => {
  const stack = [src];
  
  while(stack.length > 0){
    const curr = stack.pop();
    console.log(curr);
    
   for(let neighbor of graph[curr]) {
     stack.push(neighbor);
   }
  }
};

const DepthFirstTraversalRecursive = (graph,src) => {
  console.log(src);
  for(let neighbor of graph[src]){
    DepthFirstTraversalRecursive(graph,neighbor)
  }
}

// DepthFirstTraversal(graph,'a');

// DepthFirstTraversalRecursive(graph, 'a');

const BreadthFirstTraversal = (graph,src) => {
  
  let queue = [src];
  
  while(queue.length > 0){
    let curr = queue.shift();
    console.log(curr);
    for(let neighbor of graph[curr]){
      queue.push(neighbor);
    }
  }
}

BreadthFirstTraversal(graph, 'a');















