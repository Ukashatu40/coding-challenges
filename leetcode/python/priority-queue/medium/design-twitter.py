import heapq
class Twitter:
    def __init__(self):
        self.time = 0
        self.tweets = {}
        self.followers = {}

    def postTweet(self, userId: int, tweetId: int) -> None:
        if userId not in self.tweets:
            self.tweets[userId] = []
        self.tweets[userId].append((self.time, tweetId))
        self.time += 1

    def getNewsFeed(self, userId: int) -> List[int]:

        min_heap = []
        users = self.followers.get(userId, set()) | {userId}

        for user in users:
            if user in self.tweets:
                for time, tweetId in self.tweets[user][-10:]:
                    heapq.heappush(min_heap, (time, tweetId))
                    if len(min_heap) > 10:
                        heapq.heappop(min_heap)

        result = []
        while min_heap:
            result.append(heapq.heappop(min_heap)[1])
        return result[::-1]

    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId not in self.followers:
            self.followers[followerId] = set()
        self.followers[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.followers:
            self.followers[followerId].discard(followeeId)