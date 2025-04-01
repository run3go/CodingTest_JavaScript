const fs = require("fs");
const filepath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const stack = [];
const answer = [];
for (let i = 1; i <= input[0]; i++) {
  const [cmd, number] = input[i].split(" ");
  switch (cmd) {
    case "push":
      stack.push(number);
      break;

    case "pop":
      answer.push(stack.length === 0 ? -1 : stack.pop());
      break;

    case "size":
      answer.push(stack.length);
      break;

    case "empty":
      answer.push(stack.length ? 0 : 1);
      break;

    case "top":
      answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
  }
}
console.log(answer.join("\n"));
