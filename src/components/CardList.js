import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
	throw new Error("Noooo!");

	return (
		<div>
			{robots.map((user, i) => (
				<Card key={i} id={user.id} name={user.name} email={user.email} />
			))}
		</div>
	);
};

export default CardList;
