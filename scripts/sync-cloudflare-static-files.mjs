import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

const staticFiles = [
  {
    source: path.join(projectRoot, 'public', '_redirects', 'main.tsx'),
    destination: path.join(distDir, '_redirects'),
  },
  {
    source: path.join(projectRoot, 'public', '_headers', 'main.tsx'),
    destination: path.join(distDir, '_headers'),
  },
];

await mkdir(distDir, { recursive: true });

for (const { source, destination } of staticFiles) {
  await rm(destination, { recursive: true, force: true });
  await mkdir(path.dirname(destination), { recursive: true });

  const content = await readFile(source, 'utf8');
  await writeFile(destination, content, 'utf8');
}
