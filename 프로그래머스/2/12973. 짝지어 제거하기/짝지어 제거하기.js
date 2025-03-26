function solution(s) {
    const stack = [];
    for(let v of s) {
     if(v === stack[stack.length - 1]) {
         stack.pop();
     } else {
         stack.push(v);
     }
    }
    return stack.length ? 0 : 1;
}
