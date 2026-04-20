class DetectSquares {
  private points: Map<number, Map<number, number>>;

  constructor() {
    this.points = new Map();
  }

  add(point: number[]): void {
    const [x, y] = point;
    if (!this.points.has(x)) {
      this.points.set(x, new Map());
    }
    const yMap = this.points.get(x)!;
    yMap.set(y, (yMap.get(y) || 0) + 1);
  }

  count(point: number[]): number {
    const [x, y] = point;
    let count = 0;

    if (!this.points.has(x)) {
      return 0;
    }

    const yMap = this.points.get(x)!;

    for (const [colY, colCount] of yMap.entries()) {
      if (colY === y) continue; // Skip the same point

      const sideLength = Math.abs(colY - y);

      // Check for potential square on the right
      count += this.getCount(x + sideLength, y, colY) * colCount;

      // Check for potential square on the left
      count += this.getCount(x - sideLength, y, colY) * colCount;
    }

    return count;
  }

  private getCount(x: number, y1: number, y2: number): number {
    if (!this.points.has(x)) {
      return 0;
    }
    const yMap = this.points.get(x)!;
    return (yMap.get(y1) || 0) * (yMap.get(y2) || 0);
  }
}

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
