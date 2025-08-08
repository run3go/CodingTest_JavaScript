const getPermutations = (arr, num) => {
    const results = [];
    if(num === 1) return arr.map((v) => [v]);
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, num - 1);
        const attached = permutations.map((v) => [fixed, ...v]);
        results.push(...attached);
    })
    return results;
}

const getCalculation = (numsAndOps, ops) => {
    ops.forEach((op) => {
        let i = 0;
        while(i < numsAndOps.length) {
            if(numsAndOps[i] === op) {
                const calc = calculate(op, Number(numsAndOps[i - 1]), Number(numsAndOps[i + 1]));
                numsAndOps = [...numsAndOps.slice(0, i -1), calc, ...numsAndOps.slice(i + 2)];
                i = 0;
            } else {
                i++;
            }
        }
    })
    return Math.abs(numsAndOps[0]);
}

const calculate = (op, prev, next) => {
    let answer = 0;
    switch (op) {
        case '+':
            answer = prev + next;
            break;
        case '-':
            answer = prev - next;
            break;
        case '*':
            answer = prev * next;
            break;
    }
    return answer;
}

function solution(expression) {
    let answer = 0;
    const ops = ["+", "-", "*"];
    const numsAndOps = expression.split(/([+*-])/);
    const perm = getPermutations(ops, 3);
    
    perm.forEach((p) => {
        const result = getCalculation(numsAndOps, p);
        answer = Math.max(result, answer);
    })
    return answer;
}

