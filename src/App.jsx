import React from 'react';
import Label from './components/Label';

import * as globalCss from './global-css.json';

const App = () => {
	return (
		<div className="app-wrapper">
			<Label color={globalCss.colors.black} size={globalCss.texts.big}>
				This is just a project to learn more about storybook. To see the
				stories run
			</Label>
			<p className="command-text">npm run storybook</p>
		</div>
	);
};

export default App;
