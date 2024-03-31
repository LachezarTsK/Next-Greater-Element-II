
import java.util.ArrayDeque;
import java.util.Deque;

public class Solution {

    private static final int NO_GREATER_ELEMENT_FOUND = -1;

    public int[] nextGreaterElements(int[] input) {
        int[] nextGreaterElements = new int[input.length];
        Deque<Integer> monotonicStack = new ArrayDeque<>();

        for (int i = 2 * input.length - 1; i >= 0; --i) {

            int index = i % input.length;
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
    }
}
