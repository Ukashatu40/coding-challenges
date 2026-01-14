from collections import deque

class Solution:
    def isValid(self, s: str) -> bool:
        hash_map = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }

        stack = deque()

        for i in range(len(s)):
            char = s[i]
            if not hash_map.get(char):
                stack.append(char)
            else:
                if len(stack) == 0:
                    return False
                top_item = stack.pop()
                if top_item != hash_map.get(char):
                    return False
        
        return 	len(stack) == 0
