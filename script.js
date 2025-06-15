knightMoves([0,0],[3,3]) 
function knightMoves(start, end) {
  const directions = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  function bfs(start, end) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
      const path = queue.shift();
      const [x, y] = path[path.length - 1];

      if (x === end[0] && y === end[1]) {
        return path;
      }

      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;

        if (isValid(newX, newY)) {
          const newPos = [newX, newY];
          if (!visited.has(newPos.toString())) {
            visited.add(newPos.toString());
            queue.push([...path, newPos]);
          }
        }
      }
    }
    return [];
  }

  return bfs(start, end);
}
