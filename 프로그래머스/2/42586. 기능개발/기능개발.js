function solution(progresses, speeds) {
    progresses = progresses.map((pro, idx) => Math.ceil((100 - pro) / speeds[idx]));
    
    const result = [];
    
    let count = 0;
    let maxDay = progresses[0];
    
    for(let i = 0; i < progresses.length; i++) {
        if(maxDay >= progresses[i]) {
            count++;
        } else {
            result.push(count);
            count = 1;
            maxDay = progresses[i];
        }
    }
    
    result.push(count);
    
    return result;
}