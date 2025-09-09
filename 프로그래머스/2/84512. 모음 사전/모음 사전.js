function solution(word) {
    let alphabet = ['A', 'E', 'I', 'O', 'U'];
    let dic = [];
    function dfs(cur, len) {
        if(len > 5) return;
        
        dic.push(cur);
        
        for(let i = 0; i < alphabet.length; i++) {
            dfs(cur+alphabet[i], len+1);
        }
    }
    dfs('', 0);
    return dic.indexOf(word);
}