const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
solution(+input[0]);
function solution(score) {
  if (90 <= score && score <= 100) { console.log('A') }
  else if (80 <= score && score <= 89) { console.log('B') }
  else if (70 <= score && score <= 79) { console.log('C') }
  else if (60 <= score && score <= 69) { console.log('D') }
  else {
    console.log('F')
  }
};