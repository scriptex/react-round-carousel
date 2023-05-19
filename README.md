[![Github Build](https://github.com/scriptex/react-round-carousel/workflows/Build/badge.svg)](https://github.com/scriptex/react-round-carousel/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/react-round-carousel/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/react-round-carousel&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-react-round-carousel-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/react-round-carousel/badge)](https://www.codefactor.io/repository/github/scriptex/react-round-carousel)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/react-round-carousel/README.md?pixel)](https://github.com/scriptex/react-round-carousel/)

# React Round Carousel

> An infinitely scrollable 3D carousel component for React

[![Demo](https://raw.githubusercontent.com/scriptex/react-round-carousel/master/screenshot.png)](https://react-round-carousel.atanas.info/)

This is an infinitely scrollable, touch enabled, 3D, image carousel component which can be used in a React application.

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/react-round-carousel?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/react-round-carousel?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/react-round-carousel?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/react-round-carousel)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/react-round-carousel?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/react-round-carousel?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/react-round-carousel?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/react-round-carousel?style=plastic)

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
import { createRoot } from 'react-dom/client';

import { Carousel, CarouselRef, CarouselItem } from 'react-round-carousel';

// Create an array of Carousel Items
const items: CarouselItem[] = Array(20)
	.fill('')
	.map((_: string, index: number) => ({
		alt: 'A random photo',
		image: `https://picsum.photos/${210 + index}`,
		content: (
			<div>
				<strong>Round Carousel</strong>
				<span>Slide number {index + 1}</span>
			</div>
		)
	}));

const App = () => {
	const carouselRef = React.createRef<CarouselRef>();

	return <Carousel ref={carouselRef} items={items} slideOnClick />;
};

createRoot(document.getElementById('root')!).render(<App />);
```

## Options

The component accepts the following configuration options as props:

| Prop                | Type               | Required | Description                                     | Default    |
| ------------------- | ------------------ | -------- | ----------------------------------------------- | ---------- |
| `classNamePrefix`   | `string`           | false    | CSS classname prefix for the Carousel component | 'carousel' |
| `items`             | `CarouselItem`     | true     | An array of `CarouselItem`s                     | []         |
| `itemWidth`         | `number`           | false    | Width of each of the carousel items             | 210        |
| `nextButtonContent` | `string/ReactNode` | false    | Content of the next button                      | 'Next'     |
| `prevButtonContent` | `string/ReactNode` | false    | Content of the previous button                  | 'Previous' |
| `showControls`      | `boolean`          | false    | Show/hide navigation controls                   | true       |
| `slideOnClick`      | `boolean`          | false    | Slide to the clicked slide                      | false      |

## Controlling from outside

It is possible to control the component from outside - for example from a parent component. In order to do so, a React Ref should be used. The `current` reference contains several methods, including:

-   `next` - Slides the carousel to the next slide.
-   `prev` - Slides the carousel to the previous slide.
-   `getItems` - Returns an array with all items passed to the carousel.
-   `getSelectedIndex` - Returns the active slide index of the carousel.
-   `setSelectedIndex` - Sets the active slide index of the carousel and slides to this slide.

The [demo](https://react-round-carousel.atanas.info) shows how to use these methods.

## Style

In order to achieve the layout shown in the [demo](https://react-round-carousel.atanas.info), you should add styles to your markup.

There is an already existing stylesheet which can be found in the `src` folder and can be imported:

-   in your JS entrypoint

```javascript
import 'react-round-carousel/src/index.css';
```

-   in your CSS entrypoint

```css
@import 'react-round-carousel/src/index.css';
```

If you don't want to use the default stylesheet, you can create and use your own.

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
