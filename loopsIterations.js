// level {1/2/3}
// level 2

const sumfibo = (n) => {
  if (n <= 0) {
    return 0;
  }
  let next = [1, 1];
  let first = next[0];
  let second = next[1];
  let sum = first + second;
  for (let i = 2; i < n; i++) {
    next[i] = next[i - 1] + next[i - 2];
    sum += next[i];
  }

  return sum;
};
let fiboNumber = 6;
sumfibo(fiboNumber);
