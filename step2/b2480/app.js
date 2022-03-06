const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
input = input.map((item) => +item)
solution(input[0], input[1], input[2])
function solution(a, b, c) {
  console.log('a, b, c: ', a, b, c);
  let win = 0;
  if (a === b && b === c && a === c) win = 10000 + (a * 1000)
  if (a == b || a == c) {
    win = 1000 + (100 * a)
  } else if (b === c) {
    win = 1000 + (100 * c)
  } else {
    win = 100 * (Math.max(a, b, c));
  }
  console.log(win)
}