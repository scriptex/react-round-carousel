import * as React from 'react';
import { createRoot } from 'react-dom/client';

import 'scriptex-socials';

import { items } from './mocks';
import { Carousel, CarouselRef } from '../dist/index';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'social-links': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
		}
	}
}

const App = () => {
	const carouselRef = React.createRef<CarouselRef>();
	const [result, setResult] = React.useState('');

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

			<div className="usage">
				<h2>External controls</h2>

				{result && (
					<pre>
						<code>{result}</code>
					</pre>
				)}

				<ul>
					<li>
						<button
							onClick={() => {
								setResult(JSON.stringify(carouselRef.current?.getItems() || [], null, 2));
							}}
						>
							Get carousel items
						</button>
					</li>

					<li>
						<button
							onClick={() => {
								setResult('');

								carouselRef.current?.prev();
							}}
						>
							Go to previous slide
						</button>
					</li>

					<li>
						<button
							onClick={() => {
								setResult('');

								carouselRef.current?.next();
							}}
						>
							Go to next slide
						</button>
					</li>

					<li>
						<button
							onClick={() => {
								const index = carouselRef.current?.getSelectedIndex().toString();

								setResult(`Selected slide's index is ${index}`);
							}}
						>
							Get selected slide&apos;s index
						</button>
					</li>

					<li>
						<button
							onClick={() => {
								const index = Math.floor(Math.random() * items.length);

								carouselRef.current?.setSelectedIndex(index);

								setResult(`Selected slide's index is ${index}`);
							}}
						>
							Set selected slide&apos;s index to a random value
						</button>
					</li>
				</ul>
			</div>

			<Carousel ref={carouselRef} items={items} slideOnClick />

			<social-links></social-links>
		</>
	);
};

createRoot(document.getElementById('root')!).render(<App />);
