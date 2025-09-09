function solution(n) {
    let arr = Array.from({length : n}, (v, i) => Array(i+1).fill(0))
    let num = 0;
    let currentX = -1;
    let currentY = 0;
    while(n > 0) {
        for(let i = 0; i < n; i++) {
            arr[++currentX][currentY] = ++num;
        }
        n--;
        for(let i = 0; i < n; i++) {
            arr[currentX][++currentY] = ++num;
        }
        n--;
        for(let i = 0; i < n; i++) {
            arr[--currentX][--currentY] = ++num;
        }
        n--;
    }
    
    return arr.flat()
}

