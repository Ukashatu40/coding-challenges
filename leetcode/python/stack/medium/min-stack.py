class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)

    def pop(self) -> None:
        if self.stack:
            val = self.stack.pop()
            if val == self.min_stack[-1]:
                self.min_stack.pop()

    def top(self) -> int:
        if self.stack:
            return self.stack[-1]
        return None

    def getMin(self) -> int:
        if self.min_stack:
            return self.min_stack[-1]
        return None

# Second approach using a single stack
class MinStackSingle:
    def __init__(self):
        self.stack = []
        self.min_val = float('inf')

    def push(self, val: int) -> None:
        if val <= self.min_val:
            self.stack.append(self.min_val)
            self.min_val = val
        self.stack.append(val)

    def pop(self) -> None:
        if self.stack:
            top = self.stack.pop()
            if top == self.min_val:
                self.min_val = self.stack.pop()

    def top(self) -> int:
        if self.stack:
            return self.stack[-1]
        return None

    def getMin(self) -> int:
        return self.min_val
    
# Third approach using defined Node class
class MinStack:
    # head = Node()
    def __init__(self):
        self.head = None

    def push(self, val: int) -> None:
        if self.head is None:
            self.head = Node(val, val, None)
        else:
            self.head = Node(val, min(val, self.head.min), self.head)

    def pop(self) -> None:
        self.head = self.head.next

    def top(self) -> int:
        return self.head.val

    def getMin(self) -> int:
        return self.head.min_val

class Node:
    def __init__(self, val, min_val, next_node):
        self.val = val
        self.min_val = min_val
        self.next_node = next_node