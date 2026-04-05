import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import process from "node:process";
import fetchCss from "fetch-css";
import remapCss from "remap-css";
import stylelint from "stylelint";

const __dirname = dirname(fileURLToPath(import.meta.url));

const MAPPINGS = {
  // Background
  "$background: #fff": "var(--gray-dark)",
  "$background: #fafafa": "var(--gray)",
  "$background: #e7f6ff": "var(--gray)",
  "$background: #b1e2ff": "var(--accent)",
  // Color
  "color: #fff": "color: var(--black)",
  "color: #616161": "color: var(--text)",
  "color: rgba(0,0,0,.65)": "color: var(--text)",
  "color: #121212": "color: var(--light)",
  "color: #24292e": "color: var(--light)",
  "color: rgba(0,0,0,1)": "color: var(--white)",
  // Borders
  "$border: #fff": "var(--gray-dark)",
  "$border: #ccc": "var(--gray)",
  "$border: #e0e0e0": "var(--gray-light)",
  // Box-shadow
  "$box-shadow: #e0e0e0": "var(--gray-light)",
  "$box-shadow: #e7f6ff": "var(--gray-light)",
  "$box-shadow: #b1e2ff": "var(--gray-light)"
};

const SOURCES = [
  { url: "https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.2/jquery.modal.min.css" },
  { url: "https://counter.dev/css/blog.css" },
  { url: "https://counter.dev/css/dashboard.css" },
  { url: "https://counter.dev/css/landing.css" },
  { url: "https://counter.dev/css/markdown.css" },
  { url: "https://counter.dev/css/pwyw.css" },
  { url: "https://counter.dev/css/styles.css" },
  { url: "https://counter.dev/css/welcome.css" }
];
const SOURCE_FILE = join(__dirname, "counter.dev-dark.user.css");

const REMAP_OPTIONS = {
  ignoreSelectors: [/\spre$/, /^table$/],
  indentCss: 2,
  stylistic: true,
  validate: true
};
const PREFIX = "  /* begin remap-css rules */";
const SUFFIX = "  /* end remap-css rules */";
const REMAP_REGEX = /.*begin remap-css[\s\S]+end remap-css.*/;

function exit(error) {
  if (error) console.error(error);
  process.exit(error ? 1 : 0);
}

async function main() {
  let generatedCss = await remapCss(await fetchCss(SOURCES), MAPPINGS, REMAP_OPTIONS);
  generatedCss = `${PREFIX}\n${generatedCss}\n${SUFFIX}`;

  let sourceCss = await readFile(SOURCE_FILE, "utf8");
  sourceCss = sourceCss.replace(REMAP_REGEX, generatedCss);
  const { code } = await stylelint.lint({ code: sourceCss, fix: true });
  return writeFile(SOURCE_FILE, code);
}

main().then(exit).catch(exit);
