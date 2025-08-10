function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    const visited = Array.from({length: rows}, () => Array.from({length: cols}, () => false));
    
    const queue = [];
    let end = [];
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(board[i][j] === 'R') {
                queue.push([i, j, 0]);
                visited[i][j] = true;
            } else if (board[i][j] === 'G') {
                end = [i, j];
            }
        }
    }
    
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    
    while(queue.length > 0) {
        const [cx, cy, cnt] = queue.shift();
        
        if(cx === end[0] && cy === end[1]) {
            return cnt;
        }
        
        for(let i = 0; i < 4; i++) {
            let nx = dx[i] + cx;
            let ny = dy[i] + cy;
            while(true) {
                if(nx < 0 || ny < 0 || nx >= rows || ny >= cols || board[nx][ny] === 'D') {
                    nx -= dx[i];
                    ny -= dy[i];
                    break;
                }
                nx += dx[i];
                ny += dy[i];
            }
            if(!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, cnt + 1]);
            }
        }
    }
    return -1
}