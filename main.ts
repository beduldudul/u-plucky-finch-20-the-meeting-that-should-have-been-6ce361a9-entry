import { writeFileSync, mkdirSync } from "node:fs";

// One line, at most 200 characters: a meeting that should have been an email.
// The twist lands on the last words — the meeting's only output is a request
// for an email, so it was an email all along.
const line =
  "We spent an hour nodding at a deck nobody read, then asked for the slides to be emailed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
