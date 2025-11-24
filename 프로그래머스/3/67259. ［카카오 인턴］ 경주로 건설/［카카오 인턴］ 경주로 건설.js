function solution(board) {
    const N = board.length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const visited = Array.from({length: N}, () =>
                              Array.from({length: N}, () => Array(4).fill(0)));
    
    const queue = [[0, 0, -1, 0]];
    let answer = Infinity;
    
    while(queue.length) {
        const [x, y, prevdir, cost] = queue.pop();
        
        for(let dir = 0; dir < directions.length; dir++) {
            const [dx, dy] = directions[dir];
            const nx = x + dx;
            const ny = y + dy;
            let newCost = 0;
            
            if(nx < 0 || nx >= N || ny < 0 || ny >= N) {
                continue;
            }
            
            if(board[ny][nx] === 1 || (nx === 0 && ny === 0)) {
                continue;
            }
            
            if(prevdir === - 1 || (prevdir - dir) % 2 === 0) {
                newCost = cost + 100;
            } else {
                newCost = cost + 600;
            }
            
            if(nx === N - 1 && ny === N - 1) {
                answer = Math.min(answer, newCost);
            } else if(visited[ny][nx][dir] === 0 || visited[ny][nx][dir] > newCost) {
                queue.push([nx, ny, dir, newCost]);
                visited[ny][nx][dir] = newCost;
            }
        }
    }
    return answer;
}