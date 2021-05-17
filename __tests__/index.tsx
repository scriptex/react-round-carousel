import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { items } from '../demo/mocks';
import { Carousel } from '../dist';

describe('Accordion', () => {
	it('should render properly with default props', () => {
		const tree = renderer.create(<Carousel items={items} />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
