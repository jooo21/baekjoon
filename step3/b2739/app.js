const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
solution(+input[0]);
function solution(num) {
  for (let j = 1; j <= 9; j++) {
    console.log(num + " * " + j + " = " + num * j)
  }
};