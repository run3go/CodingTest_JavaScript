function solution(targets) {
    targets.sort((a,b) => b[0] - a[0]);
    
    let answer = 1;
    let checkPoint = targets[0][0];
    
    for(let [s, e] of targets) {
        if (e <= checkPoint) {
            checkPoint = s;
            answer += 1;
        }
    }
    
    return answer;
}