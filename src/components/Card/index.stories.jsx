import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';
import logo from '../../logo.svg';

const decoratorStyle = {
	display: 'flex',
	justifyContent: 'center',
	marginTop: 50
};

const centerDecorator = storyFn => (
	<div style={decoratorStyle}>{storyFn()}</div>
);

storiesOf('Card', module)
	.addDecorator(centerDecorator)
	.add('Basic', () => (
		<Card icon={logo} title="Café com código" points={1500} responsible="RH" />
	));
