import React from 'react';
import Card from './components/Card';
import logo from './logo.svg';

const App = () => {
	return (
		<div className="app-wrapper">
			<Card
				icon={logo}
				title="Café com código"
				points={1500}
				responsible="RH"
			/>
		</div>
	);
};

export default App;
