import * as React from 'react';
import { CarouselItem } from '../src';

const AMOUNT = 20;

export const items: CarouselItem[] = Array(AMOUNT)
	.fill('')
	.map((_: string, index: number) => ({
		alt: 'A random Unsplash photo',
		image: `https://source.unsplash.com/random/210x210?sig=${Math.floor(Math.random() * AMOUNT * 2)}`,
		content: (
			<div>
				<strong>Round Carousel</strong>
				<span>Slide number {index + 1}</span>
			</div>
		)
	}));
