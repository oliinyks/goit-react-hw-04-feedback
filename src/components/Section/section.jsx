import React from 'react';
import PropTypes from 'prop-types';
import css from './section.module.css';

const Section = ({title, children }) => (
	<div>
	<h2 className={css.title}>{title}</h2>
	{children}
	</div>
)
Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}
export default Section;