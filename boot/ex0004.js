function splitLogs(logs, slug) {
  let before = [],
    after = [],
    i = 0;
  let foundSlug = false;
  for (const log of logs) {
    if (log.toLowerCase().includes(slug.toLowerCase())) {
      before = logs.slice(0, i);
      after = logs.slice(i + 1);
      foundSlug = true;
      break;
    }
    i++;
  }
  if (!foundSlug) {
    i = -1;
  }
  return { before, after, i };
}

console.log(
  splitLogs(
    [
      "error at line 10",
      "warning at line 15",
      "the dev who wrote line 21 should be fired",
      "debug info",
      "error at line 20",
      "user login",
    ],
    "debug",
  ),
);
