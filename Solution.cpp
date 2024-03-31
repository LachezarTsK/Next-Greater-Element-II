
#include <deque>
#include <vector>
using namespace std;

class Solution {

    static const int NO_GREATER_ELEMENT_FOUND = -1;

public:
    vector<int> nextGreaterElements(const vector<int>& input) const {
        vector<int> nextGreaterElements(input.size());
        vector<int> monotonicStack;

        for (size_t i = 2 * input.size() - 1; i != variant_npos; --i) {

            size_t index = i % input.size();
            while (!monotonicStack.empty() && monotonicStack.back() <= input[index]) {
                monotonicStack.pop_back();
            }

            if (!monotonicStack.empty()) {
                nextGreaterElements[index] = monotonicStack.back();
            }
            else {
                nextGreaterElements[index] = NO_GREATER_ELEMENT_FOUND;
            }

            monotonicStack.push_back(input[index]);
        }

        return nextGreaterElements;
    }
};
