class MinHeap:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.size = 0
        self.heap = [0] * (capacity + 1)
        
    def parent(self, index: int) -> int:
        return index // 2
    def left_child(self, index: int) -> int:
        return 2 * index + 1
    def right_child(self, index: int) -> int:
        return 2 * index + 2
    def is_leaf(self, index: int) -> bool:
        return index >= self.size // 2 and index < self.size
    
    def swap(self, index1: int, index2: int):
        self.heap[index1], self.heap[index2] = self.heap[index2], self.heap[index1]
    def insert(self, element: int):
        if self.size >= self.capacity:
            return
        self.size += 1
        self.heap[self.size - 1] = element
        current = self.size - 1
        
        while current > 0 and self.heap[current] < self.heap[self.parent(current)]:
            self.swap(current, self.parent(current))
            current = self.parent(current)
    
    def remove_min(self) -> int:
        if self.size == 0:
            return -1
        popped = self.heap[0]
        self.heap[0] = self.heap[self.size - 1]
        self.size -= 1
        self.min_heapify(0)
        return popped
    def heapify(self):
        for index in range((self.size // 2) - 1, -1, -1):
            self.min_heapify(index)
    def min_heapify(self, index: int):
        if not self.is_leaf(index):
            left = self.left_child(index)
            right = self.right_child(index)
            smallest = index
            
            if left < self.size and self.heap[left] < self.heap[smallest]:
                smallest = left
            if right < self.size and self.heap[right] < self.heap[smallest]:
                smallest = right
            if smallest != index:
                self.swap(index, smallest)
                self.min_heapify(smallest)
    def get_min(self) -> int:
        if self.size == 0:
            return -1
        return self.heap[0]
    def is_empty(self) -> bool:
        return self.size == 0
    def get_size(self) -> int:
        return self.size
    def print_heap(self):
        for i in range(self.size):
            print(self.heap[i], end=' ')
        print()
# Example usage:
if __name__ == "__main__":
    min_heap = MinHeap(10)
    min_heap.insert(5)
    min_heap.insert(3)
    min_heap.insert(8)
    min_heap.insert(1)
    min_heap.print_heap()  # Output should show the heap with 1 as the root
    print(min_heap.remove_min())  # Output: 1
    min_heap.print_heap()  # Output should show the heap after removing the minimum element
    print(min_heap.get_min())  # Output: 3  