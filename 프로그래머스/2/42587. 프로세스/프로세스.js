function solution(priorities, location) {
    let queue = [...priorities.map((el, idx) => [el, idx])];
    let answer = [];
    while(queue.length) {
        let current = queue.shift();
        if(queue.some((e) => e[0] > current[0])) {
            queue.push(current);
        } else {
            answer.push(current);
        }
    }
    return answer.findIndex((el) => el[1] === location) + 1;
}