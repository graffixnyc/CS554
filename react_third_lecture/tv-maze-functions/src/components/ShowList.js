import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchShows from './SearchShows';
import noImage from '../img/download.jpeg';

import '../App.css';

const ShowList = () => {
	const [ searchData, setSearchData ] = useState(undefined);
	const [ showsData, setShowsData ] = useState(undefined);
	const [ searchTerm, setSearchTerm ] = useState('');
	let li = null;

	useEffect(
		() => {
			async function fetchData() {
				if (searchTerm) {
					const { data } = await axios.get('http://api.tvmaze.com/search/shows?q=' + searchTerm);
					setSearchData(data);
					console.log(`SearchTerm in showSearch: ${searchTerm}`);
					console.log(searchData);
				}
				try {
					const { data } = await axios.get('http://api.tvmaze.com/shows');
					setShowsData(data);
				} catch (e) {
					console.log(e);
				}
			}
			fetchData();
		},
		[ searchTerm ]
	);

	const searchValue = async (value) => {
		console.log(`Search Term in searchValue ${value}`);
		setSearchTerm(value);
	};

	if (searchTerm) {
		li =
			searchData &&
			searchData.map((shows) => {
				let show = shows.show;
				let img = null;
				if (show.image) {
					img = <img alt='Show' src={show.image.medium} />;
					//<br />;
				} else {
					img = <img alt='Show' src={noImage} />;
				}

				return (
					<li key={show.id}>
						<Link to={`/shows/${show.id}`}>
							{img} <br />
							{show.name}
						</Link>
					</li>
				);
			});
	} else {
		li =
			showsData &&
			showsData.map((show) => (
				<li key={show.id}>
					<Link to={`/shows/${show.id}`}>
						<img alt='Show' src={show.image.medium} />; <br />
						{show.name}
					</Link>
				</li>
			));
	}

	return (
		<div className='App-body'>
			<SearchShows searchValue={searchValue} />
			<ul className='list-unstyled'>{li}</ul>
		</div>
	);
};

export default ShowList;
