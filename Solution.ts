
function nextGreaterElements(input: number[]): number[] {
    const NO_GREATER_ELEMENT_FOUND = -1;
    const nextGreaterElements = new Array(input.length);
    const monotonicStack = new Stack<number>();

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

class Stack<T> {

    container = new Array<T>();

    push(element: T): void {
        this.container.push(element);
    }

    pop(): T {
        if (this.isEmpty()) {
            throw new Error("Stack is empty!");
        }
        return this.container.pop();
    }

    peek(): T {
        if (this.isEmpty()) {
            throw new Error("Stack is empty!");
        }
        return this.container[this.container.length - 1];
    }

    isEmpty(): boolean {
        return this.container.length === 0;
    }
}
