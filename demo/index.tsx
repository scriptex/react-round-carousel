import * as React from 'react';
import { createRoot } from 'react-dom/client';

import 'scriptex-socials';

import { Carousel, CarouselRef } from '../dist/index';
import { items } from './mocks';

const App = () => {
	const ref = React.createRef<CarouselRef>();

	return (
		<>
			<a
				href="https://github.com/scriptex/react-round-carousel"
				title="See code on Github"
				className="github-fork-ribbon"
				data-ribbon="See code on Github"
			>
				See code on Github
			</a>

			<Carousel items={items} ref={ref} />

			<social-links></social-links>
		</>
	);
};

createRoot(document.getElementById('root')!).render(<App />);
