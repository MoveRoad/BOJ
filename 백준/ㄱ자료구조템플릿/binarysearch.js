const upper_bound = (target, array) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
      while (array[mid] === target) mid++;

      return mid - 1;
    }

    if (array[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return 0;
};

const lower_bound = (target, array) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
      while (array[mid] === target) mid--;

      return mid + 1;
    }

    if (array[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return low;
};

function binary_search(t, arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] === t) return true;
    else if (arr[mid] < t) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}
