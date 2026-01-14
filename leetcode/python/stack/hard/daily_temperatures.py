class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        answer = [0] * n
        stack = []

        for i in range(n):
            while len(stack) > 0 and temperatures[i] > temperatures[stack[-1]]:
                index = stack.pop()
                answer[index] = i - index
            stack.append(i)
        
        return answer
    
# different approach using monotonic stack
# class Solution:
#     def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
#         n = len(temperatures)
#         answer = [0] * n
#         stack = []
#
#         for i in range(n - 1, -1, -1):
#             while len(stack) > 0 and temperatures[i] >= temperatures[stack[-1]]:
#                 stack.pop()
#             if len(stack) > 0:
#                 answer[i] = stack[-1] - i
#             stack.append(i)
#         return answer
