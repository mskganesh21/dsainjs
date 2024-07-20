const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

const DepthFirstTraversal = (graph,source) => {
  let stack = [source];
  
  while(stack.length > 0) {
    let curr = stack.pop();
    console.log(curr);
    
    for(let neighbor of graph[curr]){
      stack.push(neighbor);
    }
  }
}

console.log(DepthFirstTraversal(graph,'a'))


const DepthFirstTraversalR = (graph,source) => {
  console.log(source);
  for(let neighbor of graph[source]){
    DepthFirstTraversalR(graph,neighbor)
  }
}

console.log(DepthFirstTraversalR(graph,'a'))



const BreadthFirstTraversal = (graph,source) => {
  let queue = [source];
  
  while(queue.length > 0){
    let curr = queue.shift();
    console.log(curr);
    for(let neighbor of graph[curr]){
      queue.push(neighbor);
    }
  }
}

console.log(BreadthFirstTraversal(graph,'a'))






































