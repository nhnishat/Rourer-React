import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<NavLink to="/friends">Friends</NavLink>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
		</nav>
	);
};

export default Header;
