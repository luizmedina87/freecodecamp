const getCleanMessages = (messages, badWord) => {
  const cleanMessages = [];
  for (const message of messages) {
    if (message.toLowerCase().includes(badWord.toLowerCase())) {
      continue;
    }
    cleanMessages.push(message);
  }
  return cleanMessages;
};

console.log(
  getCleanMessages(
    [
      "Damn, we're in a tight spot!",
      "Well, ain't this place a geographical oddity.",
      "Two weeks from everywhere!",
    ],
    "damn",
  ),
);
