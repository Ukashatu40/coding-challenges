class Logger:
    def __init__(self):
        self.message_timestamp = {}

    def shouldPrintMessage(self, timestamp: int, message: str) -> bool:
        if message not in self.message_timestamp or timestamp - self.message_timestamp[message] >= 10:
            self.message_timestamp[message] = timestamp
            return True
        return False