import * as React from 'react';
import { createRoot } from 'react-dom/client';

import 'scriptex-socials';

import { items } from './mocks';
import { Carousel } from '../dist/index';

const App = () => (
	<>
		<a
			href="https://github.com/scriptex/react-round-carousel"
			title="See code on Github"
			className="github-fork-ribbon"
			data-ribbon="See code on Github"
		>
			See code on Github
		</a>

		<Carousel items={items} />

		<social-links></social-links>
	</>
);

createRoot(document.getElementById('root')!).render(<App />);
