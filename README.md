# hd-wallet

HD Wallet for the æternity network, targeting [Epoch].  
hd-wallet is [hosted on GitHub].

[Epoch]: https://github.com/aeternity/epoch
[hosted on GitHub]: https://github.com/aeternity/hd-wallet-js

## Requirements

hd-wallet is compiled to EcmaScript 5 through WebPack and Babel and is expected
to work in any sufficiently new version of Node.js or modern web browser.

The minimum version Node.js is still expected to work at is 8.11.

## Building

hd-wallet is built using [Yarn]. In order to build a development version yourself,
install all dependencies from `package.json` and issue the `build` command.

```
yarn install
yarn build
```

The WebPack compilation provides two different build artifacts in `dist/`, one
for Node.JS and one for browsers. When referencing hd-wallet through any modern
build tooling, it should pick the right one automatically through the entry
points defined in `package.json`.

[Yarn]: https://yarnpkg.com/

## Installation

In order to add hd-wallet to your project, use Yarn or NPM to either include a
released version from the NPM package repositories, or directly from GitHub. The
latter is especially interesting if you'd like to stay up to date with recent
developments. If you include such a version, please do provide Yarn on your
system as the package will first have to build itself during installation.

### Yarn

```
yarn add @aeternity/hd-wallet
```

### NPM

```
npm install @aeternity/hd-wallet
```

## License

ISC License (ISC)
Copyright © 2018 aeternity developers

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.
