function solution(orders, course) {
  let menu = {};

  function combination(order, idx, len, prev) {
    if (prev.length === len) {
      let cur_key = prev.join("");
      if (cur_key in menu) {
        menu[cur_key] += 1;
      } else menu[cur_key] = 1;
      return;
    }

    for (let i = idx; i < order.length; i++) {
      combination(order, i + 1, len, [...prev, order[i]]);
    }
  }

  orders.map((order) => {
    course.map((num) => combination(order, 0, num, []));
  });

  let answer = [];

  for (let i of course) {
    let max = 0;
    let temp = Object.entries(menu).filter(([k, v]) => {
      if (max < v && k.length === i) max = v;
      return k.length === i;
    });

    temp = temp
      .filter(([k, v]) => {
        return v === max;
      })
      .map(([k, v]) => answer.push(k));
  }
  console.log(answer.sort());
}

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);
