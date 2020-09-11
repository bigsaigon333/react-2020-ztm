import React from "react";
// import request from "request";

const Card = ({ id, name, email }) => {
	// const  = props;
	/* 
	function getData() {
		const url = `https://openapi.naver.com/v1/search/book.json?query=${encodeURI(
			"꽃"
		)}`;
		request.get(
			{
				url,

				headers: {
					"X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
					"X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
				},
				mode: "no-cors",
			},
			(err, res, body) => {
				try {
					let json = JSON.parse(body);
					console.log(json);
				} catch (e) {
					console.error(e);
				}
			}
		);
	} */

	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}?200x200`} alt="robots" />

			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
