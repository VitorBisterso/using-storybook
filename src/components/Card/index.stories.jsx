import React from 'react';
import { storiesOf } from '@storybook/react';
import coffee from '@img/coffee.svg';
import Card from '.';

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
		<Card
			icon={coffee}
			title="Café com código"
			points={1500}
			responsible="RH"
		/>
	));
