const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);
function solution(num) {
  let addNum = 0;
  for (let i = 1; i <= num; i++) {
    addNum += i
  }
  console.log(addNum)
};