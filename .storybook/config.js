import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import '../src/index.css'

const globalDecorator = story => (
	<div className="app-wrapper">{story()}</div>
);

addDecorator(globalDecorator);
configure(require.context('../src/components', true, /\.stories\.jsx$/), module);