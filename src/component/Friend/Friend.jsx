import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
	const { name, email, phone, id } = friend;
	const navigate = useNavigate();
	const handleShowMore = () => {
		navigate(`/friend/${id}`);
	};
	return (
		<div className="friend">
			<h3>Name: {name}</h3>
			<p>Email: {email}</p>
			<p>
				<small>Phone: {phone}</small>
			</p>
			<p>
				<Link to={`/friend/${id}`}>Show me details</Link>
			</p>
			<button onClick={handleShowMore}>more wth btn</button>
		</div>
	);
};

export default Friend;
