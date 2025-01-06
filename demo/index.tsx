import { createRoot } from 'react-dom/client';
import React, { useState, createRef, DetailedHTMLProps } from 'react';

import 'scriptex-socials';

import { items } from './mocks';
import { Carousel, CarouselRef } from '../dist/index';

const getRandomValue = () => {
	const crypto = window.crypto || window.msCrypto;
	const array = new Uint8Array(1);

	return crypto.getRandomValues(array)[0] / Math.pow(2, 8);
};

declare global {
	namespace React {
		namespace JSX {
			interface IntrinsicElements {
				'social-links': DetailedHTMLProps<
					HTMLAttributes<HTMLElement>,
					HTMLElement
				>;
			}
		}
	}

	interface Window {
		msCrypto: typeof Crypto;
	}
}

const App = () => {
	const carouselRef = createRef<CarouselRef>();
	const [result, setResult] = useState('');

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
								setResult(
									JSON.stringify(
										carouselRef.current?.getItems() || [],
										null,
										2
									)
								);
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
								const index = carouselRef.current
									?.getSelectedIndex()
									.toString();

								setResult(`Selected slide's index is ${index}`);
							}}
						>
							Get selected slide&apos;s index
						</button>
					</li>

					<li>
						<button
							onClick={() => {
								const index = Math.floor(
									getRandomValue() * items.length
								);

								carouselRef.current?.setSelectedIndex(index);

								setResult(`Selected slide's index is ${index}`);
							}}
						>
							Set selected slide&apos;s index to a random value
						</button>
					</li>
				</ul>
			</div>

			<div className="usage usage--center">
				<h2>
					Carousel with React.ref, external controls and slideOnClick
				</h2>
			</div>

			<Carousel ref={carouselRef} items={items} slideOnClick />

			<div className="usage usage--center">
				<h2>
					Carousel without React.ref, external controls and
					slideOnClick
				</h2>
			</div>

			<Carousel items={items} />

			<social-links></social-links>
		</>
	);
};

createRoot(document.getElementById('root')!).render(<App />);
