function solution(gems) {
    let answer = [1, gems.length];
    const min = new Set(gems).size
    const map = new Map();
    
    for(let i = 0; i < gems.length; i++) {
        map.delete(gems[i]);
        map.set(gems[i], i + 1);
        if(min === map.size) {
            const temp = [map.values().next().value, i + 1]
            if(answer[1] - answer[0] > temp[1] - temp[0]) answer = temp;
        }
    }
    
    return answer;
}