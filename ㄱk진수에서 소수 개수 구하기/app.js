function solution(n, k) {
  const sosu = (num) => {
    if (num === 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  return n
    .toString(k)
    .split("0")
    .filter((el) => el.length !== 0)
    .filter((el) => sosu(Number(el))).length;
}
