export function isItSafe(row, col, board) {
    let r = row - 1;
    let c = col;
    // vertically up
    while (r >= 0) {
        if (board[r][c]) {
            return false;
        }
        r--;
    }
    r = row + 1;
    c = col;
    // vertically down
    while (r < board.length) {
        if (board[r][c]) {
            return false;
        }
        r++;
    }
    // diagonally left
    r = row - 1;
    c = col - 1;
    while (c >= 0 && r >= 0) {
        if (board[r][c]) {
            return false;
        }
        r--;
        c--;
    }
    // diagonally right
    r = row - 1;
    c = col + 1;

    while (c < board[0].length && r >= 0) {
        if (board[r][c]) {
            return false;
        }
        r--;
        c++;
    }
    // diagonally lower right
    r = row + 1;
    c = col + 1;
    while (c < board[0].length && r < board[0].length) {
        if (board[r][c]) {
            return false;
        }
        r++;
        c++;
    }
    // diagonally lower left
    r = row - 1;
    c = col - 1;
    while (r > 0 && c > 0) {
        if (board[r][c]) {
            return false;
        } 
        r--;
        c--;
    }
   //left
   
    r = row;
    c= col-1;
    while (c >= 0) {
        if (board[r][c]) {
            return false;
        }
        c--;
    }
    //right
    r = row;
    c = col+1;
    while ( c < board[0].length) {
        if (board[r][c]) {
            return false;
        }
       c++;
    }
    return true;
}
