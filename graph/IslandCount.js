const IslandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited) === true) {
        count++;
      }
    }
  }
  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid[0].length;
  if (!rowInBounds || !colInBounds) return false;

  if (grid[r][c] === 'W') return false;

  const pos = `${r},${c}`;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);

  return true;
};

// Example usage:
const grid = [
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'L'],
  ['W', 'L', 'W', 'L', 'L'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'L', 'L', 'W', 'W'],
];

const result = IslandCount(grid);
console.log(result); // Output: 4
