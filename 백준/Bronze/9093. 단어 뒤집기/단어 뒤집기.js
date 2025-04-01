const fs = require("fs");
const filepath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const len = input.shift();

for(let i = 0; i < len; i++) {
  let words = input[i].split(" ");
  words = words.map((word) => word.split("").reverse().join(""));
  console.log(words.join(" "))
}