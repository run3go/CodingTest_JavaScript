function solution(triangle) {
    const len = triangle.length;
    const arr = Array.from({length: len}, () => Array(len).fill(0))
    
    arr[0][0] = triangle[0][0];
    for(let i = 0; i < len - 1; i++) {
        for(let j = 0; j < i + 1; j++) {
            const left = arr[i][j] + triangle[i+1][j];
            arr[i+1][j] = Math.max(left, arr[i+1][j]);
            
            arr[i+1][j+1] = arr[i][j] + triangle[i+1][j+1];
        }
    }
    
    return Math.max(...arr[len - 1]);
}