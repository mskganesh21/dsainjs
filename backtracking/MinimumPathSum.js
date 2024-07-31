console.log("Hello, World!");

const MinPathSum = (grid) => {
  
  let m = grid.length;
  let n = grid[0].length;
  let Output = Infinity;
  
  let moves = [[1,0],[0,1]];
  
  const BackTrack = (grid, currRow, currCol, sum) => {
    
    // Include the current cell's value in the sum
    sum += grid[currRow][currCol];

    if (currRow === m - 1 && currCol === n - 1) {
      Output = Math.min(Output, sum);
      return;
    }  
    
    const isValidMove = (r, c) => {
      if (r < 0 || r >= m || c < 0 || c >= n) return false;
      return true;
    }
  
    for (let move of moves) {
      if (isValidMove(currRow + move[0], currCol + move[1])) {
        BackTrack(grid, currRow + move[0], currCol + move[1], sum);
      }
    }
  }
  
  BackTrack(grid, 0, 0, 0);
  
  return Output;
}

let grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]];

console.log(MinPathSum(grid)); // Output should be 7
