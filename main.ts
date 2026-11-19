// A gta6-meme-x-01 entry program (Node 22, standard library only): it copies
// the repository's meme.png to /output/entry.png, deterministically, byte for
// byte. The entry is the post itself: the meme is posted on X from a public
// account with make.fun (a link or written out) and/or a tag of @makefunai and
// the entrant's play code in its text, POST.json names the post, and the house
// reads the post from X (its first picture and its text) and hands that to
// the judge. Nothing this program writes is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'meme.png'), join(OUTPUT_DIR, 'entry.png'));
} catch (err) {
  const message = err instanceof Error ? err.message : String(err);
  console.error(`meme.png could not be copied from ${BOT_DIR}: ${message}`);
  process.exit(1);
}
