function solution(enroll, referral, seller, amount) {
    const parent = {};
    const sales = {};
    
    for(let i = 0; i < enroll.length; i++) {
        parent[enroll[i]] = referral[i];
    }
    
    for(let i = 0; i < seller.length; i++) {
        let money = amount[i] * 100;
        let curName = seller[i];
        
        while(money > 0 && curName !== '-') {
            sales[curName] = (sales[curName] || 0) + money - Math.floor(money / 10);
            curName = parent[curName];
            
            money = Math.floor(money / 10);
        }
    }
    
    return enroll.map((e) => sales[e] || 0);
    
    return result;
}