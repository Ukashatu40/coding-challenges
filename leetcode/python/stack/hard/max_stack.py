class MaxStack:
    def __init__(self):
        self.stack = []
        self.max_stack = []

    def push(self, x: int) -> None:
        self.stack.append(x)
        if not self.max_stack or x >= self.max_stack[-1]:
            self.max_stack.append(x)
        else:
            self.max_stack.append(self.max_stack[-1])

    def pop(self) -> int:
        if not self.stack:
            return None
        x = self.stack.pop()
        if x == self.max_stack[-1]:
            self.max_stack.pop()
        return x

    def top(self) -> int:
        if not self.stack:
            return None
        return self.stack[-1]

    def peekMax(self) -> int:
        if not self.max_stack:
            return None
        return self.max_stack[-1]

    def popMax(self) -> int:
        if not self.max_stack:
            return None
        max_val = self.max_stack.pop()
        buffer = []
        
        while self.stack and self.stack[-1] != max_val:
            buffer.append(self.stack.pop())
        
        # Remove the max value from the main stack
        if self.stack:
            self.stack.pop()
        
        # Push back the elements from the buffer
        while buffer:
            self.push(buffer.pop())
        
        return max_val