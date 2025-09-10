function solution(numbers) {
    return numbers.map((number) => {
        let str = '0' + number.toString(2);
        if(str[str.length -1] === '0') return number+1;
        
        else {
            let idx = str.lastIndexOf('01');
            str = str.substring(0,idx) + '10' + str.substring(idx+2);
            return parseInt(str, 2)
        }
    })
}