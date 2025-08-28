function solution(lottos, win_nums) {
    let rank = [6, 6, 5, 4, 3, 2, 1];
    let correct = lottos.filter((el) => win_nums.includes(el)).length;
    let unknown = lottos.filter((el) => !el).length;
    return [rank[correct + unknown], rank[correct]];
}