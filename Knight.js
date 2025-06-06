export default class Knight {
  constructor(x = 0, y = 0) {
    if(Knight.offLimits(x, y)) throw new Error(`Posição inválida: ${x}, ${y}`);
    
    this.x = x;
    this.y = y;
  }

  static offLimits(x, y) {
    return (x < 0) || (x >= 8) || (y < 0) || (y >= 8);
  }

  possibleMoves(x = this.x, y = this.y) {
    const left2Forward1 = [x - 2, y + 1];
    const left1Forward2 = [x - 1, y + 2];
    const left2Backward1 = [x - 2, y - 1];
    const left1Backward2 = [x - 1, y - 2];

    const right2Forward1 = [x + 2, y + 1];
    const right1Forward2 = [x + 1, y + 2];
    const right2Backward1 = [x + 2, y - 1];
    const right1Backward2 = [x + 1, y - 2];

    const moves = [
      left2Forward1, left1Forward2, left2Backward1, left1Backward2,
      right2Forward1, right1Forward2, right2Backward1, right1Backward2
    ];

    return moves.filter(move => !Knight.offLimits(...move));
  }

  move(start = [this.x, this.y], end) {
    if (!Array.isArray(start) || start.length !== 2 ||
        !Array.isArray(end) || end.length !== 2) {
      throw new Error("Parâmetros inválidos: use [x, y]");
    }

    if (Knight.offLimits(...start) || Knight.offLimits(...end)) {
      throw new Error(`Posição inválida: ${start} ou ${end}`);
    }

  const queue = [[start]];
  const visited = new Set([`${start[0]},${start[1]}`]);

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    if (x === end[0] && y === end[1]) {
      this.x = x;
      this.y = y;
      return path;
    }

    for (const [nx, ny] of this.possibleMoves(x, y)) {
      const key = `${nx},${ny}`;
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([...path, [nx, ny]]);
      }
    }
  }

  return "No path available";
  }

}