const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
input = input.map((item) => +item);
solution(input[0], input[1]);
function solution(H, M) {
  M -= 45;
  if (M < 0) {
    H -= 1;
    M += 60;
  }
  if (H < 0) {
    H = 23;
  }
  console.log(H, M)
}