function solution(n) {
    let answer = 0;
    while(n > 1) {
        if(n % 2 !== 0) {
            answer++;
            n--;
        }
        n /= 2;
    }
    return answer + 1;
}

