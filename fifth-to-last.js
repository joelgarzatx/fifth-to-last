

const DataStructures = require('algorithms').DataStructures;
const Stack = DataStructures.Stack;
const Queue = DataStructures.Queue;


const fifthToLast = function fifthToLast(stack) {
  const queue = new Queue();
  while (!stack.isEmpty()) {
    queue.push(stack.pop());
    if (queue.length > 5) {
      queue.pop();
    }
  }
  return queue.peek();
};


const stack = new Stack();
for (let i = 0; i < 100; i = i + 2) {
  stack.push(i);
}
console.log(fifthToLast(stack));
