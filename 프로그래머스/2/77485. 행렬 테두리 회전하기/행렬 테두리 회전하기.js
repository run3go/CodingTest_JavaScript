function solution(rows, columns, queries) {
    let answer = [];
    const arr = Array.from({length: rows}, (_, i) => Array.from({length: columns}, (_, j) => i * columns + j + 1));
    queries.forEach(([x1,y1,x2,y2]) => {
        const start = arr[x1 - 1][y1 - 1];
        const nums = [start];
        
        //위에서 아래로
        for(let i = x1 - 1; i < x2 - 1; i++) {
            arr[i][y1 - 1] = arr[i + 1][y1 - 1];
            nums.push(arr[i][y1 - 1])
        }
        
        //왼쪽에서 오른쪽으로
        for(let i = y1 - 1; i < y2 - 1; i++) {
            arr[x2 - 1][i] = arr[x2 - 1][i + 1];
            nums.push(arr[x2 - 1][i])
        }
        
        //아래에서 위로
        for(let i = x2 - 1; i > x1 - 1; i--) {
            arr[i][y2 - 1] = arr[i - 1][y2 - 1];
            nums.push(arr[i][y2 - 1])
        }
        
        //오른쪽에서 왼쪽으로
        for(let i = y2 - 1; i > y1 - 1; i--) {
            arr[x1 - 1][i] = arr[x1 - 1][i - 1];
            nums.push(arr[x1 - 1][i])
        }
        arr[x1 - 1][y1] = start;
        answer.push(Math.min(...nums))
    })
    return answer;
}