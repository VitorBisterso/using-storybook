import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children, color, size }) => (
	<p style={{ color, fontSize: size }}>{children}</p>
);

Label.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired
};

export default Label;
