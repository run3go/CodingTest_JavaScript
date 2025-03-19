function isValid(x, y) {
    return x <= 5 && y <= 5 && x >= -5 && y >= -5;
}

function nextPos(dir, cur) {
    switch (dir) {
        case 'U':
            return [cur[0], cur[1]+1];
            break;
        case 'D':
            return [cur[0], cur[1]-1];
            break;
        case 'R':
            return [cur[0]+1, cur[1]];
            break;
        case 'L':
            return [cur[0]-1, cur[1]];
            break;
        default:
             break;
    }
}

function solution(dirs) {
    const visited = new Set();
    let cur = [0, 0];
    
    for(const dir of dirs) {
        const [dx, dy] = nextPos(dir, cur);
        
        if(!isValid(dx,dy)) {
            continue;
        }
        
        visited.add(`${dx}${dy}${cur[0]}${cur[1]}`);
        visited.add(`${cur[0]}${cur[1]}${dx}${dy}`);
        cur = [dx, dy];
    }
    
    return visited.size / 2;
}