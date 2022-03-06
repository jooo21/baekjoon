const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  input = input.map((item) => +item);
  solution(input[0], input[1]);
  process.exit();
})

function solution(a, b) {
  let ans = 0;
  if (a > 0 && b > 0) {
    ans = 1;
  }
  if (a < 0 && b > 0) {
    ans = 2;
  }
  if (a < 0 && b < 0) {
    ans = 3;
  }
  if (a > 0 && b < 0) {
    ans = 4;
  }
  console.log(ans);
}