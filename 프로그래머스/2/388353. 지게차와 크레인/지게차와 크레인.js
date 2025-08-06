function solution(storage, requests) {
    let answer = 0;
    
    const arr = storage.map((row) => row.split(""));
    
    const n = arr.length;
    const m = arr[0].length;
    
    const blankArr = Array.from({length: n}, () => Array.from({length: m}, () => false));
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    
    const findRoute = (x, y) => {
        const visited = Array.from({length: n}, () => Array.from({length: m}, () => false));
        const queue = [[x,y]];
        visited[y][x] = true;
        while(queue.length) {
            const [cx, cy] = queue.shift();
            
            for(let i = 0; i < 4; i++) {
                const nx = cx + dx[i];
                const ny = cy + dy[i];
                
                if(nx < 0 || ny < 0 || nx >= m || ny >= n) {
                    blankArr[y][x] = true;
                    return;
                }
                if(arr[ny][nx] === '' && !visited[ny][nx]) {
                    queue.push([nx, ny]);
                    visited[ny][nx] = true;
                }
            }
        }
    }
    
    const setBlank = () => {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
                if(blankArr[i][j]) {
                    arr[i][j] = '';
                }
            }
        }
    }
    
    const useLift = (type) => {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
                if(arr[i][j] === type) {
                    findRoute(j, i);
                }
            }
        }
    }
    
    const useCrane = (type) => {
      for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(arr[i][j] === type) {
                blankArr[i][j] = true;
            }
        }
       }
    }
    
    requests.forEach((req) => {
        if(req.length === 1) {
            useLift(req);
        } else {
            useCrane(req[0]);
        }
        setBlank();
    })
    
    return arr.reduce((acc, cur) => {
        const cnt = cur.filter((item) => item.length).length;
        return acc + cnt;
    },0)
}
