import * as React from 'react';
import { CarouselItem } from '../dist';

export const items: CarouselItem[] = Array(20)
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
