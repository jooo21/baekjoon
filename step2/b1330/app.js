const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0].split(' ').map((item) => +item);
solution(input[0], input[1]);
function solution(A, B) {
  if (A > B) { console.log('>') }
  if (A < B) { console.log('<') }
  if (A == B) { console.log('==') }
};