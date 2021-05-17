import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { items } from './mocks';
import { Carousel } from '../dist/index';

const App = () => <Carousel items={items} />;

ReactDOM.render(<App />, document.getElementById('root'));
