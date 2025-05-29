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
    const left2Forward1 = { x: x - 2, y: y + 1 };
    const left1Forward2 = { x: x - 1, y: y + 2 };
    const left2Backward1 = { x: x - 2, y: y - 1 };
    const left1Backward2 = { x: x - 1, y: y - 2 };

    const right2Forward1 = { x: x + 2, y: y + 1 };
    const right1Forward2 = { x: x + 1, y: y + 2 };
    const right2Backward1 = { x: x + 2, y: y - 1 };
    const right1Backward2 = { x: x + 1, y: y - 2 };

    const moves = {
      left2Forward1,
      left1Forward2,
      left2Backward1,
      left1Backward2,
      right2Forward1,
      right1Forward2,
      right2Backward1,
      right1Backward2
    };

    return Object.fromEntries(
      Object.entries(moves).filter(([_, move]) => !Knight.offLimits(move.x, move.y))
    );
  }
}