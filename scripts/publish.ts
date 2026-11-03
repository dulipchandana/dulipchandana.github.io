import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const output = resolve(root, "static-build");

const html = await readFile(resolve(output, "index.html"), "utf8");
await writeFile(resolve(root, "index.html"), html.replace(/\r\n?/g, "\n"));
await mkdir(resolve(root, "assets"), { recursive: true });
await cp(resolve(output, "assets"), resolve(root, "assets"), { recursive: true });
