function solution(plans) {
    function timeToMin(time) {
        const [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }
    const stack = [];
    const queue = plans
    .map(([name, start, playtime]) => [name, timeToMin(start), Number(playtime)])
    .sort((a,b) => a[1] - b[1]);
    
    while (queue.length) {
        const [name, start, playtime] = queue.shift();
        
        stack.forEach((e, idx) => {
            if(start < e[1]) stack[idx][1] += playtime;
        })
        stack.push([name, start + playtime])
    }
    const answer = stack.sort((a,b) => a[1] - b[1]).map(e => e[0]);
    return answer;
}