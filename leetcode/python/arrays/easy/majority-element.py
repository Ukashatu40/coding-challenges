class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        frequency = {}
        majority = 0
        min_value = 0
        for i in nums:
            if frequency.get(i):
                frequency[i] += 1
            else:
                frequency[i] = 1 
        for key, value in frequency.items():
            if value > min_value:
                min_value = value
                majority = key

        return majority