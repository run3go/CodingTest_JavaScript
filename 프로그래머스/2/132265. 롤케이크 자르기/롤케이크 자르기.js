function solution(topping) {
    let result = 0;
    const map = new Map();
    const set = new Set();
    for(let i = 0; i < topping.length; i++) {
        map.set(topping[i], (map.get(topping[i]) || 0) + 1);
    }
    
    topping.forEach((t) => {
        set.add(t);
        const n = map.get(t);
        if(n === 1) {
            map.delete(t);
        } else {
            map.set(t, map.get(t) - 1);
        }
        
        if(set.size === map.size) {
            result++;
        }
    })
    return result;
}