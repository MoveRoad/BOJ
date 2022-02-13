function solution(nums) {
  let answer = [];

  const dfs = (cnt, sum, idx) => {
    if (cnt === 3) {
      answer.push(sum);
      return;
    }

    for (let i = idx; i < nums.length; i++) {
      dfs(cnt + 1, sum + nums[i], i + 1);
    }
  };

  const sosu = (idx) => {
    for (let i = 2; i <= Math.sqrt(idx); i++) {
      if (idx % i === 0) return false;
    }

    return true;
  };

  dfs(0, 0, 0);

  return answer.filter((el) => sosu(el)).length;
}
