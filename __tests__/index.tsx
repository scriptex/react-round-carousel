import React, { createRef } from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';

import { items } from '../demo/mocks';
import { Carousel, CarouselRef } from '../src';

const carouselItems = items
	.map(item => ({
		...item,
		image: item.image.replace(/\?.*$/gm, '')
	}))
	.slice(0, 2);

describe('Accordion', () => {
	it('should render properly with ref prop', async () => {
		const ref = createRef<CarouselRef>();
		const { asFragment, getAllByRole } = await waitFor(() =>
			render(<Carousel ref={ref} items={carouselItems} />)
		);

		expect(asFragment()).toMatchSnapshot();

		const carousel = ref.current;

		expect(carousel).toBeDefined();
		expect(carousel?.next).toBeInstanceOf(Function);
		expect(carousel?.prev).toBeInstanceOf(Function);
		expect(carousel?.getItems).toBeInstanceOf(Function);
		expect(carousel?.getSelectedIndex).toBeInstanceOf(Function);
		expect(carousel?.setSelectedIndex).toBeInstanceOf(Function);

		expect(carousel?.getItems().length).toEqual(2);
		expect(carousel?.getSelectedIndex()).toEqual(0);

		const [prev, next] = getAllByRole('button');

		await waitFor(() => fireEvent(next, new Event('click')));

		expect(asFragment()).toMatchSnapshot();

		await waitFor(() => fireEvent(prev, new Event('click')));

		expect(asFragment()).toMatchSnapshot();
	});

	it('should render properly without ref props', () => {
		const { asFragment } = render(<Carousel items={carouselItems} />);

		expect(asFragment()).toMatchSnapshot();
	});
});
