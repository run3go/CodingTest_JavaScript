function solution(diffs, times, limit) {
    let left = 1
    let right = 100000;
    let level;
    
    const calc = (level) => {
        return diffs.reduce((acc, diff, index) => {
            if(level >= diff) {
                acc += times[index];
            } else {
                const time_prev = index === 0 ? 0 : times[index - 1];
                const time = time_prev + times[index];
                acc += (diff - level) * time + times[index];
            }
            return acc;
        }, 0)
    }
    
    while(left < right) {
        level = Math.floor((left + right) / 2);
        let totalTime = calc(level)
        if(totalTime > limit) {
            left = level + 1;
        } else if(totalTime === limit) {
            return level
        } else {
            right = level;
        }
    }
    return right
}

