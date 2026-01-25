class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        remove_indices = set()
        stack = []

        for i in range(len(s)):
            char = s[i]

            if char == "(":
                stack.append(i)
            elif char == ")":
                if not stack:
                    remove_indices.add(i)
                else:
                    stack.pop()
        
        while stack:
            remove_indices.add(stack.pop())
        
        result = ""

        for i in range(len(s)):
            if not i in remove_indices:
                result += s[i]
        
        return result