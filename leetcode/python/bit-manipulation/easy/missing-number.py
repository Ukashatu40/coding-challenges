class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        x_or = 0

        for i in range(len(nums)+1):
            x_or ^= i
        
        for i in range(len(nums)):
            x_or ^= nums[i]

        return x_or
