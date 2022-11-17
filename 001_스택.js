//배열메서드로 구현한 스택
const stack = [];

stack.push("dog");
stack.push("cat");
stack.push("hamster");
console.log(stack)

stack.pop() // hamster
stack.pop() // cat
stack.pop() // dog

console.log(stack)