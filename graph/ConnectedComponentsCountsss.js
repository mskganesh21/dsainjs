const ConnectedComponentCount = (graph) => {
    let count = 0;
    const visited = new Set();
    for(let node in graph){
      console.log(visited)
      let res = explore(graph,node,visited);
      if(res === true) count++;
    }
    
    return count;
}

const explore = (graph,curr,visited) => {
  if(visited.has(String(curr))) return false;
  
  visited.add(String(curr));
  for(let neighbor of graph[curr]){
    explore(graph,neighbor,visited);
  }
  
  return true;
}


const graph = {
  0:[8,1,5],
  1: [0],
  5: [0,8],
  8: [0,5],
  2: [3,4],
  3: [2,4],
  4: [3,2],
}
 
 
console.log(ConnectedComponentCount(graph)) 
