#!/usr/bin/env node
"use strict";

import fetchCss from "fetch-css";
import remapCss from "remap-css";
import stylelint from "stylelint";
import url from "url";
import { join } from "path";
import { readFile, writeFile } from "fs/promises";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const mappings = {
  // Background
  "$background: #fff": "var(--gray-dark)",
  "$background: #fafafa": "var(--gray)",
  "$background: #e7f6ff": "var(--gray)",
  "$background: #b1e2ff": "var(--accent)",
  // Color
  "color: #fff": "color: var(--black)",
  "color: #616161": "color: var(--text)",
  "color: #121212": "color: var(--light)",
  "color: #24292e": "color: var(--light)",
  // Borders
  "$border: #fff": "var(--gray-dark)",
  "$border: #ccc": "var(--gray)",
  "$border: #e0e0e0": "var(--gray-light)",
  // Box-shadow
  "$box-shadow: #e0e0e0": "var(--gray-light)",
  "$box-shadow: #e7f6ff": "var(--gray-light)",
  "$box-shadow: #b1e2ff": "var(--gray-light)",
  "$box-shadow: rgba(0,0,0,.04)": "var(--gray)",
  "$box-shadow: rgba(0,0,0,.03)": "var(--gray-tp)"
};

const sources = [
  { url: "https://counter.dev/css/blog.css" },
  { url: "https://counter.dev/css/dashboard.css" },
  { url: "https://counter.dev/css/landing.css" },
  { url: "https://counter.dev/css/markdown.css" },
  { url: "https://counter.dev/css/styles.css" },
  { url: "https://counter.dev/css/welcome.css" },
  { url: "https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.2/jquery.modal.min.css" }
];
const ignoreSelectors = [/\spre$/, /^table$/];
const SOURCE_FILE = join(__dirname, "counter.dev-dark.user.css");

const remapOptions = {
  ignoreSelectors,
  indentCss: 2,
  stylistic: true,
  validate: true
};

function exit(error) {
  if (error) console.error(error);
  process.exit(error ? 1 : 0);
};

async function main() {
  let generatedCss = await remapCss(await fetchCss(sources), mappings, remapOptions);
  const prefix = "  /* begin remap-css rules */";
  const suffix = "  /* end remap-css rules */";
  generatedCss = `${prefix}\n${generatedCss}\n${suffix}`;

  const remapReg = /.*begin remap-css[\s\S]+end remap-css.*/;
  let sourceCss = await readFile(SOURCE_FILE, "utf8");
  sourceCss = sourceCss.replace(remapReg, generatedCss);
  const { output } = await stylelint.lint({ code: sourceCss, fix: true });
  return writeFile(SOURCE_FILE, output);
}

main().then(exit).catch(exit);
