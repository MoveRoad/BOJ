function solution(enroll, referral, seller, amount) {
  let graph = Array.from(Array(enroll.length), () => Array());
  let money = Array.from(Array(enroll.length), () => Array());

  const upToCenter = (name, amount) => {
    const startIdx = enroll.indexOf(name);
    let queue = [[startIdx, amount]];

    while (queue.length) {
      let [next, amount] = queue.shift();
      const tempMoney = Math.floor(amount * 0.1);

      money[next] = Number(money[next]) + amount - tempMoney;

      if (tempMoney === 0) break;

      if (graph[next].length) {
        queue.push([graph[next][0], tempMoney]);
      }
    }
  };

  referral.forEach((el, idx) => {
    const temp = enroll.indexOf(el);
    if (temp >= 0) graph[idx].push(temp);
  });

  seller.forEach((el, idx) => {
    upToCenter(el, amount[idx] * 100);
  });

  return money.map((el) => (el.length !== undefined ? 0 : el));
}
