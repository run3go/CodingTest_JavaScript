function solution(queue1, queue2) {
    let answer = 0;
    
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    const total = sum1 + sum2;
    const limit = queue1.length * 4;
    
    let p1 = 0;
    let p2 = 0;
    
    while(sum1 !== sum2) {
        if(answer > limit) return -1;
        
        if(sum1 > total / 2) {
            const num = queue1[p1++];
            queue2.push(num);
            sum1 -= num;
            sum2 += num;
        } else {
            const num = queue2[p2++];
            queue1.push(num);
            sum1 += num;
            sum2 -= num;
        }
        answer++;
    }
    return answer;
}
