
using System;
using System.Collections.Generic;

public class Solution
{
    private static readonly int NO_GREATER_ELEMENT_FOUND = -1;

    public int[] NextGreaterElements(int[] input)
    {
        int[] nextGreaterElements = new int[input.Length];
        Stack<int> monotonicStack = new Stack<int>();

        for (int i = 2 * input.Length - 1; i >= 0; --i)
        {
            int index = i % input.Length;
            while (monotonicStack.Count > 0 && monotonicStack.Peek() <= input[index])
            {
                monotonicStack.Pop();
            }

            if (monotonicStack.Count > 0)
            {
                nextGreaterElements[index] = monotonicStack.Peek();
            }
            else
            {
                nextGreaterElements[index] = NO_GREATER_ELEMENT_FOUND;
            }

            monotonicStack.Push(input[index]);
        }

        return nextGreaterElements;
    }
}
