function solution(brown, yellow) {
    let x, y;
    for(y = 3; y <= (brown + yellow) / y; y++) {
        x = Math.floor((brown + yellow) / y);
        if((x - 2)*(y - 2) === yellow) {
            break;
        }
    }
    return [x, y];
}