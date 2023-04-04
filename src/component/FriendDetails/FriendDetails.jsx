import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
	const friendData = useLoaderData();
	console.log(friendData);
	const navigate = useNavigate();
	const goBackHandler = () => {
		navigate(-1);
	};
	return (
		<div>
			<h3>Everything about this parson is here</h3>
			<h4>name:- {friendData.name}</h4>
			<p>Phone: {friendData.phone}</p>
			<button onClick={goBackHandler}>Go Back</button>
		</div>
	);
};

export default FriendDetails;
