function compareWords(word1, word2) {
    const len = word1.length;
    
    let cnt = 0;
    for(let i = 0; i < len; i++) {
        if(word1[i] === word2[i]) cnt++;
    }
    
    return cnt
}

function solution(begin, target, words) {
    const visited = Array(words.length).fill(false);
    const queue = [[begin, 0]];
    visited[words.indexOf(begin)] = true;
    
    while(queue.length) {
        const [word, depth] = queue.pop();
        if(word === target) {
            return depth;
        }
        
        for(let i = 0; i < words.length; i++) {
            if(visited[i]) continue;
            
            const cnt = compareWords(word, words[i])
            if(cnt === begin.length - 1) {
                queue.push([words[i], depth + 1])
                visited[i] = true;
            } 
        }
    }
    
    return 0;
}