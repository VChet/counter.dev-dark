# counter.dev dark

[![version](https://img.shields.io/github/tag/VChet/counter.dev-dark.svg?label=version)](https://github.com/VChet/counter.dev-dark/tags)
[![build](https://github.com/VChet/counter.dev-dark/actions/workflows/build.yml/badge.svg)](https://github.com/VChet/counter.dev-dark/actions/workflows/build.yml)
[![install](https://img.shields.io/badge/Install%20with-Stylus-00adad.svg)](https://github.com/VChet/counter.dev-dark/raw/master/src/counter.dev-dark.user.css)

## Preview

![Preview](./meta/preview.png)

## Installation

1. Install Stylus/Cascadea (Safari)
   - [![Chrome](https://github.com/alrra/browser-logos/raw/master/src/chrome/chrome_16x16.png) Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
   - [![Firefox](https://github.com/alrra/browser-logos/raw/master/src/firefox/firefox_16x16.png) Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)
   - [![Safari](https://github.com/alrra/browser-logos/raw/master/src/safari/safari_16x16.png) Safari](https://cascadea.app/)
1. [Install UserCSS](https://github.com/VChet/coinkeeper-dark/raw/master/src/coinkeeper-dark.user.css)

## Contribute

Anyone and everyone is welcome to [contribute](https://github.com/VChet/counter.dev-dark/pulls) and report any [issues](https://github.com/VChet/counter.dev-dark/issues).

## Development

1. [Fork](https://github.com/VChet/counter.dev-dark/fork) and download this repository
1. Install [Node.js](https://nodejs.org/)
1. Install [pnpm](https://pnpm.io/) `npm i pnpm -g`
1. Install all dependencies using `pnpm install`
1. Change [mappings](generate.js)
1. Generate style with `pnpm run build`
1. Make additional changes in [main style](./src/counter.dev-dark.user.css) if needed
1. Commit and push your changes
1. Make a pull request
