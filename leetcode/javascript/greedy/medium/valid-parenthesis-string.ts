function checkValidString(s: string): boolean {
  let minOpen: number = 0;
  let maxOpen: number = 0;

  for (const char of s) {
    if (char === "(") {
      minOpen++;
      maxOpen++;
    } else if (char === ")") {
      minOpen = Math.max(minOpen - 1, 0);
      maxOpen--;
    } else {
      // char === '*'
      minOpen = Math.max(minOpen - 1, 0);
      maxOpen++;
    }

    if (maxOpen < 0) {
      return false;
    }
  }

  return minOpen === 0;
}
