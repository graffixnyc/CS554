import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchShows from './SearchShows';

import '../App.css';

const ShowList = () => {
	const [ searchData, setSearchData ] = useState(undefined);
	const [ showsData, setShowsData ] = useState(undefined);
	const [ searchTerm, setSearchTerm ] = useState(undefined);
	let li = null;

	const showSearch = async () => {
		try {
			const { data } = await axios.get('http://api.tvmaze.com/search/shows?q=' + searchTerm);
			setSearchData(data);
			console.log(`SearchTerm in showSearch: ${searchTerm}`);
			console.log(searchData);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await axios.get('http://api.tvmaze.com/shows');
				setShowsData(data);
			} catch (e) {
				console.log(e);
			}
		}
		fetchData();
	}, []);

	const searchValue = async (value) => {
		console.log(`Search Term in searchValue ${value}`);
		setSearchTerm(value);
		console.log(searchTerm);
		showSearch();
	};

	if (searchTerm) {
		li =
			searchData &&
			searchData.map((shows) => {
				let show = shows.show;

				return (
					<li key={show.id}>
						<Link to={`/shows/${show.id}`}>{show.name}</Link>
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
