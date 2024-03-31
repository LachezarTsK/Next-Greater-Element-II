
/**
 * @param {number[]} input
 * @return {number[]}
 */
var nextGreaterElements = function (input) {
    const NO_GREATER_ELEMENT_FOUND = -1;
    const nextGreaterElements = new Array(input.length);
    const monotonicStack = new Stack();

    for (let i = 2 * input.length - 1; i >= 0; --i) {

        let index = i % input.length;
        while (!monotonicStack.isEmpty() && monotonicStack.peek() <= input[index]) {
            monotonicStack.pop();
        }

        if (!monotonicStack.isEmpty()) {
            nextGreaterElements[index] = monotonicStack.peek();
        } else {
            nextGreaterElements[index] = NO_GREATER_ELEMENT_FOUND;
        }

        monotonicStack.push(input[index]);
    }

    return nextGreaterElements;
};

class Stack {

    container = new Array();

    push(element) {
        this.container.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty!");
        }
        return this.container.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty!");
        }
        return this.container[ this.container.length - 1];
    }

    isEmpty() {
        return this.container.length === 0;
    }
}
