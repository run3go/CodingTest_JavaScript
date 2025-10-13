function solution(info, n, m) {
    info.sort(([a,b],[c,d]) => c/d - a/b);
    let [sumA, sumB] = [0, 0];
    for(let i = 0; i < info.length; i++) {
        const [a, b] = info[i];
        if(b + sumB < m) {
            sumB += b;
        } else {
            sumA += a;
        }
    }
    
    return sumA >= n ? -1 : sumA
}

// b가 a보다 더 많이 훔쳐야 된다.
// b는 m 미만의 흔적을 남기고 최대한 많은 물건을 훔쳐야한다.
// a는 b가 남긴 나머지를 전부 훔치고, 잡히지 않아야한다. (-1)

// 
