const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let H = input[0].split(' ')[0];
let M = input[0].split(' ')[1];
let T = input[1];
solution(+H, +M, +T)
function solution(H, M, T) {
  M += T;
  while (M >= 60) {
    M -= 60;
    H += 1;
  }
  H %= 24
  console.log(H + ' ' + M)
}