import React, { useState, useEffect } from 'react';
import axios from 'axios';
import noImage from '../img/download.jpeg';

const Show = (props) => {
	const [ showData, setShowData ] = useState(undefined);
	useEffect(
		() => {
			async function fetchData() {
				try {
					const { data: show } = await axios.get(`http://api.tvmaze.com/shows/${props.match.params.id}`);
					setShowData(show);
					console.log(show);
				} catch (e) {
					console.log(e);
				}
			}
			fetchData();
		},
		[ props.match.params.id ]
	);

	let body = null;
	let summary = null;
	const regex = /(<([^>]+)>)/gi;
	if (showData && showData.summary) {
		summary = showData && showData.summary.replace(regex, '');
	} else {
		summary = 'No Summary';
	}

	console.log({ showData });

	let img = null;
	if (showData && showData.image) {
		img = <img alt='Show' src={showData.image.medium} />;
	} else {
		img = <img alt='Show' src={noImage} />;
	}
	body = (
		<div className='show-body'>
			<h3 className='cap-first-letter'>{showData && showData.name}</h3>
			<br />
			{img}
			<br />
			<p>
				Average Rating: {showData && showData.rating.average}
				<br />
				Network: {showData && showData.network && showData.network.name} <br />
				Language: {showData && showData.language}
				<br />
				Runtime: {showData && showData.runtime}
				<br />
				Premiered: {showData && showData.premiered}
				<br />
			</p>
			<b>Genres</b>:
			<dl className='list-unstyled'>
				{showData &&
					showData.genres.map((genre) => {
						return <dt key={genre}>{genre}</dt>;
					})}
			</dl>
			<p>Summary: {summary}</p>
		</div>
	);

	return body;
};

export default Show;
