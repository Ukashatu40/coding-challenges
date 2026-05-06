# Time limit exceeded for large inputs
class Solution:
    def getSum(self, a: int, b: int) -> int:
        while b != 0:
            carry = (a & b) << 1
            a = a ^ b
            b = carry
        
        return a
    
# Different Approach
# Time limit exceeded for large inputs
class Solution:
    def getSum(self, a: int, b: int) -> int:
        if a == 0:
            return b
        if b == 0:
            return a
        
        sum_without_carry = a ^ b
        carry = (a & b) << 1
        
        return self.getSum(sum_without_carry, carry)
    
# Optimized Approach
class Solution:
    def getSum(self, a: int, b: int) -> int:
        mask = 0xFFFFFFFF
        while b != 0:
            carry = (a & b) << 1
            a = (a ^ b) & mask
            b = carry & mask
        
        return a if a <= 0x7FFFFFFF else ~(a ^ mask)