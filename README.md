# React Round Carousel [![npm][npm-version-img]][npm-version-url] [![MIT license][license-img]][license-url] [![Twitter][twitter-img]][twitter-url] [![Analytics][analytics-img]][analytics-url]

> An infinitely scrollable 3D carousel component for React

[![All issues on Github][github-issues-img]][github-issues-url]
[![Open issues on Github][github-open-issues-img]][github-open-issues-url]
[![Closed issues on Github][github-closed-issues-img]][github-closed-issues-url]
[![Latest Github gag][github-tag-img]][github-tag-url]
[![GitHub last commit][last-commit-img]][last-commit-url]

[![Weekly downloads on NPM][npm-downloads-weekly-img]][npm-url]
[![Monthly downloads on NPM][npm-downloads-monthly-img]][npm-url]
[![Yearly downloads on NPM][npm-downloads-yearly-img]][npm-url]
[![Total downloads on NPM][npm-downloads-total-img]][npm-url]

[![Githib build status][github-status-img]][github-status-url]
[![Combined Github checks][github-checks-img]][github-checks-url]
![Publish size][publish-size-img]
![Top language][github-top-language-img]
![Used languages count][github-languages-img]
[![Renovate App Status][renovateapp-img]][renovateapp-url]
[![Make A Pull Request][prs-welcome-img]][prs-welcome-url]

<img src="https://raw.githubusercontent.com/scriptex/react-round-carousel/master/screenshot.png" alt="Screen    shot of the React Round Carousel component" />

This is an infinitely scrollable 3D carousel component which can be used in a React application.

## Install

First install the component using your preferred package manager:

```sh
npm i react-round-carousel

# or

yarn add react-round-carousel
```

## Usage

Then import the component in your application. Here is an example:

The slides (or items) should have the following shape:

| Prop      | Type        | Required | Description                                       | Example                                      |
| --------- | ----------- | -------- | ------------------------------------------------- | -------------------------------------------- |
| `alt`     | `string`    | false    | Alternative text for the slide image              | 'This is an example alt text'                |
| `image`   | `string`    | true     | Path or URL to an image                           | 'https://source.unsplash.com/random/210x210' |
| `content` | `ReactNode` | true     | A ReactNode representing the content of the slide | `<div><strong>Slide Title</strong></div>`    |

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Carousel, CarouselItem } from '../dist/index';

// Create an array of Carousel Items
const items: CarouselItem[] = Array(20)
	.fill('')
	.map((_: string, index: number) => ({
		alt: 'A random Unsplash photo',
		image: 'https://source.unsplash.com/random/210x210',
		content: (
			<div>
				<strong>Round Carousel</strong>
				<span>Slide number {index + 1}</span>
			</div>
		)
	}));

const App = () => <Carousel items={items} />;

ReactDOM.render(<App />, document.getElementById('root'));
```

## Options

The component accepts the following configuration options as props:

| Prop                | Type           | Required   | Description                                     | Default    |
| ------------------- | -------------- | ---------- | ----------------------------------------------- | ---------- |
| `classNamePrefix`   | `string`       | false      | CSS classname prefix for the Carousel component | 'carousel' |
| `items`             | `CarouselItem` | true       | An array of `CarouselItem`s                     | []         |
| `itemWidth`         | `number`       | false      | Width of each of the carousel items             | 210        |
| `nextButtonContent` | `string        | ReactNode` | Content of the next button                      | 'Next'     |
| `prevButtonContent` | `string        | ReactNode` | Content of the previous button                  | 'Previous' |
| `showControls`      | `boolean`      | false      | Show/hide navigation controls                   | true       |

## Support this project

[![Tweet][tweet-img]][tweet-url]
[![Donate on PayPal][paypal-img]][paypal-url]
[![Become a Patron][patreon-img]][patreon-url]
[![Buy Me A Coffee][ko-fi-img]][ko-fi-url]
[![Donate on Liberapay][liberapay-img]][liberapay-url]
[![Donate on Issuehunt][issuehunt-img]][issuehunt-url]

## LICENSE

[MIT][license-url]

[npm-version-img]: https://badgen.net/npm/v/react-round-carousel?icon=npm
[npm-version-url]: https://www.npmjs.com/package/react-round-carousel
[license-img]: https://badgen.net/npm/license/react-round-carousel
[license-url]: https://github.com/scriptex/react-round-carousel/blob/master/LICENSE
[twitter-url]: https://twitter.com/scriptexbg
[twitter-img]: https://badgen.net/twitter/follow/scriptexbg?icon=twitter&color=1da1f2&cache=300
[github-tag-img]: https://badgen.net/github/tag/scriptex/react-round-carousel?icon=github
[github-tag-url]: https://github.com/scriptex/react-round-carousel/releases/latest
[github-checks-img]: https://badgen.net/github/checks/scriptex/react-round-carousel?icon=github
[github-checks-url]: https://github.com/scriptex/react-round-carousel
[github-issues-img]: https://badgen.net/github/issues/scriptex/react-round-carousel?icon=github
[github-issues-url]: https://github.com/scriptex/react-round-carousel/issues
[github-open-issues-img]: https://badgen.net/github/open-issues/scriptex/react-round-carousel?icon=github
[github-open-issues-url]: https://github.com/scriptex/react-round-carousel/issues?q=is%3Aopen+is%3Aissue
[github-closed-issues-img]: https://badgen.net/github/closed-issues/scriptex/react-round-carousel?icon=github
[github-closed-issues-url]: https://github.com/scriptex/react-round-carousel/issues?q=is%3Aissue+is%3Aclosed
[last-commit-img]: https://badgen.net/github/last-commit/scriptex/react-round-carousel?icon=github
[last-commit-url]: https://github.com/scriptex/react-round-carousel/commits/master
[analytics-img]: https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/react-round-carousel/README.md
[analytics-url]: https://github.com/scriptex/react-round-carousel/
[npm-downloads-weekly-img]: https://badgen.net/npm/dw/react-round-carousel?icon=npm
[npm-downloads-monthly-img]: https://badgen.net/npm/dm/react-round-carousel?icon=npm
[npm-downloads-yearly-img]: https://badgen.net/npm/dy/react-round-carousel?icon=npm
[npm-downloads-total-img]: https://badgen.net/npm/dt/react-round-carousel?icon=npm
[npm-url]: https://www.npmjs.com/package/react-round-carousel
[tweet-img]: https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3
[tweet-url]: https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Freact-round-carousel&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome
[paypal-img]: https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65
[paypal-url]: https://www.paypal.me/scriptex
[patreon-img]: https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413
[patreon-url]: https://www.patreon.com/atanas
[ko-fi-img]: https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi
[ko-fi-url]: https://ko-fi.com/scriptex
[liberapay-img]: https://img.shields.io/liberapay/receives/scriptex.svg?logo=liberapay
[liberapay-url]: https://liberapay.com/scriptex
[issuehunt-img]: https://raw.githubusercontent.com/BoostIO/issuehunt-materials/master/v1/issuehunt-shield-v1.svg
[issuehunt-url]: https://issuehunt.io/r/scriptex/react-round-carousel
[publish-size-img]: https://badgen.net/packagephobia/publish/react-round-carousel
[renovateapp-img]: https://badgen.net/badge/renovate/enabled/green?cache=300
[renovateapp-url]: https://renovatebot.com
[prs-welcome-img]: https://badgen.net/badge/PRs/welcome/green?cache=300
[prs-welcome-url]: https://github.com/scriptex/react-round-carousel/pulls
[github-status-img]: https://badgen.net/github/status/scriptex/react-round-carousel?icon=github
[github-status-url]: https://github.com/scriptex/react-round-carousel/actions/workflows/build.yml
[github-languages-img]: https://img.shields.io/github/languages/count/scriptex/react-round-carousel
[github-top-language-img]: https://img.shields.io/github/languages/top/scriptex/react-round-carousel
