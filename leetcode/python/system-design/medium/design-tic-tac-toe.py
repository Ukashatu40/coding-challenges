class TicTacToe:
    def __init__(self, n: int):
        self.n = n
        self.rows = [0] * n
        self.cols = [0] * n
        self.diagonal = 0
        self.anti_diagonal = 0

    def move(self, row: int, col: int, player: int) -> int:
        to_add = 1 if player == 1 else -1

        self.rows[row] += to_add
        self.cols[col] += to_add

        if row == col:
            self.diagonal += to_add

        if row + col == self.n - 1:
            self.anti_diagonal += to_add

        if (abs(self.rows[row]) == self.n or
                abs(self.cols[col]) == self.n or
                abs(self.diagonal) == self.n or
                abs(self.anti_diagonal) == self.n):
            return player

        return 0