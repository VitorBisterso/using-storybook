import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';
import coffee from '../../assets/img/coffee.svg';

storiesOf('Card', module).add('Basic', () => (
	<Card
		icon={coffee}
		title="Café com código"
		points={1500}
		responsible="RH"
	/>
));
