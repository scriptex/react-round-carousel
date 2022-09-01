import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { items } from '../demo/mocks';
import { Carousel } from '../src';

describe('Accordion', () => {
	it('should render properly with default props', () => {
		const tree = renderer
			.create(
				<Carousel
					items={items.map(item => ({
						...item,
						image: item.image.replace(/\?.*$/gm, '')
					}))}
				/>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
