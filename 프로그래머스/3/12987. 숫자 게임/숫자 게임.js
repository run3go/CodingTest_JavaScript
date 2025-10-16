function solution(A, B) {
    A.sort((a,b) => a - b);
    B.sort((a,b) => a - b);
    let result = 0;
    let cnt = 0;
    
    for(let i = 0; i < A.length; i++) {
        while(cnt < B.length) {
            if(B[cnt++] > A[i]) {
                result++;
                break;
            }
        }
    }
    return result;
}