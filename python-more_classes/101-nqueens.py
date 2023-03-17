#!/usr/bin/python3
import sys

def is_safe(board, row, col, N):
        # Check if there is a queen in the same column
            for i in range(row):
                        if board[i][col] == 1:
                                        return False

                                        # Check if there is a queen in the upper left diagonal
                                            for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
                                                        if board[i][j] == 1:
                                                                        return False

                                                                        # Check if there is a queen in the upper right diagonal
                                                                            for i, j in zip(range(row, -1, -1), range(col, N)):
                                                                                        if board[i][j] == 1:
                                                                                                        return False

                                                                                                        return True

                                                                                                    def solve_n_queens_util(board, row, N):
                                                                                                            if row == N:
                                                                                                                        solution = []
                                                                                                                                for i in range(N):
                                                                                                                                                for j in range(N):
                                                                                                                                                                    if board[i][j] == 1:
                                                                                                                                                                                            solution.append([i, j])
                                                                                                                                                                                                    print(solution)
                                                                                                                                                                                                            return

                                                                                                                                                                                                            for col in range(N):
                                                                                                                                                                                                                        if is_safe(board, row, col, N):
                                                                                                                                                                                                                                        board[row][col] = 1
                                                                                                                                                                                                                                                    solve_n_queens_util(board, row+1, N)
                                                                                                                                                                                                                                                                board[row][col] = 0

                                                                                                                                                                                                                                                                def solve_n_queens(N):
                                                                                                                                                                                                                                                                        if not isinstance(N, int):
                                                                                                                                                                                                                                                                                    print("N must be a number")
                                                                                                                                                                                                                                                                                            sys.exit(1)

                                                                                                                                                                                                                                                                                                if N < 4:
                                                                                                                                                                                                                                                                                                            print("N must be at least 4")
                                                                                                                                                                                                                                                                                                                    sys.exit(1)

                                                                                                                                                                                                                                                                                                                        board = [[0 for i in range(N)] for j in range(N)]
                                                                                                                                                                                                                                                                                                                            solve_n_queens_util(board, 0, N)

                                                                                                                                                                                                                                                                                                                            if __name__ == '__main__':
                                                                                                                                                                                                                                                                                                                                    if len(sys.argv) != 2:
                                                                                                                                                                                                                                                                                                                                                print("Usage: nqueens N")
                                                                                                                                                                                                                                                                                                                                                        sys.exit(1)

                                                                                                                                                                                                                                                                                                                                                            try:
                                                                                                                                                                                                                                                                                                                                                                        N = int(sys.argv[1])
                                                                                                                                                                                                                                                                                                                                                                            except ValueError:
                                                                                                                                                                                                                                                                                                                                                                                        print("N must be a number")
                                                                                                                                                                                                                                                                                                                                                                                                sys.exit(1)

                                                                                                                                                                                                                                                                                                                                                                                                    solve_n_queens(N)
