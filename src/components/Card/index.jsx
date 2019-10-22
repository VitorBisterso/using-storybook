import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Card = ({ icon, title, points, responsible }) => (
	<div className="card-wrapper">
		<div className="card-information">
			<img alt="card-icon" src={icon} />
			<p className="card-title">{title}</p>
			<p className="card-points-responsible">
				+{points} PONTOS <br />
				Responsável: {responsible}
			</p>
		</div>
		<div className="card-footer">
			<p>Editar</p>
			<p>Excluir</p>
		</div>
	</div>
);

Card.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	points: PropTypes.number.isRequired,
	responsible: PropTypes.string.isRequired
};

export default Card;
