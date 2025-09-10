function solution(p) {
    
    function isValid (str) {
        let stack = [];
        for(let x of str) {
            if(x === '(') {
                stack.push('(');
            } else if (x === ')' && stack[stack.length-1] === '(') {
                stack.pop();
            }
        }
        return !stack.length;
    }
    
    function reverse (str) {
        return str
            .substring(1,str.length-1)
            .split("")
            .map((v) => v === "(" ? ")" : "(").join("");
    }
    
    function proper (str) {
        let left = 0, right = 0;
        let u = "", v = "";
        for(let i = 0; i < str.length; i++) {
            
            if (str[i] === '(') left++;
            else right++;
            
            if(left === right) {
                u = str.substring(0,i+1);
                v = str.substring(i+1);
                break;
            }
        }
        if(isValid(u)) {
            if(v.length === 0) return u;
            return u + proper(v);
        } else {
            return "(" + proper(v) + ")" + reverse(u);
        }
    }
    return proper(p);
}

// '(' ')' 의 개수가 같다면 '균형잡힌 괄호 문자열'
// 짝도 모두 맞을 경우 '올바른 괄호 문자열'

// 앞에서부터 괄호 개수를 체크하여 () 의 개수가 같아지는 순간 분리에서 u에 넣는다 나머지는 v
// u가 올바르면 v에 대해서 1단계부터 다시 수행

// u가 올바르지 않다면
// 빈 문자열에 '('를 붙인다
// v에 대해 1단계부터 다시 수행한 결과를 이어 붙인다
// ')'를 붙인다
// u의 첫번째와 마지막 문자를 제거, 나머지 문자열을 괄호 방향을 뒤집이서 뒤에 붙인다.