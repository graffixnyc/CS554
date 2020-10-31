import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [shows, setShowData] = useState(undefined);

  useEffect(() => {
    console.log('useEffect has been called');

    async function fetchData() {
      try {
        const { data } = await axios.get('http://api.tvmaze.com/shows');
        setShowData(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <ul>
          {shows && shows.map((show) => <li key={show.id}>{show.name}</li>)};
        </ul>
      </div>
    );
  }
}

export default App;
