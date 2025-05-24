function solution(diffs, times, limit) {
    let left = 1
    let right = 100000;
    let level;
    
    while(left < right) {
        level = Math.floor((left + right) / 2);
        let totalTime = diffs.reduce((acc, diff, index) => {
            if(level >= diff) {
                acc += times[index];
            } else {
                const time_prev = index === 0 ? 0 : times[index - 1];
                const time = time_prev + times[index];
                acc += (diff - level) * time + times[index];
            }
            return acc;
        }, 0)
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

// 퍼즐 난이도 diff
// 현재 퍼즐의 소요시간 time_cur
// 이전 퍼즐의 소요시간 time_prev
// 숙련도 level
// 제한시간 limit

// 난이도 <= 숙련도 [time_cur만큼 시간 소요]
// 난이도 > 숙련도 [diff - level] * [time_prev + time_cur] + time_cur

// 요구값 : 제한 시간 내로 시간을 소요하는 최소 숙련도

