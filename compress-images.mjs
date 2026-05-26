// compress-images.mjs
// Run once: node compress-images.mjs
// Requires: npm install --save-dev sharp

import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');

const targets = [
  { input: 'buildup.png',  output: 'buildup.webp',  width: 1920 },
  { input: 'rentaly.png',  output: 'rentaly.webp',  width: 1200 },
  { input: 'whales.png',   output: 'whales.webp',   width: 1440 },
  { input: 'olis.png',     output: 'olis.webp',     width: 600  },
];

async function compress() {
  for (const { input, output, width } of targets) {
    const inputPath  = path.join(publicDir, input);
    const outputPath = path.join(publicDir, output);
    try {
      const info = await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(outputPath);
      const kb = Math.round(info.size / 1024);
      console.log(`✅  ${input} → ${output} (${kb} KB)`);
    } catch (err) {
      console.error(`❌  Failed: ${input}`, err.message);
    }
  }
  console.log('\nDone! Compressed WebP files are in /public');
}

compress();
