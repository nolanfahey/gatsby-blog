/* Queue.js

Author: Nolan Fahey

Javascript Queue implementation:
  Wraps array, provides methods enqueue and dequeue for element storage and retrieval, respectively

  Maximum queue size, n, is retained until the removal of ceiling(n / EMPTY_SIZE_FACTOR) elements
    To adjust the size of the buffer retained at the beginning of the queue array:
      Increase the EMPTY_SIZE_FACTOR to decrease the size of the buffer/average queue size
      Decrease the EMPTY_SIZE_FACTOR to increase the size of the buffer/average queue size
*/

const EMPTY_SIZE_FACTOR = 2;

const Queue = () => {
  this.queue = [];
  this.offset = 0;

  this.length = () => {
    return this.queue.length - this.offset;
  };

  /*
   * isEmpty getter
   * return: bool: whether queue is empty or not
   */
  this.isEmpty = () => {
    return this.queue.length === 0;
  };

  /* Enqueues element (to back of queue)
   * args:
   * @element: element to queue
   */
  this.enqueue = element => {
    this.queue.push(element);
  };

  /* Dequeues and returns element at the front of queue
   * return: object: element, or undefined if queue is empty
   */
  this.dequeue = () => {
    if (this.isEmpty) return undefined;

    const element = this.queue[this.offset];
    this.offset += 1;

    // Reduce calls to Array.prototype.slice() by waiting until ceiling(n / EMPTY_SIZE_FACTOR) elements have been removed
    // where n is the maximum size of the queue since the queue was last shrank
    if (this.offset * EMPTY_SIZE_FACTOR >= this.queue.length) {
      this.queue = this.queue.slice(this.offset);
      this.offset = 0;
    }

    return element;
  };

  /* Peeks at element at the front of queue without dequeuing
   * return: object: element, or undefined if queue is empty
   */
  this.peek = () => {
    return this.isEmpty ? this.queue[this.offset] : undefined;
  };
};

module.exports = {
  Queue,
};
