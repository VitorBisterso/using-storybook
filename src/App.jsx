import React from 'react';
import Card from '@components/Card';
import coffee from '@img/coffee.svg';

const App = () => {
	return (
		<div className="app-wrapper">
			<Card
				icon={coffee}
				title="Café com código"
				points={1500}
				responsible="RH"
			/>
		</div>
	);
};

export default App;
