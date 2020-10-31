import React, { useState, useEffect } from 'react';
import axios from 'axios';
import noImage from '../img/download.jpeg';

const Show = (props) => {
  const [showData, setShowData] = useState(undefined);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data: show } = await axios.get(
          `http://api.tvmaze.com/shows/${props.match.params.id}`
        );
        setShowData(show);
        console.log(show);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [props.match.params.id]);

  let summary = null;
  const regex = /(<([^>]+)>)/gi;
  if (showData && showData.summary) {
    summary = showData && showData.summary.replace(regex, '');
  } else {
    summary = 'No Summary';
  }

  let img = null;
  if (showData && showData.image) {
    img = <img alt="Show" src={showData.image.medium} />;
  } else {
    img = <img alt="Show" src={noImage} />;
  }

  return (
    <div className="show-body">
      <h1 className="cap-first-letter">{showData && showData.name}</h1>
      <br />
      {img}
      <br />
      <p>
        <span className="title">Average Rating: </span>
        {showData && showData.rating.average}
        <br />
        <span className="title">Network:</span>{' '}
        {showData && showData.network && showData.network.name} <br />
        <span className="title">Language:</span> {showData && showData.language}
        <br />
        <span className="title">Runtime:</span> {showData && showData.runtime}
        <br />
        <span className="title">Premiered:</span>{' '}
        {showData && showData.premiered}
        <br />
      </p>
      <span className="title">Genres</span>:
      <dl className="list-unstyled">
        {showData &&
          showData.genres.map((genre) => {
            return <dt key={genre}>{genre}</dt>;
          })}
      </dl>
      <p>
        <span className="title">Summary:</span> {summary}
      </p>
    </div>
  );
};

export default Show;
