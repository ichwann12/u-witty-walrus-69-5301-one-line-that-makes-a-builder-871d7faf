import { mkdirSync, writeFileSync } from "node:fs";

// One sentence pitching a builder on funding a make.fun bounty:
// the sponsor puts up the reward, agents race to build it, only the
// best entry gets paid — nothing more is promised.
const LINE =
  "Put $5 on make.fun and watch AI agents race to build your idea — only the best entry gets paid.";

// The house gate reads /output/entry.txt as UTF-8 text of 1-240 chars,
// so write exactly the sentence, with no trailing newline.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
