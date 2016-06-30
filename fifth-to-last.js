'use strict';

var DataStructures = require('algorithms').DataStructures;
var Stack = DataStructures.Stack;
var Queue = DataStructures.Queue;


var fifthToLast = function(stack) {
  var queue = new Queue();
  while (!stack.isEmpty()) {
    queue.push(stack.pop());
    if (queue.length > 5) {
      queue.pop();
    }
  }
  return queue.peek();
}


var stack = new Stack();
for (var i=0; i<100; i=i+2) {
  stack.push(i);
}
console.log(fifthToLast(stack));
