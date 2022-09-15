import TinyQueue from "tinyqueue";

class MinStablePqueue {
  constructor(array) {
    this.pqueue = new TinyQueue(array, this.orderFunc);
    this.counter = array.length;
  }

  orderFunc(a, b) {
    let result = a.priority - b.priority;
    let they_are_equal = result === 0;

    if (they_are_equal) {
      return a.counter - b.counter;
    }

    return result;
  }

  static createPqueueItem(elem, priority, count) {
    return {
      value: elem,
      priority: priority,
      counter: count,
    };
  }

  pop() {
    return this.pqueue.pop();
  }

  peek() {
    return this.pqueue.peek();
  }

  peekPriority() {
    return this.pqueue.peek().priority;
  }

  push(item, priority) {
    this.pqueue.push({
      value: item,
      priority: priority,
      counter: this.counter++,
    });
  }
}

export default MinStablePqueue;