import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '.';

import * as globalCss from '../../global-css.json';

storiesOf('Label', module)
	.add('Big', () => (
		<Label color={globalCss.colors.black} size={globalCss.texts.big}>
			Big text
		</Label>
	))
	.add('Small', () => (
		<Label color={globalCss.colors.black} size={globalCss.texts.small}>
			Small text
		</Label>
	));
