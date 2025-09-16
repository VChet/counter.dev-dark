# counter.dev dark

[![version][version-img]][version-href]
[![build-status][build-img]][build-href]
![prs-welcome][prs-welcome-img]
[![install][install-img]][install-href]

## Preview

![Preview](./meta/preview.png)

## Installation

1. Install Stylus/Cascadea (Safari)
   - [![Chrome][chrome-img] Chrome][chrome-href]
   - [![Firefox][firefox-img] Firefox][firefox-href]
   - [![Safari][safari-img] Safari][safari-href]
1. [Install UserCSS][install-href]

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

<!-- Badges -->
[version-img]: https://img.shields.io/github/tag/VChet/counter.dev-dark?label=version&style=flat-square
[version-href]: https://github.com/VChet/counter.dev-dark/tags
[build-img]: https://img.shields.io/github/actions/workflow/status/VChet/counter.dev-dark/.github/workflows/build.yaml?style=flat-square
[build-href]: https://github.com/VChet/counter.dev-dark/actions/workflows/build.yaml
[prs-welcome-img]: https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square
[install-img]: https://img.shields.io/badge/Install%20with-Stylus-00adad?style=flat-square
[install-href]: https://github.com/VChet/counter.dev-dark/raw/master/src/counter.dev-dark.user.css
<!-- Links -->
[chrome-img]: https://github.com/alrra/browser-logos/raw/master/src/chrome/chrome_16x16.png
[chrome-href]: https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne
[firefox-img]: https://github.com/alrra/browser-logos/raw/master/src/firefox/firefox_16x16.png
[firefox-href]: https://addons.mozilla.org/en-US/firefox/addon/styl-us/
[safari-img]: https://github.com/alrra/browser-logos/raw/master/src/safari/safari_16x16.png
[safari-href]: https://cascadea.app/
