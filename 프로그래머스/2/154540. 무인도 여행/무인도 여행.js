function solution(maps) {
    const [R, C] = [maps.length, maps[0].length];
    const visited = Array.from({length: R}, () => Array.from({length: C}, () => 0))
    const queue = [];
    const result = [];
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    function bfs (a, b) {
        let cnt = 0;
        const queue = [[a,b]];
        cnt += parseInt(maps[a][b]);
        visited[a][b] = 1;
        
        while(queue.length) {
            let [x, y] = queue.shift();
            for(let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                if(nx >= 0 && nx < R && ny >= 0 && ny < C && maps[nx][ny] !== "X" && !visited[nx][ny]) {
                    cnt += parseInt(maps[nx][ny]);
                    visited[nx][ny] = 1;
                    queue.push([nx, ny]);
                }
            }
        }
        result.push(cnt);
    }
    
    for(let i = 0; i < R; i++) {
        for(let j = 0; j < C; j++) {
            if(!visited[i][j] && maps[i][j] !== "X") {
                bfs(i, j);
            }
        }
    }
    if(!result.length) return [-1];
    return result.sort((a,b) => a - b);
}