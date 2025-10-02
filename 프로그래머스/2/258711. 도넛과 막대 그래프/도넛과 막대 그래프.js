function solution(edges) {
    const answer = Array(4).fill(0);
    const counter = edges.reduce((res, edge) => {
        const [input, output] = edge;
        if(!res[input]) {
            res[input] = [0, 1];
        } else {
            res[input][1]++;
        }
        
        if(!res[output]) {
            res[output] = [1, 0];
        } else {
            res[output][0]++;
        }
        
        return res;
    }, {})
    
    for(const node in counter) {
        const [i, o] = counter[node];
        if(i === 0 && o >= 2) answer[0] = +node;
        
        if(i >= 2 && o === 2) answer[3]++;
        
        if(i >= 1 && o === 0) answer[2]++;
    }
    
    answer[1] = edges.filter(v => v[0] === answer[0]).length - answer[3] - answer[2]
    
    return answer;
}