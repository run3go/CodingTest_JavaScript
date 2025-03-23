function solution(n, words) {
    const usedWord = new Set();
    let prevWord = words[0][0];
    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        if(usedWord.has(word) || word[0] !== prevWord) {
            return [i % n + 1, Math.floor(i / n + 1)];
        }
        usedWord.add(word);
        prevWord = word.slice(-1);
    }
    return [0,0];
}